import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
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
  return (
    <div className="flex justify-between my-4 mx-8 z-10">
      <Link href="/">
        <a className="flex items-center">
          <img className="h-14" src="/boxtribute-logo.png"></img>
          <h1 className="uppercase font-semibold">boxtribute</h1>
        </a>
      </Link>

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
    </div>
  );
};

export default Navbar;
