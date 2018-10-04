
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromIsa from 'app/isa.reducer';
import { environment } from '../../environments/environment';


export interface State {
  isa: Isa;

}

export const reducers: ActionReducerMap<State> = {
  isa: fromIsa.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
