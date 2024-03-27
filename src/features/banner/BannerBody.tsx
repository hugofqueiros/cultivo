'use client'

import styles from './banner.module.css'

interface BannerBodyProps {
  bannerText: string
  bannerList: string[]
}

export const BannerBody = (props: BannerBodyProps) => {
  const { bannerText, bannerList } = props

  return (
    <div className={styles.bannerbody}>
      <p>{bannerText}</p>
      {bannerList.length > 0 && (
        <ul>
          {bannerList.map((text, i) => (
            <li key={i}>{text}</li> // since there's no re-ordering of items it's fine to use index as li key
          ))}
        </ul>
      )}
    </div>
  )
}
