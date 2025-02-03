import { IDrug } from '../drugs/IDrug.js';

export interface IPharmacy  {
    drugs: IDrug[];
    updateBenefitValue(): IDrug[];
}