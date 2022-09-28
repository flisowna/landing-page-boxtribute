import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./meta";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
