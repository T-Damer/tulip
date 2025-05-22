import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export default function TransitionWrapper({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ height: '25%' }}
      animate={{ height: '100%' }}
    >
      {children}
    </motion.div>
  )
}
