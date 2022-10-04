import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  bg_color?: string
  text_color?: string
  text_justify: "center" | "left"
}

const TextBlock = ({ children, bg_color, text_color, text_justify }: Props) => {
  return (
    <h3 className={`py-6 px-4 md:text-5xl md:p-16 bg-${bg_color} text-${text_color} text-${text_justify}`}>
      {children}
    </h3>
    
  )
}

export default TextBlock