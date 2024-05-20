'use client';
import React, { useCallback } from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const BlogFilter: React.FC = () => {
  
  const pathname = usePathname();  
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams();
      params.set(name, value);
      return params.toString();
    },
    [],
  );

  const topics = [
    { label: 'Interview', value: 'interview' },
    { label: 'Blog', value: 'blog' },
    { label: 'Whitepaper', value: 'whitepaper' },
  ];
  const activeStyle = 'bg-primary border-primary text-white hover:bg-black';
  const inactiveStyle = 'bg-white border-lightblue hover:bg-lightblue';
  const baseStyle =
    'px-4 py-3 border rounded uppercase font-sans text-xs font-medium flex items-center justify-center';
  const allBlogsStyle = searchParams.get('topic') ? inactiveStyle : activeStyle;
  return (
    <div className="flex w-full gap-8">
      <div className="flex flex-wrap gap-2">
        <Link href="/blog" className={`${baseStyle} ${allBlogsStyle}`}>
          All blogs
        </Link>

        {topics.map((topic) => {
          const topicStyle =
            searchParams.get('topic') === topic.value ? activeStyle : inactiveStyle;
          return (
            <Link
              className={`${baseStyle} ${topicStyle}`}
              key={topic.value}
              href={pathname + '?' + createQueryString('topic', topic.value)}>
              {topic.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogFilter;
