import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, title }) => {
  const router = useRouter();
  
  // Pobieramy 'auth' z 'router.query' używając bezpiecznego dostępu do właściwości
  // const auth = router.query?.auth === undefined ? null : router.query?.auth;
router ==! undefined ? router : null
  return (
    <Link 
      href={href}
      id={href}
      key={href}
      className={`navbar-single-lin ${router.asPath === '/' + href ?'navbar-underline' : ''}`}
    >
      {title}
    </Link>
  )
};

export default NavLink;
