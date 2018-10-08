import { Action } from '@ngrx/store';
import { enTipoCriterio, ICache } from './isa.reducer';

export enum IsaActionTypes {
  CargarCache = '[Isa] CargarCache',
  CacheCargado = '[Isa] CacheCargado',
  CacheNoCargado = '[Isa] CacheNoCargado',
  CambioTipoCriterio = '[Isa] CambioTipoCriterio',
  CambioCritero = '[Isa] CambioCritero'
}

export class CargarCache implements Action {
  public readonly type = IsaActionTypes.CargarCache;
}

export class CacheCargado implements Action {
  public readonly type = IsaActionTypes.CacheCargado;
  constructor(public readonly payload: ICache) { }
}
export class CacheNoCargado implements Action {
  public readonly type = IsaActionTypes.CacheNoCargado;
}
export class CambioTipoCriterio implements Action {
  public readonly type = IsaActionTypes.CambioTipoCriterio;
  constructor(public readonly payload: enTipoCriterio) { }
}

export class CambioCritero implements Action {
  public readonly type = IsaActionTypes.CambioCritero;
  constructor(public readonly payload: string) { }
}

export type IsaActions = CargarCache | CacheCargado | CacheNoCargado | CambioTipoCriterio | CambioCritero;
