import { mockCompanies } from "@/app/models/Company";
import { CompanyDetails } from "@/components/company/CompanyDetails";
export default function Page(props: { params: { id: string } }) {
  const company = mockCompanies.find((company) => company.id === props.params.id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return <CompanyDetails company={company} />;
}
