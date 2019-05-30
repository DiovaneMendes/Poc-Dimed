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
      fixture.detectChanges();
    });
  }));

  it('Deve criar component', () => {
    expect(component).toBeTruthy();
  });

  describe('', () => {
    beforeEach(() => {
      spyOn(component, 'resposta').and.callFake(() => { });
    });

    it('', () => {
      expect(component)
    });
  });
});
