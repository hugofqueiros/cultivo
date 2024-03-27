'use client'

import styles from './banner.module.css'

interface BannerHeaderProps {
  backgroundImage: string
  BannerHeaderIcon: () => JSX.Element
  bannerHeaderText: string
  bannerHeaderTitle: string
}

export const BannerHeader = (props: BannerHeaderProps) => {
  const {
    backgroundImage,
    bannerHeaderText,
    bannerHeaderTitle,
    BannerHeaderIcon,
  } = props

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={styles.bannerheader}
    >
      <BannerHeaderIcon />
      <p>{bannerHeaderText}</p>
      <h1>{bannerHeaderTitle}</h1>
    </div>
  )
}
