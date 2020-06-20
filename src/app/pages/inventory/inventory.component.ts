import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  product: Product = new Product();

  products: Product[] = [];

  productToUpdate: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAll().subscribe((product: Product[]) => {
      this.products = product;
    });
  }

  create() {
    this.productService.create(this.product).subscribe((product) => {
      this.product = product;

      // Solution 1 pour afficher la liste raffraichie
      // this.initProductList();

      // Solution 2
      this.products.push(product);

    });
  }

  update() {
    this.productService.update(this.productToUpdate).subscribe((FreshlyUpdateProduct) => {
      this.initProductList();
      this.product[0] = FreshlyUpdateProduct;
    });
  }

  initProductList() {
    this.productService.getAll().subscribe((product: Product[]) => {
      this.products = product;
      this.productToUpdate = { ...product[0] };
    });
  }

}

