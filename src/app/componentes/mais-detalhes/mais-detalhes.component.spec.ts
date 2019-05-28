import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisDetalhesComponent } from './mais-detalhes.component';

describe('MaisDetalhesComponent', () => {
  let component: MaisDetalhesComponent;
  let fixture: ComponentFixture<MaisDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
