import Navbar from "./Navbar"
import Footer from "./Footer"
import Meta from "../meta"

export default function Layout({ children }) {
  return (
    <div>
    <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}