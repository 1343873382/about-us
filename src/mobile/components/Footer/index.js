/*
 * @Author: your name
 * @Date: 2021-03-07 14:18:56
 * @LastEditTime: 2021-03-10 13:17:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /about-us/src/mobile/components/Footer/index.js
 */
import React, { useContext } from 'react'
import { Context } from '../../Context'
import './index.scss'

export const Footer = () => {
  const { footer } = useContext(Context)
  const { copyright, address, email } = footer

  return (
    <footer className="mobile-footer">
      <p className="copyright">{copyright}</p>
      <p className="address">{address}</p>
      <p className="email">{email}</p>
    </footer>
  )
} 