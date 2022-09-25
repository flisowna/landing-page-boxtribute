import Link from 'next/link'
import Image from "next/image";

type Props = {
  image: string
  image_description: string
  children: React.ReactNode
}

const ImageLeftTextBlock5050 = ({ image, image_description, children }: Props) => {
  return (
    <div className='flex '>
      <Image src={image} alt={image_description}/>
        <div>{children}</div>
      
    </div>
  )
}

export default ImageLeftTextBlock5050
