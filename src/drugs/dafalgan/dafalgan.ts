import { IDrug } from '../IDrug.js';

export class Dafalgan implements IDrug {
  name: string = 'Dafalgan';
  expiresIn: number;
  benefit: number;

  constructor(expiresIn : number, benefit : number) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue(): void {
    if (this.benefit == 0) {
      return;
    }

    this.expiresIn -= 1;
        
    if (this.benefit > 0) {
      this.benefit -= this.expiresIn > 0 ? 2 : 4;
    }
  }
}