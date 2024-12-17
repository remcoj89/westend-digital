export function BurgerMenu({iconFill}) {
  const color = iconFill || "var(--clr-primary-100)"

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21M3 12H21M3 18H21" stroke={`${color}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function CloseIcon({iconFill}) {
  const color = iconFill || "var(--clr-primary-100)"

  return (
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.05011 3.05011C3.23764 2.86264 3.49195 2.75732 3.75711 2.75732C4.02227 2.75732 4.27658 2.86264 4.46411 3.05011L8.00011 6.58611L11.5361 3.05011C11.7247 2.86795 11.9773 2.76716 12.2395 2.76944C12.5017 2.77172 12.7525 2.87688 12.9379 3.06229C13.1233 3.2477 13.2285 3.49851 13.2308 3.76071C13.2331 4.02291 13.1323 4.27551 12.9501 4.46411L9.41411 8.00011L12.9501 11.5361C13.1323 11.7247 13.2331 11.9773 13.2308 12.2395C13.2285 12.5017 13.1233 12.7525 12.9379 12.9379C12.7525 13.1233 12.5017 13.2285 12.2395 13.2308C11.9773 13.2331 11.7247 13.1323 11.5361 12.9501L8.00011 9.41411L4.46411 12.9501C4.27551 13.1323 4.02291 13.2331 3.76071 13.2308C3.49851 13.2285 3.2477 13.1233 3.06229 12.9379C2.87688 12.7525 2.77172 12.5017 2.76944 12.2395C2.76716 11.9773 2.86795 11.7247 3.05011 11.5361L6.58611 8.00011L3.05011 4.46411C2.86264 4.27658 2.75732 4.02227 2.75732 3.75711C2.75732 3.49195 2.86264 3.23764 3.05011 3.05011Z" fill={`${color}`}/>
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
    <svg width="39" height="46" viewBox="0 0 39 46" fill="none" xmlns="http://www.w3.org/2000/svg" >
       <path d="M37.5 42.5982L3 22.6796L37.5 2.76098L37.5 42.5982Z" stroke={color} strokeWidth="3" id="icon-arrow-left"/>
    </svg>
  )
}

export function ArrowButtonRight({iconFill}) {
  const color = iconFill || "white"
  return (
    <svg width="41" height="46" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M2.58395 2.83159L37.061 22.9426L2.40579 42.7451L2.58395 2.83159Z" stroke={color} strokeWidth="3" id="icon-arrow-right"/>
    </svg>

  )
}

export function AccordionIcon({iconFill}) {
  const color =  iconFill || "var(--clr-primary-300)"

  return (
    <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_262_351)">
        <path d="M0 8.9873C0 8.43502 0.447715 7.9873 1 7.9873H15C15.5523 7.9873 16 8.43502 16 8.9873C16 9.53959 15.5523 9.9873 15 9.9873H1C0.447715 9.9873 0 9.53959 0 8.9873Z" fill={color} fillOpacity="1"/>
        <path d="M7 1.9873C7 1.43502 7.44772 0.987305 8 0.987305C8.55228 0.987305 9 1.43502 9 1.9873V15.9873C9 16.5396 8.55228 16.9873 8 16.9873C7.44772 16.9873 7 16.5396 7 15.9873V1.9873Z" fill={color} fillOpacity="1"/>
      </g>
      <defs>
        <clipPath id="clip0_262_351">
          <rect width="20" height="20" fill={color} transform="translate(0 0.987305)"/>
        </clipPath>
      </defs>
    </svg>

  )
}
