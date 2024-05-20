import parse from 'html-react-parser';
import Image from 'next/image';

import './hero.scss';
import Container from '../Container';


interface HeroProps {
  title?: string,
  text?: string|undefined,
  imageUrl: string|undefined,
  imageAlt?: string|undefined,
  narrow: Boolean
}

const Hero:React.FC<HeroProps> = ({ title, text, imageAlt, imageUrl, narrow }) => {
  return (
    <div className={`hero ${narrow ? 'narrow' : ''}`}>
      <Container className='heroContent'>
        { !!title &&
          <h1>{title}</h1>
        }

        { !!text &&
          <div className='text'>{ parse(text)}</div>
        }
      </Container>
      { !!imageUrl &&
      <Image src={imageUrl} alt={imageAlt || title} width={1200} height={300} />
      }
    </div>
  )
}

export default Hero;