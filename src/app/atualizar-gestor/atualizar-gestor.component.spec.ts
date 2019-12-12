import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarGestorComponent } from './atualizar-gestor.component';

describe('AtualizarGestorComponent', () => {
  let component: AtualizarGestorComponent;
  let fixture: ComponentFixture<AtualizarGestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarGestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
