import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <div>
        <div>
            {/* <span>Nishiki Blog</span>ここをPropsで受け取りつつ値を変化させてページをわかりやすくする */}
        </div>
        <div>
            <Link href="/">HOME</Link>
            <Link href="/about">about</Link>
            <Link href="/">skill</Link>
        </div>
    </div> 
  )
}

export default Header