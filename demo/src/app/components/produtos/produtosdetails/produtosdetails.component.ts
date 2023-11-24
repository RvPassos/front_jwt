import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { LoginService } from 'src/app/services/login.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtosdetails',
  templateUrl: './produtosdetails.component.html',
  styleUrls: ['./produtosdetails.component.scss']
})
export class ProdutosdetailsComponent implements OnInit {

  @Input() produto: Produto = new Produto();
  @Output() retorno = new EventEmitter<Produto>();

  produtosService = inject(ProdutosService);


  constructor(private loginService: LoginService) {

  }

  ngOnInit(){
    this.checkPermission();
  }

  checkPermission(){
    if (this.loginService.hasPermission('ADMIN')) {
      console.log('TU É ADM PAI')
    } else {
      console.log('SAI FORA, VOCÊ NÃO PERTENCE A ESSE LUGAR')
    }
  }



  salvar() {

    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ
    this.produtosService.save(this.produto).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.retorno.emit(produto);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }

}

