import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';

import './header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <Container className="navContainer">
        <Link href="/">
          <Image src="/logo-tagline.svg" alt="2Digits Digital Agency" className="logo" width={208} height={32} />
        </Link>

        <Navigation slug="header" className="headerNav" />
      </Container>
    </header>
  );
};

export default Header;
