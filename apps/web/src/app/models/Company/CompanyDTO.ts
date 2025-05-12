import { CompanyReadingDTO } from "../CompanyReading";

export type CompanyDTO = {
  id: string;
  theirStackId: string;
  name: string;
  domain: string;
  industry: string;
  country: string;
  countryCode: string;
  employeeCount: number;
  logo: string;
  readings: CompanyReadingDTO[];
  reliabilityScore: number;
};
