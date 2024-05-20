import parse from 'html-react-parser';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import { PreprSdk } from '@/server/prepr';

export default async function Page({ params }: { params: { slug: string } }) {
  const { Page } = await PreprSdk.Page({ slug: params.slug });

  return (
    <main>
      {!!Page?.page_header && (
        <Hero
          title={Page.page_header.title}
          text={Page.page_header.text}
          imageUrl={Page.page_header.image.url}
          imageAlt={Page.page_header.image.description}
        />
      )}

      {!!Page?.html.length && (
        <div className="bg-white py-20">
          <Container className="content">{parse(Page.html || '')}</Container>
        </div>
      )}
    </main>
  );
}
