import GitHubIcon from 'assets/icons/GitHub'
import BorodutchLogo from 'assets/img/BorodutchLogo.png'
import { JSX } from 'react/jsx-runtime'

export const links = {
  github: 'https://github.com/T-Damer',
  linkedIn: 'https://www.linkedin.com/in/t-damer',
  cv: 'https://github.com/user-attachments/files/20024025/Daniil.Pankov.CV.pdf',
}

export type Media = { url: string; title: string; description: string }
export type Logo = { component: JSX.Element; altText: 'GitHub Logo' }

export interface Work {
  title: string
  description: string
  media: Media[]
  iFrameLink: string
  links: WorkLink[]
  dateFrom: Date
  dateTo?: Date
  company?: Company
  tags: string[]
}

type WorkLink = {
  href: string
  altText: string
  logo: Logo
}

type Company = {
  logo: JSX.Element
  title: string
  link: string
}

console.log(BorodutchLogo)

const companies = {
  borodutch: {
    logo: <img src={BorodutchLogo} />,
    title: 'Borodutch',
    link: 'https://borodutch.com',
  },
  bigWhaleLabs: { logo: '', title: 'Big Whale Labs', link: 'https://bwl.gg' },
  neged: { logo: '', title: 'negeD', link: 'https://warpcast.com/neged' },
  scalr: { logo: '', title: 'Scalr', link: 'https://x.com/scalr_dex' },
  fluenceLabs: {
    logo: '',
    title: 'Fluence',
    link: 'https://console.fluence.network',
  },
} as const

const logos = {
  github: { component: <GitHubIcon />, altText: 'GitHub Logo' },
} as const

export const myWorks: Work[] = [
  {
    title: 'Dosu',
    description: 'Something about dosu',
    media: [],
    iFrameLink: 'https://dosu.io',
    links: [
      {
        href: 'https://github.com/BigWhaleLabs/dosu-invites-frontend',
        altText: 'Invites Frontend',
        logo: logos.github,
      },
    ],
    dateFrom: new Date('01-06-2021'),
    dateTo: new Date('31-08-2021'),
    company: companies.borodutch,
    tags: ['full-stack', 'web3', 'MERN'],
  },
  {
    title: 'sealcred.xyz',
    description: 'Something about SC',
    media: [],
    iFrameLink: 'https://sealcred.xyz',
    links: [
      {
        href: 'https://github.com/BigWhaleLabs/seal-cred-frontend',
        altText: 'Frontend Code',
        logo: logos.github,
      },
      {
        href: 'https://github.com/BigWhaleLabs/seal-cred-email',
        altText: 'Email Frontend Code',
        logo: logos.github,
      },
    ],
    dateFrom: new Date('01-02-2021'),
    dateTo: new Date('31-07-2022'),
    company: companies.bigWhaleLabs,
    tags: ['full-stack', 'web3', 'MERN', 'ethers', 'solidity'],
  },
  {
    title: 'sealcaster.xyz',
    description: 'Something about SC',
    media: [],
    iFrameLink: 'https://sealcaster.xyz',
    links: [
      {
        href: 'https://github.com/BigWhaleLabs/seal-cred-frontend',
        altText: 'Frontend',
        logo: logos.github,
      },
    ],
    dateFrom: new Date('01-02-2022'),
    dateTo: new Date('31-07-2022'),
    company: companies.bigWhaleLabs,
    tags: ['full-stack', 'web3', 'MERN', 'ethers', 'solidity'],
  },
  {
    title: 'sealcred.xyz',
    description: 'Something about SC',
    media: [],
    iFrameLink: 'https://sealcred.xyz',
    links: [
      {
        href: 'https://github.com/BigWhaleLabs/seal-cred-frontend',
        altText: 'SealCred Frontend GitHub',
        logo: logos.github,
      },
    ],
    dateFrom: new Date('01-09-2021'),
    dateTo: new Date('31-12-2021'),
    company: companies.bigWhaleLabs,
    tags: ['full-stack', 'web3', 'MERN', 'ethers', 'solidity'],
  },
]
