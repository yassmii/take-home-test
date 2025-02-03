import { IDrug } from '../IDrug.js';

export class NormalDrug implements IDrug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name : string, expiresIn : number, benefit : number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue(): void {

    if (this.benefit == 0) {
      return;
    }

    this.expiresIn -= 1;
        
    this.benefit -= this.expiresIn > 0 ? 1 : 2;
  }
}