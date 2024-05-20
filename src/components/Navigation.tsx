import { PreprSdk } from "@/server/prepr";
import Link from "next/link";

interface NavigationProps {
  className: string,
  slug?: string|undefined,
}

const Navigation: React.FC<NavigationProps> = async ({ className, slug }) => {

  const { Navigation } = await PreprSdk.Navigation({slug: slug || 'header'});
  
  return(
    <nav className={`flex ${className}`}>
      
      { Navigation?.items.map(item => (
        <Link href={`/${item.link_to_page[0]?._slug || item?._slug || '#'}`} key={item._id}>{item.title}</Link>
      ))
      }
    </nav>
  )
}

export default Navigation