'use client';

import React, { useCallback, useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const BlogSearch: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get('q') || '');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as unknown as Record<string, string>);
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push(pathname + '?' + createQueryString('q', query));
    }
  };

  const handleClear = () => {
    setQuery('');
    router.push(pathname);
  };

  return (
    <div className="flex w-full flex-wrap gap-8">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        className="flex-1 px-4 py-3"
      />

      <Link className="button primary" href={pathname + '?' + createQueryString('q', query)}>
        Search
      </Link>

      {query && (
        <button className="button secondary" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
};

export default BlogSearch;
