export interface CompanyIdentity{
  id: string
  name: string
  description: string;
  logo: string | null;
  urlLink: string | null;
  location: string | null;
  contactEmail: string;
  activeOfferQuantity: number;

}
