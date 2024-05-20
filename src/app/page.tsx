import { PreprSdk } from '@/server/prepr';
import parse from 'html-react-parser';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import RecentBlogs from '@/components/RecentBlogs';

export default async function Home() {  
  const { Page } = await PreprSdk.Page({ slug: '/' });

  return (
    <main>
      { !!Page?.page_header &&
        <Hero title={Page.page_header.title} text={Page.page_header.text} imageUrl={Page.page_header.image.url} imageAlt={Page.page_header.image.description} />        
      }

        <div className='bg-white py-20'>
        { !!Page?.html?.length &&
          <Container className=''>{ parse(Page.html) }</Container>
        }

          <Container className='mt-20'>
            <h2 className='mb-8'>De nieuwste blogs</h2>
            <RecentBlogs />
          </Container>
        </div>
      
    </main>
  );
}
