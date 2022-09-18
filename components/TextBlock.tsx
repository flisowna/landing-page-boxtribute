import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h3 className="text-center text-5xl m-16 ">
      {children}
    </h3>
    
  )
}

export default PostTitle