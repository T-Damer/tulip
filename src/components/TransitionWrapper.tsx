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
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
