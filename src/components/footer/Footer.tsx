import React, { FC } from 'react'
import styles from './Footer.module.scss'

type Props = {}

const Footer: FC = (props: Props):JSX.Element => {
  return (
    <footer className={styles.container}>Footer</footer>
  )
}

export default Footer;