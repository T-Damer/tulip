import ketl1 from './ketl-1.webp'
import ketl2 from './ketl-2.webp'
import ketl3 from './ketl-3.webp'
import ketl4 from './ketl-4.webp'
import ketlCover from './ketl-cover.webp'
import ketlDemo from './ketl-demo.webm'

export const ketlImages = [
  { src: ketl1, title: 'Ketl 1' },
  { src: ketl2, title: 'Ketl 2' },
  { src: ketl3, title: 'Ketl 3' },
  { src: ketl4, title: 'Ketl 4' },
  {
    src: ketlDemo,
    title: 'Ketl Android Demo',
    type: 'video',
    disablePictureInPicture: true,
    preload: 'metadata',
    sources: [
      {
        src: ketlDemo,
        type: 'video/webm',
      },
    ],
  },
]
export { ketlCover }
