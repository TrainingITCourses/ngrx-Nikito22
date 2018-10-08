import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { State, ICache, enTipoCriterio } from '../isa.reducer';
import { CargaInicial, CambioTipoCriterio, CambioCritero } from '../isa.actions';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ls-buscador',
    templateUrl: './ls-buscador.component.html',
    styleUrls: ['./ls-buscador.component.css']
})
export class LsBuscadorComponent implements OnInit {

    public tiposCriterios: any[];

    constructor(public store: Store<State>,
        public http: HttpClient
    ) { }

    ngOnInit() {
        // Con el pipe async y los observables por slices no es realmente necesario usar los snapshots.
        // He forzado el uso de snapshots en estos valores 'fijos' de tipos de criterios solo para satisfacer
        // el enunciado del ejercicio
        this.tiposCriterios = Object.keys(enTipoCriterio).slice(Object.keys(enTipoCriterio).length / 2);

        const cache: ICache = {
            estados: [],
            agencias: [],
            tiposMision: [],
            lanzamientos: []
        };
        forkJoin([
            this.http.get('/assets/launchstatus.json'),
            this.http.get('/assets/launchagencies.json'),
            this.http.get('/assets/launchmissions.json'),
            this.http.get('/assets/launchlibrary.json')
        ]).
            pipe(
                delay(2000) // Imitamos una cierta demora si viniera de un WebService externo
            ).subscribe((results: any[]) => {
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
                }));
                console.log('Store inicializado con los json mapeados (reducidos) y listos para su consumo');
                this.store.dispatch(new CargaInicial(cache));
            });
    }

    alCambioTipoCriterio(event) {
        this.store.dispatch(new CambioTipoCriterio(event.target.selectedIndex));
        this.store.dispatch(new CambioCritero('1')); // cargamos los lanzamientos del primer valor de los criterios
    }
}
