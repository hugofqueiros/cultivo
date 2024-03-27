'use client'

import { Button } from '@/components'

import { BannerBody } from './BannerBody'
import { BannerHeader } from './BannerHeader'

import styles from './banner.module.css'

interface BannerProps {
  backgroundImage: string
  BannerHeaderIcon: () => JSX.Element
  bannerHeaderText: string
  bannerHeaderTitle: string
  bannerText: string
  bannerList: string[]
  buttonText: string
  onClick: () => void
}

export const Banner = (props: BannerProps) => {
  const { buttonText, onClick } = props

  return (
    <div className={styles.banner}>
      <BannerHeader {...props} />
      <BannerBody {...props} />
      <div className={styles.bannerbutton}>
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  )
}
