import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import '@angular/material/snack-bar'
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3000/Produto";
  constructor(private snackBar:MatSnackBar, private http:HttpClient) { }

  ShowMessage(msg:string, isError:boolean = false):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass:isError?['msg-success']:['msg-error']
    })
  }
  create(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseURL,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  errorHandle(e : any):Observable<any>{
    this.ShowMessage('Ocorreu um erro!',true);
    return EMPTY;
  }

  read():Observable<Product[]>{
      return this.http.get<Product[]>(this.baseURL).pipe(
        map(obj => obj),
        catchError(e => this.errorHandle(e))
      );
  }

  readById(id:string):Observable<Product>{
    const url =`${this.baseURL}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    );
  }

  update(product:Product):Observable<Product>{
    const url =`${this.baseURL}/${product.id}`
    return this.http.put<Product>(url,product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    );
  }

  delete(id:string):Observable<Product>{
    const url =`${this.baseURL}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    );
  }

  
}
