import { HttpClient } from '@angular/common/http';
import { IsaActionTypes, CacheNoCargado, CargarCache, CacheCargado } from './isa.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ICache, enTipoCriterio } from './isa.reducer';
import { of, forkJoin } from 'rxjs';


@Injectable()
export class IsaEffects {
  @Effect()
  public cargar$ = this.actions$.ofType(IsaActionTypes.CargarCache)
    .pipe(
      mergeMap((action: CargarCache) =>
        forkJoin([
          this.http.get('/assets/launchstatus.json'),
          this.http.get('/assets/launchagencies.json'),
          this.http.get('/assets/launchmissions.json'),
          this.http.get('/assets/launchlibrary.json')
        ]).pipe(
          map((results: any[]) => new CacheCargado(this.dameCache(results))),
          catchError(err => of(new CacheNoCargado))
        )
      )
    );

  dameCache(results: any[]): ICache {
    const cache: ICache = {
      tiposCriterios: [],
      estados: [],
      agencias: [],
      tiposMision: [],
      lanzamientos: []
    };
    cache.tiposCriterios = Object.keys(enTipoCriterio).slice(Object.keys(enTipoCriterio).length / 2);
    // Ya que solo necesitamos ciertos campos, mapeamos los resultados para reducir el consumo de memoria
    cache.estados = results[0].types.map(d => ({
      value: d.id, viewValue: d.id + ' - ' + d.description + ' (' + d.name + ')'
    }));
    cache.agencias = results[1].agencies.map(d => ({
      value: d.id, viewValue: d.id + ' - ' + d.name
    }));
    cache.tiposMision = results[2].types.map(d => ({
      value: d.id, viewValue: d.id + ' - ' + d.name
    }));

    cache.lanzamientos = results[3].launches.map(d => ({
      name: d.name
      , launchDate: d.net
      , status: d.status
      , agencyId: d.rocket ? d.rocket.agencies ? d.rocket.agencies.length > 0 ? d.rocket.agencies[0].id : 0 : 0 : 0
      , missionType: d.missions ? d.missions.length > 0 ? d.missions[0].type : 0 : 0
    })
    );
    return cache;
  }
  constructor(private actions$: Actions, private http: HttpClient) { }
}
