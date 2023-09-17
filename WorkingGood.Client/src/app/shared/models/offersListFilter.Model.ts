export interface OffersListFilterModel{
  searchPhrase: string;
  rangeFrom: number;
  rangeTo: number;
  experienceLevel: string[] | undefined;
  status: string | undefined;
  isMine: boolean | undefined;
}
