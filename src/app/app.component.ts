import { Component } from "@angular/core";
import { ProductService } from "./productservice";
import { Product } from "./product";
import { LazyLoadEvent, SelectItem } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  products: Product[];
  events1: any = [];

  constructor(
    private productService: ProductService,
    private primeNGConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.products = Array.from({ length: 10 }).map(() =>
      this.productService.generatePrduct()
    );
    let question_answered: any = {
      icon: PrimeIcons.CHECK_CIRCLE,
      color: "#51b759",
      answered: 1
    };
    let question_notanswered: any = {
      icon: PrimeIcons.QUESTION_CIRCLE,
      color: "#607D8B",
      answered: 0
    };
    this.products.forEach((item: any, i) => {
      let que = i < 4 ? question_answered : question_notanswered;
      this.events1.push({ ...que });
    });
    this.primeNGConfig.ripple = true;
  }
  setActive(item) {
    this.events1.forEach((value: any) => {
      value.isActive = false;
    });
    item.isActive = true;
  }
}
