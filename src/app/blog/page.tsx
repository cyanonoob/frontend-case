import { PreprSdk } from '@/server/prepr';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';
import BlogSearch from '@/components/BlogSearch';
import BlogFilter from '@/components/BlogFilter';

export default async function BlogIndex({ searchParams }: { searchParams: {[key:string] : string | string[]}}) {
  const { Page } = await PreprSdk.Page({ slug: 'blog' });  
  const query = typeof searchParams?.q === 'string' ? searchParams.q : undefined;
  const topic = typeof searchParams?.topic === 'string' ? searchParams.topic : undefined;
  const page = typeof searchParams?.page === 'string' ? parseInt(searchParams.page) : 0;

  return (
    <main>
      {!!Page?.page_header && 
        <Hero title={Page.page_header.title} text={Page.page_header.text} imageUrl={Page.page_header.image.url} imageAlt={Page.page_header.image.description} narrow={true} />
      }

      <div className='bg-lightblue'>
        <Container className='py-8'>
        <h5 className='mb-4'>Search for blogs</h5>
          <BlogSearch />          
        </Container>
      </div>
      <div className='bg-white py-20'>
        <Container className='mt-20'>
          <h5 className='mb-4'>Topics</h5> 
          <BlogFilter />         
          <h2 className='mb-8 mt-9'>De nieuwste blogs</h2>
          <BlogList page={page} query={query} topic={topic} />
        </Container>
      </div>

    </main>
  );
}

