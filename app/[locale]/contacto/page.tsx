import {getTranslations} from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('ContactPage');

  return {
    title: t('title')
  };
}

export default async function ContactoPage() {
  const t = await getTranslations('ContactPage');

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="mt-3 text-lg text-foreground/80">{t('lead')}</p>

      <dl className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-medium text-foreground/60">
            {t('emailLabel')}
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${t('emailValue')}`}
              className="text-foreground underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground"
            >
              {t('emailValue')}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-foreground/60">
            {t('phoneLabel')}
          </dt>
          <dd className="mt-1">
            <a
              href={`tel:${t('phoneHref')}`}
              className="text-foreground underline decoration-foreground/30 underline-offset-4 transition hover:decoration-foreground"
            >
              {t('phoneDisplay')}
            </a>
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-foreground/60">
            {t('hoursLabel')}
          </dt>
          <dd className="mt-1 text-foreground/85">{t('hoursValue')}</dd>
        </div>
      </dl>

      <p className="mt-10 text-sm text-foreground/65">{t('footnote')}</p>
    </main>
  );
}
