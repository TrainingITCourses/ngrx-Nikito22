
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromIsa from './../isa.reducer';
import { environment } from '../../environments/environment';


export interface State {
  isa: fromIsa.State;
}

export const reducers: ActionReducerMap<State> = {
  isa: fromIsa.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
