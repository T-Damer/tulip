import dosu from './dosu.webp'
import dosu2 from './dosu-2.webp'
import dosuInvites from './dosu-invites.webp'

export { dosuInvites }

export default [
  {
    src: dosu,
    title: 'Dosu Post Page',
    description:
      'Shows who and where reads the post in real-time via WebSockets',
  },
  {
    src: dosu2,
    title: 'Dosu Feed',
    description:
      'Infinite feed of posts with images, GIFs or videos. Post editing is done using customized markdown (LaTex editor is here as well)',
  },
  {
    src: dosuInvites,
    title: 'Dosu Invites',
    description:
      'A limited set of AI images stored in the IPFS, serving as invitation NFTs to the application',
  },
]
