import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {
  constructor(private product: ProductService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    alert('If anything went wrong!!! then navigate the user to exception page...');
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}