import { content } from '../constants/content'

export const getProjectText = ({ lang, job }) => {
  if (job === null) return []
  const text = content[lang].projects.jobs[job]
  return text
}

export const getProjectLinks = ({ lang, job }) => {
  let links = {
    repoText: '',
    repoLink: '',
    goText: '',
    goLink: ''
  }
  if (job === null) return links
  links = {
    repoText: content[lang].menu.repo,
    repoLink: content[lang].projects.jobs[job].urls.github,
    goText: content[lang].menu.go,
    goLink: content[lang].projects.jobs[job].urls.site
  }
  return links
}

export const getProjectTitle = ({ lang, job }) => {
  if (job === null) return ''
}
