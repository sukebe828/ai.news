import * as React from 'react'

import { useDarkMode } from 'lib/use-dark-mode'
import * as types from 'lib/types'
import styles from './Footer.module.css'
import { FooterConfig } from './Footer.config'
import Script from 'next/script'

export function FooterImpl() {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  React.useEffect(() => {
    setHasMounted(true)
    // 初始化 Ko-fi widget
    if (typeof window !== 'undefined' && (window as any).kofiWidgetOverlay) {
      (window as any).kofiWidgetOverlay.draw('meow828', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#00b9fe',
        'floating-chat.donateButton.text-color': '#fff'
      })
    }
  }, [])

  return (
    <>
      {/* 載入 Ko-fi overlay widget script */}
      <Script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        strategy="afterInteractive"
      />
      <footer className={styles.footer}>
        {/* 你原本 footer 嘅內容保持唔變 */}
        <div className={styles.copyright}>
          © {currentYear} Meow828 • All rights reserved.
        </div>
      </footer>
    </>
  )
}
