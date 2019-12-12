import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGestorComponent } from './criar-gestor.component';

describe('CriarGestorComponent', () => {
  let component: CriarGestorComponent;
  let fixture: ComponentFixture<CriarGestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarGestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
