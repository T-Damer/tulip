import { motion } from 'framer-motion'
import { cn } from 'helpers/cn'
import { PropsWithChildren } from 'react'
import { ClassNameProp } from 'types/Props'

export default function TransitionWrapper({
  children,
  className,
}: PropsWithChildren & ClassNameProp) {
  return (
    <motion.div
      className={cn('h-full w-full', className)}
      initial={{ height: '25%' }}
      animate={{ height: '100%' }}
    >
      {children}
    </motion.div>
  )
}
