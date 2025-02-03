import { IDrug } from '../IDrug.js';

export class Fervex implements IDrug {
  name: string = 'Fervex';
  expiresIn: number;
  benefit: number;

  constructor(expiresIn : number, benefit : number) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue(): void {

    if (this.expiresIn <= 0) {
      this.benefit = 0;
    }
    else {
      if (this.benefit < 50) {
        this.benefit += 1;
        if(this.expiresIn < 11) {
          this.benefit += 1;
        }
        if(this.expiresIn < 6) {
          this.benefit += 1;
        }      
      }
    }
    
    if (this.benefit > 50) {
      this.benefit = 50;
    }

    this.expiresIn -= 1;
  }
}