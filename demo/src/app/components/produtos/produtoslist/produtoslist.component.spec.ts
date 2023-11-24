import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProdutoslistComponent } from './produtoslist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Produto } from 'src/app/models/produto';

describe('ProdutoslistComponent', () => { //GRUPO DE TESTES DE UM COMPONENTE
  let component: ProdutoslistComponent;
  let fixture: ComponentFixture<ProdutoslistComponent>;

  beforeEach(() => { //PREPARA AS DEPENDÊNCIAS INTERNAS PARA O TESTE

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], //SE O COMPONENTE INVOCA ALGUM SERVICE, INCLUÍMOS ESSA DEPENDÊNCIA DE HTTP DE TESTE
      declarations: [ProdutoslistComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ]
    });
    fixture = TestBed.createComponent(ProdutoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  beforeEach(() => {
    let aux : Produto = new Produto;
    aux.id = 1;
    aux.nome = 'produto';
    aux.valor = 50
    
  })  


  it('Teste 1 - criação ok do componente', () => {
    expect(component).toBeTruthy();
  });
/*
  it('Teste 2 - existência da tag table', () =>{
    const html = fixture.nativeElement as HTMLElement;
    expect(html.querySelector('.container')?.textContent).toContain('table');
  });
*/


});

