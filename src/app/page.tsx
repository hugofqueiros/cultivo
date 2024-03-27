'use client'

import { useState } from 'react'

import { ContactFormDialog, Icon } from '@/components'
import { BANNER_TEXT, Banner } from '@/features'

import image from './header-background.png'

import styles from './page.module.css'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const onClick = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onFormSubmitted = () => {
    setIsFormSubmitted(true)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.placeholder}>
        <Banner
          backgroundImage={image.src}
          BannerHeaderIcon={Icon}
          bannerHeaderText={
            !isFormSubmitted ? BANNER_TEXT.bannerHeaderText : ''
          }
          bannerHeaderTitle={
            !isFormSubmitted
              ? BANNER_TEXT.bannerHeaderTitle
              : BANNER_TEXT.bannerHeaderTitleSubmitted
          }
          buttonText={
            !isFormSubmitted
              ? BANNER_TEXT.buttonText
              : BANNER_TEXT.buttonTextSubmitted
          }
          bannerText={
            !isFormSubmitted
              ? BANNER_TEXT.bannerText
              : BANNER_TEXT.bannerTextSubmitted
          }
          bannerList={!isFormSubmitted ? BANNER_TEXT.bannerList : []}
          onClick={onClick}
        />
      </div>
      <ContactFormDialog
        open={open}
        onClose={onClose}
        onFormSubmitted={onFormSubmitted}
      />
    </main>
  )
}
