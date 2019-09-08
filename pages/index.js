import React, { useEffect, useState, useRef } from 'react'
import Meta from '../components/partials/seo-meta.js'
import styled from 'styled-components'
import Layout from '../components/MyLayout'
import Header from './../components/Header'
import { rem } from 'polished'

const Index = () => {
  const textArr = ["Hello, I'm David Norris.", "I'm an App and Web Developer."]
  const titleRef = useRef()
  useEffect(() => {
    handleType()
  }, [])
  let speed = 100
  let index = 0
  let arrLength = textArr[0].length
  let scrollAt = 20
  let textPos = 0
  let contents = ' '
  let row = Math.max(0, index - scrollAt)

  const handleType = () => {
    while (row < index) {
      contents += textArr[row++] + `<br/>`
    }
    titleRef.current.innerHTML =
      contents + textArr[index].substring(0, textPos) + '_'
    if (textPos++ == arrLength) {
      textPos = 0
      index++
      if (index != textArr.length) {
        arrLength = textArr[index].length
        setTimeout(() => handleType(), 500)
      }
    } else {
      setTimeout(() => handleType(), speed)
    }
  }

  return (
    <>
      <Meta
        title='David Norris Developer Portfolio'
        desc='This is the description'
        canonical='http://djnorris.io'
      />
      <HomeLayout>
        <Header btnColor={`#fafafa`} />
        <Typewriter>
          <div>
            <h1
              ref={titleRef}
              title="Hello, I'm David Norris. I'm an App and Web Developer."
            ></h1>
          </div>
        </Typewriter>
        {/* <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by pikisuperstar - www.freepik.com</a> */}
      </HomeLayout>
      <section>
        <h2>2nd Section</h2>
      </section>
    </>
  )
}
export default Index

const PageTitle = styled.h1`
  text-align: center;
`
const HomeLayout = styled.div`
  background: #333333;
`

const Typewriter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 610px;
    height: 355px;
    background: url('https://i.postimg.cc/G3jB47hJ/laptop.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  h1 {
    color: #333333;
    text-align: center;
  }
  // Phones
  @media screen and (max-width: 349px) {
    div {
      background: url('https://i.postimg.cc/76MXfF6r/iphone.png');
      background-size: cover;
      background-repeat: no-repeat;
      width: 216px;
      height: 430px;
    }
    h1 {
      margin: 0.67em 1em;
      color: #fafafa;
    }
  }

  @media only screen and (min-device-width: 350px) and (max-device-width: 480px) {
    div {
      background: url('https://i.postimg.cc/76MXfF6r/iphone.png');
      background-size: cover;
      background-repeat: no-repeat;
      width: 267px;
      height: 520px;
    }
    h1 {
      color: #fafafa;
    }
  }

  // Pixel XL
  @media screen and (device-width: 412px) and (device-height: 823px) and (-webkit-device-pixel-ratio: 3.5) and (orientation: landscape) {
    div {
      background: url('https://i.postimg.cc/76MXfF6r/iphone.png');
      background-size: cover;
      background-repeat: no-repeat;
      width: 330px;
      height: 650px;
    }
    h1 {
      color: #fafafa;
    }
  }

  // Small iPads
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    div {
      background: url('https://i.postimg.cc/j2MXhyP8/tablet.png');
      background-size: cover;
      background-repeat: no-repeat;
      width: 540px;
      height: 840px;
    }
  }
  // iPad Pro
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    div {
      background: url('https://i.postimg.cc/j2MXhyP8/tablet.png');
      background-size: cover;
      background-repeat: no-repeat;
      width: 610px;
      height: 910px;
    }
  }
`
