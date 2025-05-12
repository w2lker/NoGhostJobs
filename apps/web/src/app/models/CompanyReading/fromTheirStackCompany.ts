import { TheirStackCompanyDTO } from "../theirStack";
import { CompanyReadingDTO } from "./CompanyReadingDTO";

export const fromTheirStackCompany = (company: TheirStackCompanyDTO): CompanyReadingDTO => {

  return {
    id: '',
    createdAt: new Date(),
    employeeCount: company.employee_count ?? 0,
    totalJobsCount: company.num_jobs ?? 0,
    jobsOpen: company.num_jobs_found ?? 0,
    jobsOpen30Days: company.num_jobs_last_30_days ?? 0
  };
};
