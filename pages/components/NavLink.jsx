import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, title }) => {
 const router = useRouter();
  return (
    <Link 
      href={href}
      id={href}
      key={href}
      className={`navbar-single-lin ${router.asPath === '/' + href ?'navbar-underline' : ''}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
