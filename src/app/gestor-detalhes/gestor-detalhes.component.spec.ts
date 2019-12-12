import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorDetalhesComponent } from './gestor-detalhes.component';

describe('GestorDetalhesComponent', () => {
  let component: GestorDetalhesComponent;
  let fixture: ComponentFixture<GestorDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
