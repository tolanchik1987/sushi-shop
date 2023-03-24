import Image from 'next/image'
import React, { FC } from 'react'
import LoaderGif from '../../../public/images/loader/loader.gif'

const Loader: FC = ():JSX.Element => {
  return (
    <><Image
    src={LoaderGif}
    alt="pizza"
    width={50}
    height={50}
    quality={100} /></>
  )
}

export default Loader