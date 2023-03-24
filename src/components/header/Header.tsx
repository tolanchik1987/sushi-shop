import React, { FC } from 'react'
import styles from './Header.module.scss'

type Props = {}

const Header: FC = (props: Props):JSX.Element => {
  return (
    <div className={styles.container}>Header</div>
  )
}

export default Header;