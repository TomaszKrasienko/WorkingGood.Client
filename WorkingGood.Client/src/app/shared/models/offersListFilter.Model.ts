export interface OffersListFilterModel{
  searchPhrase?: string;
  rangeFrom?: number;
  rangeTo?: number;
  experienceLevel?: string;
  technologies?: string[];
  status?: string;
  isMine?: boolean;
  createdDate?: Date;
  companyId?: string;
}
