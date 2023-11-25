import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>@All rights deserved</span>
      <div className={styles.socialNetworks}>
        <Image src={'/1.png'} width={20} height={20} alt={'facebooks'}  className={styles.icon} />
        <Image src={'/2.png'} width={20} height={20} alt={'instagram'} className={styles.icon} />
        <Image src={'/3.png'} width={20} height={20} alt={'x'} className={styles.icon} />
        <Image src={'/4.png'} width={20} height={20} alt={'youtube'} className={styles.icon} />
      </div>
    </div>
  )
}