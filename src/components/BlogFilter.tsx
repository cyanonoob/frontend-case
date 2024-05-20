'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSearchParams, usePathname } from 'next/navigation';
import { useCallback } from 'react';

const BlogFilter: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const pathname = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams()
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const topics = [    
    { label: 'Interview', value: 'interview' },
    { label: 'Blog', value: 'blog' },
    { label: 'Whitepaper', value: 'whitepaper' }
  ]
  const activeStyle = 'bg-primary border-primary text-white hover:bg-black';
  const inactiveStyle = 'bg-white border-lightblue hover:bg-lightblue';
  const baseStyle = 'px-4 py-3 border rounded uppercase font-sans text-xs font-medium flex items-center justify-center';
  const allBlogsStyle = !searchParams?.get('topic') ? activeStyle : inactiveStyle;
  return (
    <div className='flex gap-8 w-full'>
      <div className='flex gap-2 flex-wrap'>
        <Link href='/blog' className={`${baseStyle} ${allBlogsStyle}`}>All blogs</Link>
        {topics.map(topic => {
          const topicStyle = searchParams?.get('topic') === topic.value ? activeStyle : inactiveStyle;
          return (
          <Link className={`${baseStyle} ${topicStyle}`} href={
          pathname + '?' + createQueryString('topic', topic.value)
        }>{topic.label}</Link>
        )})}
      </div>
    </div>
  );
};

export default BlogFilter;
