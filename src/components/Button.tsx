import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx'


type Props = {
    buttonLink: LinkField
    buttonText: string | null
    className?: string 
}

function Button({ buttonLink, buttonText, className }: Props) {
  return (
      <PrismicNextLink field={buttonLink}
      
          className={clsx("rounded-xl bg-orange-500 px-5 py-4 text-center text-xl font-bold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl", className)}
      >
      {buttonText}
     </PrismicNextLink>
  )
}

export default Button