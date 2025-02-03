import { expect, test } from 'vitest';
import { MagicPill } from './magicPill.js';


test('Magic Pill should not change value', () => {
  const magicPill = new MagicPill(1, 5);
  magicPill.updateBenefitValue();
  expect(magicPill.name).toBe('Magic Pill');  
  expect(magicPill.expiresIn).toBe(1);
  expect(magicPill.benefit).toBe(5);
});
