import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsBuscadorComponent } from './ls-buscador.component';

describe('NjBuscadorComponent', () => {
  let component: LsBuscadorComponent;
  let fixture: ComponentFixture<LsBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LsBuscadorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
