import { Observable } from 'rxjs';
import { Component, OnInit, } from '@angular/core';
import { IsaStore, IsaSlideTypes } from '../../stores/isa-store.state';

@Component({
  selector: 'ls-buscador-lanzamientos',
  templateUrl: './buscadorLanzamientos.component.html',
  styleUrls: ['./buscadorLanzamientos.component.css']
})
export class LsBuscadorLanzamientosComponent implements OnInit {

  public lanzamientos$: Observable<any>;

  constructor(public Isa: IsaStore) { }

  ngOnInit() {
    this.lanzamientos$ = this.Isa.select$(IsaSlideTypes.lanzamientos);
  }

}
