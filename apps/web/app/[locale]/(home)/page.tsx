import { showBetaFeature } from '@repo/feature-flags';
import { getDictionary } from '@repo/internationalization';
import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { Hero } from './components/hero';
import { CTA } from './components/cta';
import { FAQ } from './components/faq';
import { Features } from './components/features';
import { Stats } from './components/stats';
import { Testimonials } from './components/testimonials';

type HomeProps = {
  params: Promise<{
    locale: string;
  }>;
};

type MetaType = {
  title: string | { template: string; default: string };
  description: string;
  image?: string;
};

export const generateMetadata = async ({
  params,
}: HomeProps): Promise<Metadata> => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const meta = dictionary.web.home.meta;
  const metadata: { title: string; description: string; image?: string } = {
    title: typeof meta.title === 'object' ? meta.title.default : meta.title,
    description: meta.description
  };
  if ('image' in meta && typeof meta.image === 'string') {
    metadata.image = meta.image;
  }
  return createMetadata(metadata);
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const betaFeature = await showBetaFeature();

  return (
    <>
      {betaFeature && (
        <div className="w-full bg-[#0d4b3d] py-2 text-center text-white">
          ¡SALVA BUENA COMIDA DEL DESPERDICIO!
        </div>
      )}
      <Hero dictionary={dictionary} />
      <Features dictionary={dictionary} />
      <Stats dictionary={dictionary} />
      <Testimonials dictionary={dictionary} />
      <CTA dictionary={dictionary} locale={locale} />
      <FAQ dictionary={dictionary} locale={locale} />
    </>
  );
};

export default Home;
