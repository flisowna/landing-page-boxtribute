import Link from "next/link";
import { useRouter } from "next/router";
import HamburgerMenu  from "./HamburgerMenu";
import { useMediaQuery } from "./mediaQuery";

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/aboutus",
  },
  {
    name: "Our Impact",
    path: "/ourimpact",
  },
  {
    name: "Contact Us",
    path: "/contactus",
  },
];

export const Navbar = () => {
  const router = useRouter();
  const isBreakpoint = useMediaQuery(768);
  return (
    <nav className="flex justify-between my-4 mx-8 z-10">
      <Link href="/">
        <a className="flex items-center">
          <img className="h-14" src="/boxtribute-logo.png" alt="boxtribute logo"/>
          <h3 className="uppercase text-xl md:text-2xl font-semibold">boxtribute</h3>
        </a>
      </Link>
      {isBreakpoint ? (
        <HamburgerMenu />
      ) : (
        <ul className="flex justify-end items-center">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.path}>
                {router.pathname === link.path ? (
                  <a className="font-bold p-2">{link.name}</a>
                ) : (
                  <a className="p-2">{link.name}</a>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
