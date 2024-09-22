
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>About <br/>
    <Link href='/header'>go to header</Link><br/>
    <Link href='/about'>go to about</Link><br/>
    <Link href='/home'>go to home</Link>
    </div>
  )
}

export default About