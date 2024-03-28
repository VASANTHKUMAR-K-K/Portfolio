import React from 'react'
import {getImageUrl} from '../../utils/'
import styles from './Hero.module.css'
import Resume from '../../../assets/Resume/vasanthkumarkkresumee.pdf'

export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Vasanthkumar</h2>
        <p className={styles.description}>I'm a passionate Web Developer. I am Graduated with a degree in MCA in Computer Applications and have been honing my skills in web development ever since. Reach out if you'd like to more learn!
        </p>
        <a href={Resume} download className={styles.contactBtn}>Download CV</a>
    </div>
    <img src={getImageUrl('hero/vasanth passport photo.jpeg')} alt='Hero image of me' className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   </section>
  )
}
