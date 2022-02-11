import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Product[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    alert(
      'Fetch the information from Resolver using the activated route',
    );
    this.activatedRoute.data.subscribe((response: any) => {
      this.products = response.products;
    });
  }

}
