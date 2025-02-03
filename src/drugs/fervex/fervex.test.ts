import { expect, test } from 'vitest';
import { Fervex } from './fervex.js';


test('Fervex benefit should be 0 if it has expired', () => {
  const dafalgan = new Fervex(0, 0);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(-1);  
  expect(dafalgan.benefit).toBe(0);
});

test('Fervex benefit should increase by 1 if  expiration date is greater than 10', () => {
  const dafalgan = new Fervex(11, 1);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(10);
  expect(dafalgan.benefit).toBe(2);
});

test('Fervex benefit should increase by 2 if  expiration date is less or equal to 10', () => {
  const dafalgan = new Fervex(10, 1);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(9);
  expect(dafalgan.benefit).toBe(3);
});

test('Fervex benefit should increase by 3 if  expiration date is less or equal to 6', () => {
  const dafalgan = new Fervex(5, 1);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(4);
  expect(dafalgan.benefit).toBe(4);
});

test('Fervex benefit should not be greater than 50', () => {
  const dafalgan = new Fervex(5, 54);
  dafalgan.updateBenefitValue();
  expect(dafalgan.expiresIn).toBe(4);
  expect(dafalgan.benefit).toBe(50);
});