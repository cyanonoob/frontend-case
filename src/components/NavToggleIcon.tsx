'use client';

import { useEffect, useState } from 'react';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavToggleIcon: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const icon = expanded ? (
    <FontAwesomeIcon icon={faXmark} className="xmark" />
  ) : (
    <FontAwesomeIcon icon={faBars} className="bars" />
  );

  useEffect(() => {
    for (const link of document.querySelectorAll('nav a')) {
      link.addEventListener('click', () => {
        setExpanded(false);
      });
    }
  }, []);
  return (
    <div
      className={`navToggle ${expanded ? 'expanded' : ''}`}
      onClick={() => {
        setExpanded(!expanded);
      }}>
      {icon}
    </div>
  );
};

export default NavToggleIcon;
