import { enTipoCriterio, ICache } from '../isa.model';

export enum IsaActionTypes {
  CargaInicial,
  CambioTipoCriterio,
  CambioCritero
}

export interface Action {
  readonly type: IsaActionTypes;
  readonly payload?: any;
}

export class CargaInicial implements Action {
  public readonly type = IsaActionTypes.CargaInicial;
  constructor(public readonly payload: ICache) { }
}
export class CambioTipoCriterio implements Action {
  public readonly type = IsaActionTypes.CambioTipoCriterio;
  constructor(public readonly payload: enTipoCriterio) { }
}

export class CambioCritero implements Action {
  public readonly type = IsaActionTypes.CambioCritero;
  constructor(public readonly payload: string) { }
}

export type IsaActions = CargaInicial | CambioTipoCriterio | CambioCritero;
