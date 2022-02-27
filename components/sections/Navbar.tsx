import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex bg-red justify-between">
      <Link href="/">
        <a className="flex items-center">
          <img className="h-14" src="/boxtribute-logo.png"></img>
          <h1 className="uppercase font-semibold">boxtribute</h1>
        </a>
      </Link>

      <ul className="flex justify-end items-center">
        <li>
          <Link href="/">
            <a className="p-2">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/aboutus">
            <a className="p-2">About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/getinvolved">
            <a className="p-2">Get Involved</a>
          </Link>
        </li>
        <li>
          <Link href="/ourimpact">
            <a className="p-2">Our Impact</a>
          </Link>
        </li>
        <li>
          <Link href="/partners">
            <a className="p-2">Partners</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
