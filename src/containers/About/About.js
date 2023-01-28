import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion'
import './About.scss';
import {default as AppWrap} from '../../wrapper/AppWrap'
import {default as MotionWrap} from '../../wrapper/MotionWrap';
import { urlFor, client} from '../../client'


const About = () => {
 const [abouts, setAbouts] = useState([])
 useEffect(() =>{
  const query = '*[_type == "abouts"]'

  client.fetch(query)
  .then((data) => setAbouts(data))


 } ,[])
  return (
    <>
    <h2 className="head-text">I Know that
    <span>Good Developer</span> <br />
    means
    <span>Good Business</span>
    </h2>
    <div className="app__profile">
     
        {abouts.map((about, index) => {
         
          return(
             
            <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className='app__profile-item' 
            key={about.title + index}
            >
            <img src={urlFor(about.imgUrl)} alt={about.About} />
            <h2 className='bold-text' style={{maginTop: 20}}>{about.title}</h2>
            <h2 className='p-text' style={{maginTop: 10}}>{about.description}</h2>
            </motion.div>
          )
        })}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);