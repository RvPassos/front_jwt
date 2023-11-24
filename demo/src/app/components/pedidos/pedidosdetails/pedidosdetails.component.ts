import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { LoginService } from 'src/app/services/login.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidosdetails',
  templateUrl: './pedidosdetails.component.html',
  styleUrls: ['./pedidosdetails.component.scss']
})
export class PedidosdetailsComponent implements OnInit {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno: EventEmitter<any> = new EventEmitter<any>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  pedidosService = inject(PedidosService);


  constructor(private loginService: LoginService) {

  }

  ngOnInit(){
    this.checkPermission();
  }

  checkPermission(){
    if (this.loginService.hasPermission('ADMIN') || this.loginService.hasPermission('USER')) {
      console.log('TU TEM ESPAÇO AQUI IRMÃO')
    } else {
      console.log('SAI FORA, VOCÊ NÃO PERTENCE A ESSE LUGAR')
    }
  }

  salvar() {
    //ISSO AQUI SERVE PARA EDITAR OU ADICIONAR... TANTO FAZ

    this.pedidosService.save(this.pedido).subscribe({
      next: pedido => { // QUANDO DÁ CERTO
        this.retorno.emit(pedido);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });



  }


  excluir(produto: Produto, indice: number) {

    this.pedido.produtos.splice(indice,1);
    
  }

  retornoProdutosList(produto: Produto) {

    if (this.pedido.produtos == null)
      this.pedido.produtos = [];

    this.pedido.produtos.push(produto);
    this.modalRef.dismiss();
}


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
