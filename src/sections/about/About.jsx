// import AboutImage from '../../assets/about.jpg'
// import CV from '../../assets/cv.pdf'
// import {HiDownload} from 'react-icons/hi'
// import data from './data'
// import Card from '../../components/Card'
// import './about.css'

// const About = () => {
//   return (
//     <section id="about" data-aos="fade-in">
//         <div className="container about__container">
//             <div className="about__left">
//                 <div className="about__portrait">
//                     <img src={AboutImage} alt="About Image" />
//                 </div>
//             </div>
//             <div className="about__right">
//                 <h2>About Me</h2>
//                 <div className="about__cards">
//                     {
//                         data.map(item => (
//                             <Card key={item.id} className="about__card">
//                                 <span className='about__card-icon'>{item.icon}</span>
//                                 <h5>{item.title}</h5>
//                                 <small>{item.desc}</small>
//                             </Card>
//                         ))
//                     }
//                 </div>
//                 {
//                 /* <p>
//                 Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
//                 </p> */
//                 }
//                 <p>
//                 Welcome to my professional space! I am a Computer Science graduate with a strong passion for data science and machine learning. My technical expertise includes Python, SQL, and Power BI, complemented by certifications in Mathematics for Computer Science and Programming Fundamentals. With a dedication to continuous learning and a drive to excel in the field, I am eager to leverage my skills and contribute to impactful projects. Let's explore the possibilities together                </p>
//                 <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default About


// modified by me

import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map(item => {
              const cardContent = (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              );

              const anchorClass = item.id === 1 || item.id === 2 || item.id === 3 ? "about__card-link special-link" : "about__card-link";

              if (item.id === 1) {
                return (
                  <a key={item.id} href="#about" className={anchorClass}>
                    {cardContent}
                  </a>
                );
              }

              if (item.id === 2) {
                return (
                  <a key={item.id} href="#portfolio" className={anchorClass}>
                    {cardContent}
                  </a>
                );
              }

              if (item.id === 3) {
                return (
                  <a key={item.id} href="#certificate" className={anchorClass}>
                    {cardContent}
                  </a>
                );
              }

              return cardContent;
            })}
          </div>
          <p>
          Welcome to my professional space! I am a Computer Science graduate with a strong passion for data science and machine learning. My technical expertise includes Python, SQL, and Power BI, complemented by certifications in Mathematics for Computer Science and Programming Fundamentals. Recently, I completed the "Machine Learning with Python: From Linear Models to Deep Learning" course from the Massachusetts Institute of Technology through EdX, further enhancing my skills in advanced machine learning techniques. With a dedication to continuous learning and a drive to excel in the field, I am eager to leverage my skills and contribute to impactful projects. Let's explore the possibilities together.
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  );
};

export default About;

