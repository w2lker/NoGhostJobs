import { TheirStackCompanyDTO } from "../theirStack";
import { CompanyDTO } from "./CompanyDTO";
import { fromTheirStackCompany as fromTheirStackCompanyReading } from "../CompanyReading/fromTheirStackCompany";
import { calculateCompanyReliabilityScore } from "./companyReliabilityScore";

export const fromTheirStackCompany = (company: TheirStackCompanyDTO): CompanyDTO => {
  return {
    id: '',
    theirStackId: company.id,
    name: company.name ?? '',
    domain: company.domain ?? '',
    industry: company.industry ?? '',
    country: company.country ?? '',
    countryCode: company.country_code ?? '',
    employeeCount: company.employee_count ?? 0,
    logo: company.logo ?? '',
    readings: [fromTheirStackCompanyReading(company)],
    reliabilityScore: calculateCompanyReliabilityScore([fromTheirStackCompanyReading(company)])
  };
};
