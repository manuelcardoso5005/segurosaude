import {getTranslations} from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('PlansPage');

  return {
    title: t('title')
  };
}

export default async function PlanosPage() {
  const t = await getTranslations('PlansPage');

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="mt-3 text-foreground/75">{t('description')}</p>
    </main>
  );
}
