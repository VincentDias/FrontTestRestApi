import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static BASE_URL = 'http://localhost:8080/products';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(ProductService.BASE_URL);
  }

  public create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(ProductService.BASE_URL, product);
  }


}
