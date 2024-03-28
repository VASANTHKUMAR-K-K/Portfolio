import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
  <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contacts</h2>
        <p>Feel Free to Reach Out!</p>
        <h3>while(!(succeed=try() ));</h3>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon' />
            <a href="mailto:kkvasanthkumar123@gmail.com">kkvasanthkumar123@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon' />
            <a href="https://www.linkedin.com/in/kkvasanthkumar0801/">LinkedIn.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon' />
            <a href="https://github.com/VASANTHKUMAR-K-K">GitHub.com</a>
        </li>
        <li className={styles.link}>
            <h2>Contact No: +91 99522 42258</h2>
        </li>
    </ul>
  </footer>
  )
}
