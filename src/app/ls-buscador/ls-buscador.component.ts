import { CargarCache } from './../isa.actions';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { State, ICache, enTipoCriterio } from '../isa.reducer';
import { CambioTipoCriterio, CambioCritero } from '../isa.actions';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ls-buscador',
    templateUrl: './ls-buscador.component.html',
    styleUrls: ['./ls-buscador.component.css']
})
export class LsBuscadorComponent implements OnInit {

    public isa$: Observable<any>;

    constructor(public store: Store<State>) {
        this.store.dispatch(new CargarCache());
    }

    ngOnInit() {
        this.isa$ = this.store.select('isa');
    }

    alCambioTipoCriterio(event) {
        this.store.dispatch(new CambioTipoCriterio(event.target.selectedIndex));
        this.store.dispatch(new CambioCritero('1')); // cargamos los lanzamientos del primer valor de los criterios
    }
}
