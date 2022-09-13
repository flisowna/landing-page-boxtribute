import Link from "next/link"
import Facebook from "public/uploads/facebook.svg"

export const Footer = () => {
    return (
      <section className="bg-navy py-16">
         <div className="flex flex-col items-center">
          <img className="h-42" src="/uploads/boxtribute_white.png"/>
          <div className="flex flex-col">
          <Link href="/">
            <a>
              <img className="h-42" alt="instagram icon" src="/uploads/instagram.svg"/>
            </a>
            </Link>
          <Link href="/">
            <a>
              <img className="h-42" alt="facebook icon" src="/uploads/facebook.svg"/>
            </a>
            </Link>
            <Link href="/">
            <a>
              <img className="h-42" alt="linkedin icon" src="/uploads/linkedin.svg"/>
            </a>
            </Link>
            <Link href="/">
            <a>
              <img className="h-42" alt="github icon" src="/uploads/github.svg"/>
            </a>
            </Link>
          </div>
        </div>
<img src='/uploads/facebook.svg'/>
      </section>
        
      )
}

export default Footer