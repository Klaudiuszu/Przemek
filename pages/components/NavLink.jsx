import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavLink = ({ href, title }) => {
 const router = useRouter();

 console.log({href})

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
