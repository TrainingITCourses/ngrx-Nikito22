/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsBuscadorCriteriosComponent } from './buscadorCriterios.component';

describe('BuscadorCriteriosComponent', () => {
  let component: LsBuscadorCriteriosComponent;
  let fixture: ComponentFixture<LsBuscadorCriteriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LsBuscadorCriteriosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsBuscadorCriteriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
