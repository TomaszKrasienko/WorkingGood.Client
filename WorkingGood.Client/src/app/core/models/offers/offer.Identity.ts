import {SkillModel} from "../skills/skill.model";
import {PositionIdentity} from "../positions/position.identity";

export interface OfferIdentity{
  id: string;
  title: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
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
