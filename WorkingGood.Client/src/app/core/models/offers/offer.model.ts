import {SkillModel} from "../skills/skill.model";

export interface OfferModel {
  title: string;
  ContractSalaryRangeMin: number;
  ContractSalaryRangeMax: number;
  B2BSalaryRangeMin: number;
  B2BSalaryRangeMax: number;
  description: string;
  positionName: string;
  positionLevel: string;
  skills: SkillModel[];
  type: string;
  localization?: string;
}
