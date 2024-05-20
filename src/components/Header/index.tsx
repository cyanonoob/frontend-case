import Link from 'next/link';

import Container from '@/components/Container';
import Navigation from '@/components/Navigation';

import './header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <Container className="navContainer">
        <Link href="/">
          <img src="/logo-tagline.svg" alt="2Digits Digital Agency" className="logo" />
        </Link>
        <Navigation slug="header" className="headerNav" />
      </Container>
    </header>
  );
};

export default Header;
