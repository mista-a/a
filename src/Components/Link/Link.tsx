import { LinkProps as NextLinkProps } from 'next/link'
import React, { FC, ReactNode } from 'react'

interface CustomLinkProps extends NextLinkProps {
  children: ReactNode
}

const Link: FC<CustomLinkProps> = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>
}

export default Link
