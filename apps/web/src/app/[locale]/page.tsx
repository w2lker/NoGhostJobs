import { CompanyCard } from "@/components/company/CompanyGridItem";
import { mockCompanies } from "@/app/models/Company";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockCompanies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
