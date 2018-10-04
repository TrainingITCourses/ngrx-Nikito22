import { IsaActions, IsaActionTypes } from './isa-store.actions';
import { Isa, enTipoCriterio } from '../isa.model';

export function isaStoreReducer(
  state: Isa,
  action: IsaActions
): Isa {
  const result = { ...state };
  switch (action.type) {
    case IsaActionTypes.CargaInicial:
      result.cache = action.payload;
      result.cargado = true;
      console.log('Cargados datos iniciales');
      break;

    case IsaActionTypes.CambioTipoCriterio:
      result.tipoCriterio = action.payload;
      switch (action.payload) {
        case enTipoCriterio.Estado:
          result.criterios = state.cache.estados;
          break;
        case enTipoCriterio.Agencia:
          result.criterios = state.cache.agencias;
          break;
        case enTipoCriterio.TipoMision:
          result.criterios = state.cache.tiposMision;
          break;
      }
      console.log('Asignados criterios ' + enTipoCriterio[action.payload]);
      break;

    case IsaActionTypes.CambioCritero:
      switch (result.tipoCriterio) {
        case enTipoCriterio.Estado:
          result.lanzamientos = state.cache.lanzamientos.filter(l => l.status === Number(action.payload));
          break;
        case enTipoCriterio.Agencia:
          result.lanzamientos = state.cache.lanzamientos.filter(l => l.agencyId === Number(action.payload));
          break;
        case enTipoCriterio.TipoMision:
          result.lanzamientos = state.cache.lanzamientos.filter(l => l.missionType === Number(action.payload));
          break;
      }
      console.log(`Asignado ${result.lanzamientos.length} lanzamientos del tipoCriterio:
          ${enTipoCriterio[result.tipoCriterio]} criterio: ${action.payload}`);
      break;
  }
  return result;
}
