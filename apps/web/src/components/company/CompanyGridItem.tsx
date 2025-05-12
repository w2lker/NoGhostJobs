import { CompanyDTO } from "@/app/models/Company";
import { ReliabilityScoreBadge } from "@/components/company/ReliabilityScoreBadge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type CompanyGridItemProps = {
  company: CompanyDTO;
};

export const CompanyCard = ({ company }: CompanyGridItemProps) => {
  return (
    <Link href={`/companies/${company.id}`}>
      <Card className="cursor-pointer transition-shadow hover:shadow-lg pt-4">
        <CardHeader className="relative">
          <ReliabilityScoreBadge
            score={company.reliabilityScore}
            className="absolute right-4 top-0 z-10"
          />
          <div className="flex items-center justify-center pt-4">
            <div className="relative h-24 w-24">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-center text-lg font-semibold">
            {company.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};
