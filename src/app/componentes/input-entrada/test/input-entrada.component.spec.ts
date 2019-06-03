import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputEntradaComponent } from '../input-entrada.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('InputEntradaComponent', () => {
  let component: InputEntradaComponent;
  let fixture: ComponentFixture<InputEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEntradaComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(InputEntradaComponent);
      component = fixture.componentInstance;
      component.descricao = 'tors';
      fixture.detectChanges();
    });
  }));

  it('Deve criar component', () => {
    expect(component).toBeTruthy();
  });

  describe('Dado que o metodo [resposta] seja chamado... ', () => {
    beforeEach(() => {
      spyOn(component.enviaDescricao, 'emit');
      component.resposta();
    });

    it('Deve emitir descrição', () => {
      expect(component.enviaDescricao.emit).toHaveBeenCalledWith('tors');
    });
  });
});
