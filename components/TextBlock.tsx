import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const TextBlock = ({ children }: Props) => {
  return (
    <h3 className=" text-center my-6 mx-4 md:text-5xl md:m-16 ">
      {children}
    </h3>
    
  )
}

export default TextBlock