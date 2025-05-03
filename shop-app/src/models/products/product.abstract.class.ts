import { AttributeSet } from "../attributes/attribute-set.class";
import { Price } from "../prices/price.class";
import { Category } from "./category.enum";

export abstract class Product {
  public readonly id!: string;
  public readonly name!: string;
  public readonly inStock!: boolean;
  public readonly gallery!: string[];
  public readonly description!: string;
  public abstract readonly category: Category;
  public readonly attributes!: AttributeSet[];
  public readonly prices!: Price[];
  public readonly brand!: string;
}
