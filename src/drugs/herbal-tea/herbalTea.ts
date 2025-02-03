import { IDrug } from '../IDrug.js';

export class HerbalTea implements IDrug {
  name: string = 'Herbal Tea';
  expiresIn: number;
  benefit: number;

  constructor( expiresIn: number, benefit: number) {
    this.benefit = benefit;
    this.expiresIn = expiresIn;
  }

  updateBenefitValue(): void {
    if (this.benefit < 50) {
      this.benefit += this.expiresIn > 0 ? 1 : 2;
    }
    
    if (this.benefit > 50) {
      this.benefit = 50;
    }
    this.expiresIn -= 1;
  }

}
