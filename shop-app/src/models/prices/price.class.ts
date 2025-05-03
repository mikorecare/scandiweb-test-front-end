import { Currency } from "../currencies/currency.class";

export class Price {
  constructor(
    public readonly amount: number,
    public readonly currency: Currency
  ) {}
}
