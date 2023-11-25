import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
//import { LoginComponent } from '../components/sistema/login/login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      //declarations: [LoginComponent],
      providers: [LoginService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA //PARA QUE O KARMA NÃO CONFUNDA ELEMENTOS ANGULAR NO TEMPLATE COMO ERROS
      ]
    });
  });

  it('should be created 1', () => {
    const service: LoginService = TestBed.inject(LoginService);
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    //const fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
   // expect(component).toBeTruthy();
  });

});
