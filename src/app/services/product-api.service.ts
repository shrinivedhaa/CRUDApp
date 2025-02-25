import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private httpClient:HttpClient) { }
  getAllProductsOpenApi():Observable<any>{
    return this.httpClient.get('https://dummyjson.com/products')
  }
}
