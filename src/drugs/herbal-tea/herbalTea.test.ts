import { expect, test } from 'vitest';
import { HerbalTea } from './herbalTea.js';


test('Herbal Tea benefit should increase by 1 if expiration date is greater than 0', () => {
  const herbalTea = new HerbalTea(1, 5);
  herbalTea.updateBenefitValue();
  expect(herbalTea.expiresIn).toBe(0);  
  expect(herbalTea.benefit).toBe(6);
});

test('Herbal Tea benefit should increase by 1 if  expiration date is less than 0', () => {
  const herbalTea = new HerbalTea(-1, 3);
  herbalTea.updateBenefitValue();
  expect(herbalTea.expiresIn).toBe(-2);
  expect(herbalTea.benefit).toBe(5);
});

test('Herbal Tea benefit should not be greater than 50', () => {
  const herbalTea = new HerbalTea(5, 54);
  herbalTea.updateBenefitValue();
  expect(herbalTea.expiresIn).toBe(4);
  expect(herbalTea.benefit).toBe(50);
});