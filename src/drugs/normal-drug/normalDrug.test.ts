import { expect, test } from 'vitest';
import { NormalDrug } from './normalDrug.js';


test('Doliprane should not update if Benefit is already zero', () => {
  const doliprane = new NormalDrug('Doliprane', 0, 0);
  doliprane.updateBenefitValue();
  expect(doliprane.expiresIn).toBe(0);  
  expect(doliprane.benefit).toBe(0);
});

test('Efferalgan should update benefit value correctly', () => {
  const efferalgan = new NormalDrug('Efferalgan', 2, 4);
  efferalgan.updateBenefitValue();
  expect(efferalgan.expiresIn).toBe(1);
  expect(efferalgan.benefit).toBe(3);
});

test('Paracetamol should update benefit value correctly after expiration', () => {
  const paracetamol = new NormalDrug('Paracetamol', 0, 2);
  paracetamol.updateBenefitValue();
  expect(paracetamol.expiresIn).toBe(-1);  
  expect(paracetamol.benefit).toBe(0);
});