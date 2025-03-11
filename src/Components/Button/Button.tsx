import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  active?: boolean
  activeClass?: string
}

const Button: React.FC<ButtonProps> = (
  { children, className, active, activeClass },
  ...props
) => {
  return (
    <button
      {...props}
      className={`bg-black p-2 cursor-pointer text-white rounded-2xl flex items-center justify-center active:scale-95 ${className} ${
        active ? activeClass : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
