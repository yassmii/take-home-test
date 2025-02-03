import { expect, test } from 'vitest';
import { Dafalgan } from './dafalgan.js';


test('Dafalgan should not update if Benefit is already zero', () => {
  const dafalgan = new Dafalgan(-5, 0);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(-5);  
  expect(dafalgan.benefit).toBe(0);
});

test('Dafalgan should update benefit value correctly', () => {
  const dafalgan = new Dafalgan(2, 3);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(1);
  expect(dafalgan.benefit).toBe(1);
});

test('Dafalgan should update benefit value correctly after expiration', () => {
  const dafalgan = new Dafalgan(0, 4);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(-1);  
  expect(dafalgan.benefit).toBe(0);
});