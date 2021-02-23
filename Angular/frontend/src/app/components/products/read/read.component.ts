import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id','name','price', 'action']

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;

    })
  }

}
