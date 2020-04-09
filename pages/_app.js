import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'

class CovidMain extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default CovidMain