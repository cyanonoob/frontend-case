import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface TeaserProps {
  href: string,
  title: string,
  text: string,
  topic?: string|undefined,
  imageUrl: string|undefined,
  imageAlt: string|undefined
}

const Teaser: React.FC<TeaserProps> = ({ href, title, text, topic, imageAlt, imageUrl }) => {
  return (
    <Link href={href} className='flex flex-col hover:text-primary'>
      <div className='relative'>
        { !!imageUrl &&
        <Image src={imageUrl} alt={imageAlt || title} width={500} height={400} className='aspect-[4/3] object-cover object-center rounded-md w-full' />
        }
        { !!topic && 
        <span class='absolute bottom-2 left-2 bg-lightblue px-4 py-2 rounded uppercase'>{ topic }</span>
      }
      </div>
      <h4 className='mt-6 mb-4'>{ title }</h4>
      <p className='mb-4 mt-auto'>{ text }</p>
      <span>Lees meer <FontAwesomeIcon icon={faArrowRight} /></span>
    </Link>
  )
}

export default Teaser;