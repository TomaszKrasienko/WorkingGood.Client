import {SkillModel} from "../skills/skill.model";
import {PositionIdentity} from "../positions/position.identity";

export interface OfferIdentity{
  id: string;
  title: string;
  ContractSalaryRangeMin?: number;
  ContractSalaryRangeMax?: number;
  B2BSalaryRangeMin?: number;
  B2BSalaryRangeMax?: number;
  description: string;
  offerStatus: string;
  position: PositionIdentity;
  skillsList: SkillModel[];
  type: string;
  localization?: string;
  companyId: string
  companyName: string;
  companyLogo: string;
}
