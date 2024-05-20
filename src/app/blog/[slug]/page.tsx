import parse from 'html-react-parser';
import { PreprSdk } from '@/server/prepr';
import Link from 'next/link';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Teaser from '@/components/Teaser';

export default async function Page({ params }: { params: { slug: string }}) {
  const { Blog } = await PreprSdk.Blog({ slug: params.slug });
  return (
    <main>
      {!!Blog?.banner_image.url &&
        <Hero imageUrl={Blog.banner_image.url} imageAlt={Blog.banner_image?.description || Blog.title} narrow={true} />
      }      
      <div className='bg-white py-20'>
        <Container className='content flex flex-col'>
          <Link href={`/blog?topic=${Blog?.categories[0]?.slug}`} class='bg-lightblue mb-4 px-4 py-3 self-start mr-auto hover:bg-primary hover:text-white'>{Blog?.categories[0]?.body}</Link>
          <h1>{ Blog?.title }</h1>
          {Blog?.content?.map((element) => (
            parse(element.html)
          ))}
        </Container>
      </div>
      { !!Blog?.related_blogs?.length &&
      <div className='bg-lightblue py-20'>
        { Blog?.related_blogs?.length }
        {Blog?.related_blogs?.map((item) => {
          const textContent = item.content?.find(item => !!item?.text); // gets the first content entry that has a usable text property
          const text = typeof textContent?.text === 'string' ? textContent?.text.split(/\s+/).slice(0, 20).join(' ') : ''; // gets the text

          return (
            <Teaser title={item.title} topic={item.categories[0]?.body} key={item._id} text={`${text}...`} imageUrl={item.banner_image.url} imageAlt={item.banner_image.caption} href={`/blog/${item._slug}`} />
          )
        })}
      </div>
      }
    </main>
  )
}