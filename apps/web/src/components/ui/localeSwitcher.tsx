'use client';

import { CheckIcon, ChevronDownIcon } from "@/components/icons";
import { routing } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from "next/navigation";

const localeFlag = (locale: string) => {
  switch (locale) {
    case 'en': return '🇺🇸';
    case 'es': return '🇪🇸';
    case 'fr': return '🇫🇷';
    case 'uk': return '🇺🇦';
    case 'zh': return '🇨🇳';
    case 'pa': return '🇮🇳';
    default: return '🌐';
  }
}

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(locale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      {pathname, params},
      {locale}
    );
  }

  return (
    <div className="hidden sm:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 border-none hover:bg-gray-100">
              <span>{localeFlag(locale)}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white bo">
            {routing.locales.map((cur) => (
              <DropdownMenuItem key={cur} onClick={() => onSelectChange(cur)}>
                <span>{localeFlag(cur)}</span>
                {t(cur)}
                {locale === cur && <CheckIcon className="h-5 w-5" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  );
};

