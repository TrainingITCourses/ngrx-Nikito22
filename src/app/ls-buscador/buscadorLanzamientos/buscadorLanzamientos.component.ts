import { Observable } from 'rxjs';
import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../../reducers/index';

@Component({
  selector: 'ls-buscador-lanzamientos',
  templateUrl: './buscadorLanzamientos.component.html',
  styleUrls: ['./buscadorLanzamientos.component.css']
})
export class LsBuscadorLanzamientosComponent implements OnInit {

  public isa$: Observable<any>;
  public lanzamientos: any[] = [];

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.isa$ = this.store.select('isa');
  }

}
