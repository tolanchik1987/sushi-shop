import React, { FC } from 'react'
import styles from './Footer.module.scss'

type Props = {}

const Footer: FC = (props: Props):JSX.Element => {
  return (
    <div className={styles.container}>Footer</div>
  )
}

export default Footer;