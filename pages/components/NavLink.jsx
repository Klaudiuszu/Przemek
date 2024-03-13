import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, title, e = { auth: null } }) => {
  const router = useRouter();

  console.log({href})

  return (
    <Link 
      href={href === undefined || null ? '/' : href}
      id={href}
      key={href}
      className={`navbar-single-lin ${router.asPath === '/' + href ?'navbar-underline' : ''}`}
    >
      {title}
    </Link>
  )
};

export default NavLink;


