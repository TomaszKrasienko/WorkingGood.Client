import {SkillModel} from "../skills/skill.model";

export interface OfferModel {
  title: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  description: string;
  positionName: string;
  positionLevel: string;
  skills: SkillModel[];
  type: string;
  localization?: string;
}
