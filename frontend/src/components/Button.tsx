import React from 'react'

type Props = {
  label: string
  className: string
  onClick?: () => void
  icon?: any
}

function Button(props: Props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.label}
      {props.icon}
    </button>
  )
}

export default Button
