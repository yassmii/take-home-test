import { writeFile } from 'fs/promises';

import { Dafalgan } from './drugs/dafalgan/dafalgan.js';
import { Fervex } from './drugs/fervex/fervex.js';
import { HerbalTea } from './drugs/herbal-tea/herbalTea.js';
import { IDrug } from './drugs/IDrug.js';
import { MagicPill } from './drugs/magic-pill/magicPill.js';
import { NormalDrug } from './drugs/normal-drug/normalDrug.js';
import { IPharmacy } from './pharmacy/IPharmacy.js';
import { Pharmacy } from './pharmacy/Pharmacy.js';

async function main() {
  const drugs : IDrug[] = [
    new NormalDrug('Doliprane', 20, 30),
    new HerbalTea(10, 5),
    new Fervex(12, 35),
    new MagicPill(15, 40),
    new Dafalgan(20, 30)
  ];
  const pharmacy: IPharmacy = new Pharmacy(drugs);
    
  const log: IDrug[][] = [];
  try {
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      log.push(pharmacy.updateBenefitValue());
    }

    /* eslint-disable no-console */
    const output = JSON.stringify({ result: log }, null, 2) + '\n';
    await writeFile('output.json', output);
    console.log('success');
  } catch (err) {
    console.error('error:', err);
  }
  /* eslint-enable no-console */
}
  
main();

