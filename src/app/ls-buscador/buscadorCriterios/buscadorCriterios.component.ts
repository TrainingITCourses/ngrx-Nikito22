import { State } from './../../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CambioCritero } from '../../isa.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'ls-buscador-criterios',
  templateUrl: './buscadorCriterios.component.html',
  styleUrls: ['./buscadorCriterios.component.css']
})

export class LsBuscadorCriteriosComponent implements OnInit {

  public isa$: Observable<any>;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.isa$ = this.store.select('isa');
  }

  onCambioCriterio(event) {
    this.store.dispatch(new CambioCritero(event.target.value));
  }
}
