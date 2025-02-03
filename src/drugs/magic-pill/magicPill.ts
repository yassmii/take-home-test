import { IDrug } from '../IDrug.js';

export class MagicPill implements IDrug {
  name: string = 'Magic Pill';
  expiresIn: number;
  benefit: number;

  constructor(expiresIn: number, benefit: number) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue(): void {
  }
}