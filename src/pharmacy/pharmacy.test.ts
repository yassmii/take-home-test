import { expect, test } from 'vitest';
import { Pharmacy } from './Pharmacy.js';
import { NormalDrug } from '../drugs/normal-drug/normalDrug.js';
import { IPharmacy } from './IPharmacy.js';

test('Pharmacy', () => {
  const pharmacy : IPharmacy = new Pharmacy([new NormalDrug('test', 2, 3)]);
  pharmacy.updateBenefitValue();
  expect(pharmacy.drugs).toEqual(
    [new NormalDrug('test', 1, 2)]);
});

