import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
const AppWrap = (Components, className, idName) => function HOC() {
  return (
    <div id={idName} className={`app__container ${className}`} >
        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Components/>
            <div className="copyright">
                <p className="p-text">@2023 ANUJ</p>
                <p className="p-text">All right reserved</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap