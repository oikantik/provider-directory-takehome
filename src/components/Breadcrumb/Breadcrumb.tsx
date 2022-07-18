import React from 'react';
import { Link } from 'react-router-dom';
import { LeftChevronIcon } from '../Icons';

interface BreadcrumbProps {
  link: string;
  from: string;
  to: string;
}
function Breadcrumb({ link, from, to }: BreadcrumbProps) {
  return (
    <div className="text-input1 text-neutral8 mb-[22px] flex items-center">
      <Link to={link}>
        <span className="text-input1 text-neutral7 mr-[6px]">{from}</span>
      </Link>{' '}
      <span className="mr-[6px]">
        <LeftChevronIcon />
      </span>{' '}
      <span>{to}</span>
    </div>
  );
}

export default Breadcrumb;
