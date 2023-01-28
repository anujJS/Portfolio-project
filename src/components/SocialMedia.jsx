import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <FaFacebook/>
        </div>
        <div>
            <BsTwitter/>
        </div>
    </div>
  )
}

export default SocialMedia