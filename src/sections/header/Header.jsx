import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          {/* SVG Blob Shape */}
          {/* <svg className="home__blob" viewBox="0 0 200 187"> */}
          <svg className="home__blob" viewBox="0 5 400 400" width="200%" height="200%">
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>
            </mask>
            <g mask="url(#mask0)">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"></path>

              {/* Display Header Image inside Blob */}
              <image className="home__blob-img" x="0" y="0" width="50%" height="50%" xlinkHref={HeaderImage} />
            </g>
          </svg>
        </div>

        {/* Intro and CTA */}
        <h3 data-aos="fade-up">Hi, I'm Adil</h3>
        <p data-aos="fade-up">
          A Data Science and Machine Learning enthusiast with expertise in Python, SQL, and Power BI. Passionate about driving innovative solutions through data with a solid foundation in Machine Learning.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>

        {/* Social Links */}
        <div className="header__socials">
          {data.map(item => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header








