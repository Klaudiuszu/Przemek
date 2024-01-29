import Link from "next/link";
import { useEffect, useState } from "react";

const NavLink = ({ href, title }) => {
  const [link, setLink] = useState();

  useEffect(() => {
    const activeNav = document.getElementById(link);
    const elementsWithClass = document.querySelectorAll('.navbar-underline');
    elementsWithClass.forEach((el) => {
      el.classList.remove('navbar-underline');
    });

    if (activeNav) {
      if (href === link) {
        activeNav.classList.add('navbar-underline');
      }
    }
  }, [link, href]);

  return (
    <Link 
      href={href}
      className={`navbar-link`}
      id={href}
      onClick={() => setLink(href)}
    >
      {title}
    </Link>
  );
};

export default NavLink;
