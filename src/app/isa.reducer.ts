import { IsaActionTypes } from './stores/isa-store.actions';
import { Action } from '@ngrx/store';
import { CargaInicial } from './isa.actions';


export interface State {
  // Valores _cacheados, para evitar copiarlos en la funcion reduce
  cache: ICache;
  cargado: boolean;
  // Valores expuestos por el store
  tipoCriterio: enTipoCriterio;
  criterios: Selopt[];
  lanzamientos: Lanzamiento[];
}

export const initialState: State = {
  cache: {
    estados: [],
    agencias: [],
    tiposMision: [],
    lanzamientos: []
  },
  cargado: false,
  tipoCriterio: null,
  criterios: [],
  lanzamientos: [],
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case 'CargaInicial':
      state.cache = action.payload;
      state.cargado = true;
      console.log('Cargados datos iniciales');
      break;

    case 'CambioTipoCriterio':
      state.tipoCriterio = action.payload;
      switch (action.payload) {
        case enTipoCriterio.Estado:
          state.criterios = state.cache.estados;
          break;
        case enTipoCriterio.Agencia:
          state.criterios = state.cache.agencias;
          break;
        case enTipoCriterio.TipoMision:
          state.criterios = state.cache.tiposMision;
          break;
      }
      console.log('Asignados criterios ' + enTipoCriterio[action.payload]);
      break;

    case 'CambioCritero':
      switch (state.tipoCriterio) {
        case enTipoCriterio.Estado:
          state.lanzamientos = state.cache.lanzamientos.filter(l => l.status === Number(action.payload));
          break;
        case enTipoCriterio.Agencia:
          state.lanzamientos = state.cache.lanzamientos.filter(l => l.agencyId === Number(action.payload));
          break;
        case enTipoCriterio.TipoMision:
          state.lanzamientos = state.cache.lanzamientos.filter(l => l.missionType === Number(action.payload));
          break;
      }
      console.log(`Asignado ${state.lanzamientos.length} lanzamientos del tipoCriterio:
          ${enTipoCriterio[state.tipoCriterio]} criterio: ${action.payload}`);
      break;


    default:
      return state;
  }
}

/// ISA is an acronim of International Space Agency (Dedicater to my dear aunt Isabel)
export interface ICache {
  estados: Selopt[];
  agencias: Selopt[];
  tiposMision: Selopt[];
  lanzamientos: Lanzamiento[];
}


export enum enTipoCriterio {
  Estado,
  Agencia,
  TipoMision
}

export interface Selopt {
  value: string;
  viewValue: string;
}

export interface Lanzamiento {
  name: string;
  launchDate: string;
  status: number;
  agencyId: number;
  missionType: number;
}

