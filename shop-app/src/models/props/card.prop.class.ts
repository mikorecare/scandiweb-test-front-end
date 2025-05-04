import { Product } from "../products/product.abstract.class";

export class CardProps {
  
  public get inCart(): boolean {
    return true;
  }

  public get inStock(): boolean {
    return this.product.inStock;
  }

  public get productPricing(): string {
    return `${this.currencySymbol}${this.amount}`;
  }

  public get image(): string {
    return this.product.gallery[0];
  }

  public get productName(): string {
    return this.product.name;
  }

  private get amount(): number {
    return Number(this.product.prices[0].amount.toFixed(2));
  }

  private get currencySymbol(): string {
    return this.product.prices[0].currency.symbol;
  }

  constructor(private readonly product: Product) {}
}
