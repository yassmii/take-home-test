import { IDrug } from '../drugs/IDrug.js';
import { IPharmacy } from './IPharmacy.js';

export class Pharmacy implements IPharmacy {
  drugs: IDrug[];
  constructor(drugs: IDrug[]) {
    this.drugs = drugs;
  }
  updateBenefitValue(): IDrug[] {
    this.drugs.forEach(drug => {
      drug.updateBenefitValue();
    });

    return structuredClone(this.drugs);
  }
}