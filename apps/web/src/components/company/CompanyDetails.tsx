import { CompanyDTO } from "@/app/models/Company";
import { ReliabilityScoreBadge } from "@/components/company/ReliabilityScoreBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";

type CompanyDetailsProps = {
  company: CompanyDTO;
};

export const CompanyDetails = (props: CompanyDetailsProps) => {
  const { company } = props;
  const latestReading = company.readings[company.readings.length - 1];
  const t = useTranslations('company');

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Left column - Logo and badge */}
          <div className="relative">
            <div className="flex items-center justify-center pt-4">
              <div className="relative h-48 w-48">
                {company.domain ? (
                  <Link href={`https://${company.domain}`} target="_blank">
                    <Image
                      src={company.logo}
                      alt={t('logoAlt', { name: company.name })}
                      fill
                      className="object-contain"
                    />
                  </Link>
                ) : (
                  <Image
                    src={company.logo}
                    alt={t('logoAlt', { name: company.name })}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right column - Company info and readings */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 justify-between">
                <h2 className="text-2xl font-bold">
                  {company.domain ? (
                    <Link href={`https://${company.domain}`} target="_blank" className="hover:underline">
                      {company.name}
                    </Link>
                  ) : (
                    company.name
                  )}
                </h2>
                <ReliabilityScoreBadge score={company.reliabilityScore} />
              </div>
              <p className="text-muted-foreground">{company.country}</p>
            </div>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>{t('employeeCount')}</TableCell>
                  <TableCell>{latestReading.employeeCount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t('totalJobs')}</TableCell>
                  <TableCell>{latestReading.totalJobsCount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t('openJobs')}</TableCell>
                  <TableCell>{latestReading.jobsOpen}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t('openJobs30Days')}</TableCell>
                  <TableCell>{latestReading.jobsOpen30Days}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{t('lastUpdated')}</TableCell>
                  <TableCell>{new Date(latestReading.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
