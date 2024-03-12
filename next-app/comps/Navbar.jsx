
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
           <div className="logo">
               <Image src="/DL-logo.webp" width={128} height={78} alt='abc'/>
           </div>
           {/* not using href coz going to use something else instead to link*/}
           <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="/nextFolder"><a>Developer Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;