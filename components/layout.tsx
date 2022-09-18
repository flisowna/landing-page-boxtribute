import Navbar from "./Navbar"
import Footer, {Props} from "./Footer"
import Meta from "./meta"
import { getDataBySlug } from "../../lib/api";


export default function Layout({ children}) {
  return (
    <div>
    <Meta />
      <Navbar />
      <main>{children}</main>
      {/* <Footer footerData={footerData}/> */}
    </div>
  )
}

// export const getStaticProps = async () => {
//   const footerData = getDataBySlug("footer/footer_data");

//   return {
//     props: { footerData },
//   };
// };