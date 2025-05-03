import { AttributeSetType } from "./attribute-set-type.enum";
import { Attribute } from "./attribute.class";

export class AttributeSet {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: AttributeSetType,
    public readonly items: Attribute[]
  ) {}
}
