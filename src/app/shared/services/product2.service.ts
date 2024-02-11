import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Params } from "../interface/core.interface";
import { Product, ProductModel } from "../interface/product.interface";
import { ApiServiceBase } from "./base.service";

@Injectable({
  providedIn: "root",

})
export class ProductService2 extends ApiServiceBase {
    public skeletonLoader: boolean = false;

  constructor(protected override http: HttpClient) {
    super(http);
  }

  geturi(): string {
    return this.baseUri + 'products/';
  }

  getProducts(payload?: Params): Observable<ProductModel> {
    return super.get<ProductModel>(this.geturi(), { params: payload });
  }

  getProduct(id: string): Observable<Product> {
    return super.get<Product>(`${this.geturi()}${id}`);
  }

  addProduct(payload: Params): Observable<ProductModel> {
    return super.post<ProductModel>(`${this.geturi()}`, payload);
  }

//   updateProduct(id, payload: Params): Observable<ProductModel> {
//     return super.put<ProductModel>(`${this.geturi()}${id}`, payload);
//   }

//   deleteProduct(id): Observable<ProductModel> {
//     return super.put(`${this.geturi()}${id}/delete`, {});
//   }
}
