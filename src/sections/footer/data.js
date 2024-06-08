import { FaLinkedin } from 'react-icons/fa'
import { FaKaggle } from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    { id: 1, link: 'https://linkedin.com/in/adil-bhartiya-00a685232', icon: <FaLinkedin /> },
    { id: 2, link: 'https://www.kaggle.com/adilbhartiya', icon: <FaKaggle /> },
    { id: 3, link: 'https://github.com/adilbhartiya', icon: <AiFillGithub /> },
    { id: 4, link: 'https://x.com/adilbhartiya94', icon: <AiOutlineTwitter /> }
]