import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEntradaComponent } from './input-entrada.component';

describe('InputEntradaComponent', () => {
  let component: InputEntradaComponent;
  let fixture: ComponentFixture<InputEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
