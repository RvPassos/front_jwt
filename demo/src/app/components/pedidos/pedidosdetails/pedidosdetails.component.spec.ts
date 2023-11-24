import { ComponentFixture, TestBed, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PedidosdetailsComponent } from './pedidosdetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Pedido } from 'src/app/models/pedido';
import { By } from '@angular/platform-browser';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {  //PREPARA AS DEPENDÊNCIAS INTERNAS PARA O TESTE

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], //SE O COMPONENTE INVOCA ALGUM SERVICE, INCLUÍMOS ESSA DEPENDÊNCIA DE HTTP DE TESTE
      declarations: [PedidosdetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ]
    });

    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;

    let produto = new Produto();
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;

    let pedido = new Pedido();
    pedido.id = 1;
    pedido.obs = 'Nome';
    pedido.produtos = [produto]

    component.pedido = pedido;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolação no template', () => {
    const inputElement = fixture.debugElement.query(By.css('input[name="exampleInputText1"]')).nativeElement;
    inputElement.value = 'Nome';  
    inputElement.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();  
  
    expect(component.pedido.obs).toEqual('Nome');
  });

  it('Teste 2 de @Input - Interpolação no template', () => {
    const inputElement = fixture.debugElement.query(By.css('input[name="exampleInputText1"]')).nativeElement;
    inputElement.value = 'Nome'; 
    inputElement.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();  
  
    expect(component.pedido.obs).not.toBeNull();
  });

  it('should call lancar method when "Lançar Produto" button is clicked', () => {
    spyOn(component, 'lancar');
    const buttonElement = fixture.debugElement.query(By.css('button.btn-primary')).nativeElement;
    buttonElement.click();
    expect(component.lancar).toHaveBeenCalled();
  });

  it('should render table with correct data from pedido', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('table.table-striped tbody tr'));
    expect(tableRows.length).toEqual(1); 
    expect(tableRows[0].nativeElement.textContent).toContain('Pizza');
  });

  it('should call salvar method when form is submitted', fakeAsync(() => {
    component.pedido = new Pedido();
    component.pedido.obs = 'Novas observações';

    const produto = new Produto();
    produto.id = 1;
    produto.nome = 'Pizza';
    produto.valor = 456;
    component.pedido.produtos = [produto];

    fixture.detectChanges();

    spyOn(component, 'salvar').and.callThrough();

    const inputObs = fixture.debugElement.query(By.css('input[name="exampleInputText1"]')).nativeElement;
    inputObs.value = 'Novas observações';
    inputObs.dispatchEvent(new Event('input'));

    const formElement = fixture.debugElement.query(By.css('form')).nativeElement;
    formElement.dispatchEvent(new Event('submit'));
    tick();  

    expect(component.salvar).toHaveBeenCalled();
  }));
});




