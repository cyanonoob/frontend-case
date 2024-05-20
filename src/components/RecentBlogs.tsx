import Teaser from '@/components/Teaser';
import { PreprSdk } from '@/server/prepr';

interface RecentBlogsProps {
  slug?: string | undefined;
}

const RecentBlogs: React.FC<RecentBlogsProps> = async ({ slug }) => {
  const { Blogs } = await PreprSdk.Blogs({ limit: 3, skip: 0 });

  if (Blogs?.items?.length) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {Blogs?.items.map((item) => {
          const textContent = item.content?.find((item) => !!item?.text); // gets the first content entry that has a usable text property
          const text =
            typeof textContent?.text === 'string'
              ? textContent?.text.split(/\s+/).slice(0, 20).join(' ')
              : ''; // gets the text

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
    );
  }
  return <p>Geen items gevonden</p>;
};

export default RecentBlogs;
