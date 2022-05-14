import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaListaComponent } from './bebida-lista.component';

describe('BebidaListaComponent', () => {
  let component: BebidaListaComponent;
  let fixture: ComponentFixture<BebidaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
