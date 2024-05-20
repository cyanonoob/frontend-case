'use client';

import React, { useCallback } from 'react';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BlogPaginationProps {
  totalPages: number;
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ totalPages }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const pageStyle = 'px-4 py-3 rounded';
  const activeStyle = 'bg-primary text-white';
  const inactiveStyle = 'bg-white';

  const renderPageLink = (page: number) => (
    <Link
      key={page}
      className={`${pageStyle} ${page === currentPage ? activeStyle : inactiveStyle}`}
      href={`${pathname}?${createQueryString('page', page.toString())}`}>
      {page}
    </Link>
  );

  const renderFiller = (key: string) => (
    <div key={key} className={pageStyle}>
      ...
    </div>
  );

  const renderNavLink = (type: 'previous' | 'next') => {
    const page = type === 'previous' ? currentPage - 1 : currentPage + 1;
    const isDisabled = type === 'previous' ? currentPage === 1 : currentPage === totalPages;
    const text =
      type === 'previous' ? (
        <FontAwesomeIcon icon={faChevronLeft} />
      ) : (
        <FontAwesomeIcon icon={faChevronRight} />
      );
    return (
      <Link
        key={type}
        className={`${pageStyle} ${isDisabled ? 'cursor-not-allowed text-gray-400' : ''}`}
        href={!isDisabled ? `${pathname}?${createQueryString('page', page.toString())}` : '#'}
        aria-disabled={isDisabled}>
        {text}
      </Link>
    );
  };

  const pages: JSX.Element[] = [];
  pages.push(renderPageLink(1));

  if (currentPage > 3) {
    pages.push(renderFiller('start-filler'));
  }

  let startPage = Math.max(2, currentPage - 1);
  let endPage = Math.min(totalPages - 1, currentPage + 2);

  if (currentPage === 1) {
    endPage = Math.min(totalPages - 1, 4);
  } else if (currentPage === totalPages) {
    startPage = Math.max(2, totalPages - 4);
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(renderPageLink(page));
  }

  if (endPage < totalPages - 1) {
    pages.push(renderFiller('end-filler'));
  }

  pages.push(renderPageLink(totalPages));

  return (
    <div className="col-span-3 mx-auto flex flex-wrap items-center justify-center gap-4">
      {renderNavLink('previous')}
      {pages}
      {renderNavLink('next')}
    </div>
  );
};

export default BlogPagination;
