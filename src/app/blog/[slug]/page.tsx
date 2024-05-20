import Link from 'next/link';

import parse from 'html-react-parser';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Teaser from '@/components/Teaser';
import { PreprSdk } from '@/server/prepr';

export default async function Page({ params }: { params: { slug: string } }) {
  const { Blog } = await PreprSdk.Blog({ slug: params.slug });
  const category = Blog?.categories[0];
  return (
    <main>
      {!!Blog?.banner_image.url && (
        <Hero
          imageUrl={Blog.banner_image.url}
          imageAlt={Blog.banner_image.description || Blog.title}
          narrow={true}
        />
      )}

      <div className="bg-white py-20">
        <Container className="content flex flex-col">
          { category && category.slug && category.body && 
            <Link
              href={`/blog?topic=${category.slug}`}
              className="mb-4 mr-auto self-start bg-lightblue px-4 py-3 hover:bg-primary hover:text-white">
              {category.body}
            </Link>
          }

          <h1>{Blog?.title}</h1>

          {Blog?.content?.map((element) => parse(element?.__typename === 'Text' ? (element.html || '') : ''))}
        </Container>
      </div>

      {!!Blog?.related_blogs.length && (
        <div className="bg-lightblue py-20">
          {Blog.related_blogs.length}

          {Blog.related_blogs.map((item) => {
            const textContent = item.content?.find((item) => item?.__typename === 'Text');
            const text:string =
              textContent?.__typename === 'Text'
                ? (textContent.text || '').split(/\s+/).slice(0, 20).join(' ')
                : '';

            return (
              <Teaser
                title={item.title}
                topic={item.categories[0]?.body}
                key={item._id}
                text={`${text}...`}
                imageUrl={item.banner_image.url}
                imageAlt={item.banner_image.caption}
                href={`/blog/${item._slug}`}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
