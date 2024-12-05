export function BurgerMenu({iconFill}) {
  const color = iconFill || "black"

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21M3 12H21M3 18H21" stroke={`${color}`} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z" fill="#D3A155"/>
      <path d="M10.5 7H13.5V17H10.5V7Z" fill="white"/>
      <path d="M7 10.5H17V13.5H7V10.5Z" fill="white"/>
    </svg>
  )
}

export function ArrowButtonLeft({iconFill}) {
  const color = iconFill || "white"
  return (
    <svg width="39" height="46" viewBox="0 0 39 46" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M37.5 42.5982L3 22.6796L37.5 2.76098L37.5 42.5982Z" stroke={color} stroke-width="3"/>
    </svg>
  )
}

export function ArrowButtonRight({iconFill}) {
  const color = iconFill || "white"
  return (
    <svg width="41" height="46" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.58395 2.83159L37.061 22.9426L2.40579 42.7451L2.58395 2.83159Z" stroke={color} stroke-width="3"/>
    </svg>

  )
}

export function AccordionIcon({iconFill}) {
  const color = "var(--clr-primary-300)"

  return (
    <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_262_351)">
        <path d="M0 8.9873C0 8.43502 0.447715 7.9873 1 7.9873H15C15.5523 7.9873 16 8.43502 16 8.9873C16 9.53959 15.5523 9.9873 15 9.9873H1C0.447715 9.9873 0 9.53959 0 8.9873Z" fill={color} fill-opacity="1"/>
        <path d="M7 1.9873C7 1.43502 7.44772 0.987305 8 0.987305C8.55228 0.987305 9 1.43502 9 1.9873V15.9873C9 16.5396 8.55228 16.9873 8 16.9873C7.44772 16.9873 7 16.5396 7 15.9873V1.9873Z" fill={color} fill-opacity="1"/>
      </g>
      <defs>
        <clipPath id="clip0_262_351">
          <rect width="20" height="20" fill={color} transform="translate(0 0.987305)"/>
        </clipPath>
      </defs>
    </svg>

  )
}
