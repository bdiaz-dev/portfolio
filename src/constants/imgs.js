import foto from '../assets/img/bruno_photo.jpg'

import onaGames from '../assets/img/projects/onagames_capture.jpg'
import blockSurvivor from '../assets/img/projects/blocksurvivor_capture.jpg'
import listaLectura from '../assets/img/projects/listalectura_capture.jpg'
import reactShop from '../assets/img/projects/reactshop_capture.jpg'
import weatherNow from '../assets/img/projects/weathernow_capture.jpg'
import amigosPalabras from '../assets/img/projects/amigospalabras_capture.jpg'

import javaScript from '../assets/svg/javascript.svg'
import godot from '../assets/svg/godot.svg'
import git from '../assets/svg/git.svg'
import vite from '../assets/svg/vite.svg'
import reactRouter from '../assets/svg/react-router.svg'
import react from '../assets/svg/react.svg'
import html from '../assets/svg/html.svg'
import css from '../assets/svg/css.svg'
import zustand from '../assets/svg/zustand.svg'

import mail from '../assets/svg/mail.svg'
import linkedin from '../assets/svg/linkedin.svg'
import gitHub from '../assets/svg/github.svg'
import cvIco from '../assets/svg/cv.svg'

import go from '../assets/svg/link.svg'
import close from '../assets/svg/close.svg'

import projects from '../assets/svg/projects.svg'
import skills from '../assets/svg/skills.svg'
import info from '../assets/svg/info.svg'

const captures = {
  onaGames,
  blockSurvivor,
  listaLectura,
  reactShop,
  weatherNow,
  amigosPalabras
}

const contact = {
  mail,
  linkedin,
  gitHub,
  cvIco
}

const modalIcos = {
  go,
  gitHub,
  close
}

const menu = {
  info,
  projects,
  skills
}

const technologies = {
  javaScript: {
    img: javaScript,
    title: 'JavaScript'
  },
  html: {
    img: html,
    title: 'Html'
  },
  css: {
    img: css,
    title: 'CSS'
  },
  react: {
    img: react,
    title: 'React'
  },
  reactRouter: {
    img: reactRouter,
    title: 'React Router'
  },
  vite: {
    img: vite,
    title: 'Vite'
  },
  git: {
    img: git,
    title: 'Git'
  },
  zustand: {
    img: zustand,
    title: 'Zustand'
  },
  godot: {
    img: godot,
    title: 'Godot'
  }
}

export {
  foto,
  captures,
  technologies,
  contact,
  menu,
  modalIcos
}
