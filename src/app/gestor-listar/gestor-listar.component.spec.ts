import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorListarComponent } from './gestor-listar.component';

describe('GestorListarComponent', () => {
  let component: GestorListarComponent;
  let fixture: ComponentFixture<GestorListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
