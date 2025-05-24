import GitHubIcon from 'assets/icons/GitHub'
import BorodutchLogo from 'assets/img/BorodutchLogo.png'
import BigWhaleLabsLogo from 'assets/img/bwlLogo.png'
import dosuImages, { dosuInvites } from 'assets/img/dosu'
import FluenceLogo from 'assets/img/fluence/FluenceLogo.png'
import { ketlCover, ketlImages } from 'assets/img/ketl'
import NegedLogo from 'assets/img/neged/NegedLogo.png'
import ScalrLogo from 'assets/img/scalr/ScalrLogo.jpg'
import sealcredImages, { credCover } from 'assets/img/sealcred'
import { JSX } from 'react/jsx-runtime'

export const links = {
  github: 'https://github.com/T-Damer',
  linkedIn: 'https://www.linkedin.com/in/t-damer',
  cv: 'Daniil-Pankov_CV.pdf',
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
    logo: <img src={BorodutchLogo} className="h-4 w-4 drop-shadow-sm" />,
    title: 'Borodutch',
    link: 'https://borodutch.com',
  },
  bigWhaleLabs: {
    logo: <img src={BigWhaleLabsLogo} className="h-4 w-4" />,
    title: 'Big Whale Labs',
    link: 'https://bwl.gg',
  },
  neged: {
    logo: <img src={NegedLogo} className="h-4 w-4" />,
    title: 'negeD',
    link: 'https://warpcast.com/neged',
  },
  scalr: {
    logo: <img src={ScalrLogo} className="h-4 w-4" />,
    title: 'Scalr',
    link: 'https://x.com/scalr_dex',
  },
  fluenceLabs: {
    logo: <img src={FluenceLogo} className="h-4 w-4" />,
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
    description: `A web3 social app with NFT invite system based on Merkle Trees. 
You can see where users read in real-time

I was a solo developer, CTO reviewed my code from time to time
I built both backend and frontend parts using MERN stack

Later we built invites system for future projects on top of that - dosu-invites
We generated a set of 512 AI images (imagine doing this in 2021)
Each image was stored in IPFS system, I hosted an IPFS node to do this
Because there were no IPFS providers or they were unreliable

Invites were stored in Merkle Tree - you could claim it and get an NFT from a set of 512 images
Each image was bound to ETH address. More images were claimed - more frames of the videos were shown
You could open invites.dosu.io/112 to see the frame and the owner`,
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
    title: 'ketl',
    description: `I worked on ketl.xyz — fully decentralized Twitter for founders. 
I used React-Native-Web with Expo. 
I made continuous integration by codepush updates and took responsibility for the app data in the App Store and Play Market. 
The frontend had a custom design, so I wrote everything by myself with fluent animations. 
I made infinite post feed and reddit-like comments section. I used AI services to generate pictures for users to keep them private. 
I also engineered random names generator with large dictionary. 
I implemented custom registration flow that involves YCombinator and Twitter API combined with ZK that runs directly on mobile phone`,

    hoverImage: ketlCover,
    media: ketlImages,
    iFrameLink: 'https://ketl.xyz',
    links: [],
    dateFrom: new Date('01-01-2023'),
    dateTo: new Date('01-01-2024'),
    company: companies.bigWhaleLabs,
    tags: [
      'full-stack',
      'web3',
      'react-native',
      'viem',
      'solidity',
      'ZK',
      'expo',
    ],
  },
]
