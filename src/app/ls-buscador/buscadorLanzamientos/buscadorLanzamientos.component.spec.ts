/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsBuscadorLanzamientosComponent } from './buscadorLanzamientos.component';

describe('BuscadorLanzamientosComponent', () => {
  let component: LsBuscadorLanzamientosComponent;
  let fixture: ComponentFixture<LsBuscadorLanzamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LsBuscadorLanzamientosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsBuscadorLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
