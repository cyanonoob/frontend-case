'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const NavToggleIcon: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const icon = !expanded ? (<FontAwesomeIcon icon={faBars} className='bars' />) : (<FontAwesomeIcon icon={faXmark} className='xmark' />);
  
  useEffect(() => {
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        setExpanded(false);
      });
    })
  }, []);
  return (
    <div className={`navToggle ${ expanded ? 'expanded' : ''}`} onClick={() => { setExpanded(!expanded)}}>              
    {icon}        
    </div>
    )
  }
  
  export default NavToggleIcon;