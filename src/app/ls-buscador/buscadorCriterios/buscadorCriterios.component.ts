import { CambioCritero } from './../../stores/isa-store.actions';
import { Component, OnInit } from '@angular/core';
import { IsaStore, IsaSlideTypes } from './../../stores/isa-store.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'ls-buscador-criterios',
  templateUrl: './buscadorCriterios.component.html',
  styleUrls: ['./buscadorCriterios.component.css']
})

export class LsBuscadorCriteriosComponent implements OnInit {

  public criterios$: Observable<any>;

  constructor(public Isa: IsaStore) { }

  ngOnInit() {
    this.criterios$ = this.Isa.select$(IsaSlideTypes.criterios);
  }

  onCambioCriterio(event) {
    this.Isa.dispatch(new CambioCritero(event.target.value));
  }
}
