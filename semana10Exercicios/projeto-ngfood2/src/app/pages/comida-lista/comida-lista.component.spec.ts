import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaListaComponent } from './comida-lista.component';

describe('ComidaListaComponent', () => {
  let component: ComidaListaComponent;
  let fixture: ComponentFixture<ComidaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
