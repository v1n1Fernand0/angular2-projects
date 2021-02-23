import { Product } from './../Product';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0.0
  }
  constructor(private ProductService:ProductService, private router:Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void{
    this.ProductService.create(this.product).subscribe(() =>{
      this.ProductService.ShowMessage("Produto criado com sucesso!");
      this.router.navigate(['/products'])
    });
    
  }

  cancel():void{
    this.router.navigate(['/products'])
  }

}
