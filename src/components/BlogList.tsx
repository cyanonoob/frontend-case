import BlogPagination from '@/components/BlogPagination';
import Teaser from '@/components/Teaser';
import { PreprSdk } from '@/server/prepr';

interface BlogListProps {
  page?: number;
  query?: string;
  topic?: string;
  className?: string;
}

const BlogList: React.FC<BlogListProps> = async ({ page, query, topic, className }) => {
  const perPage = 9;
  const currentPage = page && page > 1 ? page - 1 : 0;
  const skip = currentPage * perPage;
  const where: { [k: string]: string } = {};
  if (topic?.length) where.categories_any = topic;
  if (query?.length) where._search = query;

  const { Blogs } = await PreprSdk.Blogs({ limit: perPage, skip, where });
  const totalPages = Blogs?.total ? Math.ceil(Blogs.total / perPage) : 0;

  if (totalPages > 0) {
    return (
      <div className={`flex flex-col gap-8 ${className || ''}`}>
        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {Blogs?.items.map((item) => {
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

        <BlogPagination totalPages={totalPages} />
      </div>
    );
  } else {
    return <p>Geen blogs gevonden</p>;
  }
};

export default BlogList;
