import GitHubIcon from 'assets/icons/GitHub'
import BorodutchLogo from 'assets/img/BorodutchLogo.png'
import BigWhaleLabsLogo from 'assets/img/bwlLogo.png'
import dosuImages, { dosuInvites } from 'assets/img/dosu'
import FluenceLogo from 'assets/img/fluence/FluenceLogo.png'
import NegedLogo from 'assets/img/neged/NegedLogo.png'
import ScalrLogo from 'assets/img/scalr/ScalrLogo.jpg'
import sealcredImages, { credCover } from 'assets/img/sealcred'
import { JSX } from 'react/jsx-runtime'

export const links = {
  github: 'https://github.com/T-Damer',
  linkedIn: 'https://www.linkedin.com/in/t-damer',
  cv: 'https://github.com/user-attachments/files/20024025/Daniil.Pankov.CV.pdf',
}

export type Media = { url: string; title?: string; description?: string }
export type Logo = { component: JSX.Element; altText: 'GitHub Logo' }

export interface Work {
  title: string
  description: string
  hoverImage: string
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

const companies = {
  borodutch: {
    logo: <img src={BorodutchLogo} className="w-6 h-6" />,
    title: 'Borodutch',
    link: 'https://borodutch.com',
  },
  bigWhaleLabs: {
    logo: <img src={BigWhaleLabsLogo} className="w-6 h-6" />,
    title: 'Big Whale Labs',
    link: 'https://bwl.gg',
  },
  neged: {
    logo: <img src={NegedLogo} className="w-6 h-6" />,
    title: 'negeD',
    link: 'https://warpcast.com/neged',
  },
  scalr: {
    logo: <img src={ScalrLogo} className="w-6 h-6" />,
    title: 'Scalr',
    link: 'https://x.com/scalr_dex',
  },
  fluenceLabs: {
    logo: <img src={FluenceLogo} className="w-6 h-6" />,
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
    description: `dosu.io - a web3 social app with NFT invite system based on Merkle Trees. 
You can see where users read in real-time

I was a solo developer, CTO reviewed my code from time to time.
I build `,
    hoverImage: dosuInvites,
    media: dosuImages,
    iFrameLink: 'https://dosu.io',
    links: [
      {
        href: 'https://github.com/BigWhaleLabs/dosu-invites-frontend',
        altText: 'Dosu Invites Frontend',
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
    description: `
    I worked on sealcred.xyz, echo.sealcred.xyz, sealcaster.xyz - web3 apps to verify your identity through ZK proofs
    I created pixel-perfect frontends for all projects, I managed user states and flows. I led development of adaptive and responsive UI
    On the backend I integrated wallet transaction through admin wallet to interact with our contracts and update Merkle proof data,
    I led and implemented custom position-based animations for the landing page
    I worked on ketl.xyz — fully decentralized Twitter for founders. I used React-Native-Web with Expo. I made continuous integration by codepush updates and took responsibility for the app data in the App Store and Play Market. The frontend had a custom design, so I wrote everything by myself with fluent animations. I made infinite post feed and reddit-like comments section. I used AI services to generate pictures for users to keep them private. I also engineered random names generator with large dictionary. I implemented custom registration flow that involves YCombinator and Twitter API combined with ZK that runs directly on mobile phone
    
    I worked on sealcred.xyz, echo.sealcred.xyz, sealcaster.xyz - web3 apps to verify your identity through ZK proofs
    I created pixel-perfect frontends for all projects, I managed user states and flows. I led development of adaptive and responsive UI
    On the backend I integrated wallet transaction through admin wallet to interact with our contracts and update Merkle proof data,
    I led and implemented custom position-based animations for the landing page
    I worked on ketl.xyz — fully decentralized Twitter for founders. I used React-Native-Web with Expo. I made continuous integration by codepush updates and took responsibility for the app data in the App Store and Play Market. The frontend had a custom design, so I wrote everything by myself with fluent animations. I made infinite post feed and reddit-like comments section. I used AI services to generate pictures for users to keep them private. I also engineered random names generator with large dictionary. I implemented custom registration flow that involves YCombinator and Twitter API combined with ZK that runs directly on mobile phone
    `,
    hoverImage: credCover,
    media: sealcredImages,
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
    hoverImage: credCover,
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
    hoverImage: credCover,
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
