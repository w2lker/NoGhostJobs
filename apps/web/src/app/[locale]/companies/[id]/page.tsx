import { mockCompanies } from "@/app/models/Company";
import { CompanyDetails } from "@/components/company/CompanyDetails";

export default async function Page(props: { params: { id: string } }) {
  const id = await props.params.id;
  const company = mockCompanies.find((company) => company.id === id);

  if (!company) {
    return <div>Company not found</div>;
  }

  return <CompanyDetails company={company} />;
}
