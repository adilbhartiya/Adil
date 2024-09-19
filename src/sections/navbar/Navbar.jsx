// import Logo from '../../assets/logo.jpg'
// import data from './data'
// import {IoIosColorPalette} from 'react-icons/io'
// import { useModalContext } from '../../context/modal-context'
// import './navbar.css'

// const Navbar = () => {
//   const {showModalHandler} = useModalContext();

//   return (
//     <nav>
//       <div className="container nav__container">
//         <a href="index.html" className='nav__logo'>
//           <img src={Logo} alt="Logo" />
//         </a>
//         <ul className='nav__menu'>
//           {
//             data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
//           }
//         </ul>
//         <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette/></button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import data from './data';
import { IoIosColorPalette } from 'react-icons/io';
import { useModalContext } from '../../context/modal-context';
import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        {/* Inline SVG for Home Icon */}
        <a href="index.html" className='nav__logo'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 80 1024 1024" color="#fff" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)'}}>
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
          </svg>
        </a>

        {/* Navigation Menu */}
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>

        {/* Theme Icon Button */}
        <button id='theme__icon' onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

