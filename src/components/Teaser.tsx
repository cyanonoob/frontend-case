import Image from 'next/image';
import Link from 'next/link';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TeaserProps {
  href: string;
  title: string;
  text: string;
  topic?: string | undefined;
  imageUrl: string | undefined;
  imageAlt: string | undefined;
}

const Teaser: React.FC<TeaserProps> = ({ href, title, text, topic, imageAlt, imageUrl }) => {
  return (
    <Link href={href} className="flex flex-col hover:text-primary">
      <div className="relative">
        {!!imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            width={500}
            height={400}
            className="aspect-[4/3] w-full rounded-md object-cover object-center"
          />
        )}
        {!!topic && (
          <span class="absolute bottom-2 left-2 rounded bg-lightblue px-4 py-2 uppercase">
            {topic}
          </span>
        )}
      </div>
      <h4 className="mb-4 mt-6">{title}</h4>
      <p className="mb-4 mt-auto">{text}</p>
      <span>
        Lees meer <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </Link>
  );
};

export default Teaser;
