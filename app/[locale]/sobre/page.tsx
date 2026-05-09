import {getTranslations} from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('AboutPage');

  return {
    title: t('title')
  };
}

export default async function SobrePage() {
  const t = await getTranslations('AboutPage');

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="mt-3 text-lg text-foreground/80">{t('lead')}</p>
      <div className="mt-8 space-y-4 text-foreground/75">
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
      </div>
    </main>
  );
}
