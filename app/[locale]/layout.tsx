import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import {BackgroundParallax} from '@/components/layout/BackgroundParallax';
import Footer from '@/components/layout/Footer/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <BackgroundParallax> 
            {children}
          </BackgroundParallax>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}