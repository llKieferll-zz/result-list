export class Tariff {
  constructor(
    public name: string,
    public downloadSpeed: Number,
    public uploadSpeed: Number,
    public benefits: String[],
    public price: Number
  ) { }
}
