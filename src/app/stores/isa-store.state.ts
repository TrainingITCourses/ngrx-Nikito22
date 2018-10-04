
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IsaActions, IsaActionTypes } from './isa-store.actions';
import { isaStoreReduce, Isa, IsaInitial } from './isa-store.reducer';

export enum IsaSlideTypes {
  cargaInicial,
  criterios,
  lanzamientos
}
@Injectable({
  providedIn: 'root'
})
export class IsaStore {
  private state: Isa = { ...IsaInitial };

  // Para emitir eventos cuando cambien los valores de los criterios y los lanzamientos filtrados
  private cargaInicial$ = new BehaviorSubject<boolean>(this.state.cargado);
  private criterios$ = new BehaviorSubject<any>(this.state.criterios);
  private lanzamientos$ = new BehaviorSubject<any>(this.state.lanzamientos);

  constructor() { }

  public select$ = (slice: IsaSlideTypes) => {
    switch (slice) {
      case IsaSlideTypes.cargaInicial:
        return this.cargaInicial$.asObservable();
      case IsaSlideTypes.criterios:
        return this.criterios$.asObservable();
      case IsaSlideTypes.lanzamientos:
        return this.lanzamientos$.asObservable();
    }
  }

  public selectSnapShot = (slice: IsaSlideTypes): any[] => {
    switch (slice) {
      case IsaSlideTypes.criterios:
        return [...this.state.criterios];
        break;
      case IsaSlideTypes.lanzamientos:
        return [...this.state.lanzamientos];
        break;
    }
  }

  public dispatch = (action: IsaActions) => {
    console.log('dispatching...', action);
    this.state = isaStoreReducer(this.state, action);
    switch (action.type) {

      case IsaActionTypes.CargaInicial:
        this.cargaInicial$.next(this.state.cargado);
        break;

      case IsaActionTypes.CambioTipoCriterio:
        this.criterios$.next([...this.state.criterios]);
        break;

      case IsaActionTypes.CambioCritero:
        this.lanzamientos$.next([...this.state.lanzamientos]);
        break;
    }
  }
}
