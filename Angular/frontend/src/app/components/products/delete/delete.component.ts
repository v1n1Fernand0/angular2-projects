import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0.0
  }

  constructor(
    private productService:ProductService,
     private router: Router,
     private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(`${id}`).subscribe(product => {
      this.product = product
    
  })}
  
  excluirProduct():void{
    this.productService.delete(`${this.product.id}`).subscribe(() =>{
      this.productService.ShowMessage("Produto excluído com sucesso!")
      this.router.navigate(['/products'])
    });
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}
