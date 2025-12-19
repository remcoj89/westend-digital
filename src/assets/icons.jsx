export function ArrowIconDown() {
  return (
    <svg
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.364 4.95L11.314 0L12.728 1.415L6.364 7.779L0 1.415L1.414 0.0010004L6.364 4.95Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BurgerMenu({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6H21M3 12H21M3 18H21"
        stroke={`${color}`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.05011 3.05011C3.23764 2.86264 3.49195 2.75732 3.75711 2.75732C4.02227 2.75732 4.27658 2.86264 4.46411 3.05011L8.00011 6.58611L11.5361 3.05011C11.7247 2.86795 11.9773 2.76716 12.2395 2.76944C12.5017 2.77172 12.7525 2.87688 12.9379 3.06229C13.1233 3.2477 13.2285 3.49851 13.2308 3.76071C13.2331 4.02291 13.1323 4.27551 12.9501 4.46411L9.41411 8.00011L12.9501 11.5361C13.1323 11.7247 13.2331 11.9773 13.2308 12.2395C13.2285 12.5017 13.1233 12.7525 12.9379 12.9379C12.7525 13.1233 12.5017 13.2285 12.2395 13.2308C11.9773 13.2331 11.7247 13.1323 11.5361 12.9501L8.00011 9.41411L4.46411 12.9501C4.27551 13.1323 4.02291 13.2331 3.76071 13.2308C3.49851 13.2285 3.2477 13.1233 3.06229 12.9379C2.87688 12.7525 2.77172 12.5017 2.76944 12.2395C2.76716 11.9773 2.86795 11.7247 3.05011 11.5361L6.58611 8.00011L3.05011 4.46411C2.86264 4.27658 2.75732 4.02227 2.75732 3.75711C2.75732 3.49195 2.86264 3.23764 3.05011 3.05011Z"
        fill={`${color}`}
      />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z"
        fill="#D3A155"
      />
      <path d="M10.5 7H13.5V17H10.5V7Z" fill="white" />
      <path d="M7 10.5H17V13.5H7V10.5Z" fill="white" />
    </svg>
  );
}

export function ArrowButtonLeft({ iconFill }) {
  const color = iconFill || "white";
  return (
    <svg
      width="39"
      height="46"
      viewBox="0 0 39 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.5 42.5982L3 22.6796L37.5 2.76098L37.5 42.5982Z"
        stroke={color}
        strokeWidth="3"
        id="icon-arrow-left"
      />
    </svg>
  );
}

export function ArrowButtonRight({ iconFill }) {
  const color = iconFill || "white";
  return (
    <svg
      width="41"
      height="46"
      viewBox="0 0 41 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.58395 2.83159L37.061 22.9426L2.40579 42.7451L2.58395 2.83159Z"
        stroke={color}
        strokeWidth="3"
        id="icon-arrow-right"
      />
    </svg>
  );
}

export function AccordionIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-300)";

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_262_351)">
        <path
          d="M0 8.9873C0 8.43502 0.447715 7.9873 1 7.9873H15C15.5523 7.9873 16 8.43502 16 8.9873C16 9.53959 15.5523 9.9873 15 9.9873H1C0.447715 9.9873 0 9.53959 0 8.9873Z"
          fill={color}
          fillOpacity="1"
        />
        <path
          d="M7 1.9873C7 1.43502 7.44772 0.987305 8 0.987305C8.55228 0.987305 9 1.43502 9 1.9873V15.9873C9 16.5396 8.55228 16.9873 8 16.9873C7.44772 16.9873 7 16.5396 7 15.9873V1.9873Z"
          fill={color}
          fillOpacity="1"
        />
      </g>
      <defs>
        <clipPath id="clip0_262_351">
          <rect
            width="20"
            height="20"
            fill={color}
            transform="translate(0 0.987305)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function PhoneIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0403 10.999H22.0403C22.0403 5.869 18.1673 2 13.0303 2V4C17.0923 4 20.0403 6.943 20.0403 10.999Z"
        fill={color}
      />
      <path
        d="M13.0398 7.99999C15.1428 7.99999 16.0398 8.89699 16.0398 11H18.0398C18.0398 7.77499 16.2648 5.99999 13.0398 5.99999V7.99999ZM16.4618 13.443C16.2697 13.2683 16.0172 13.1752 15.7576 13.1832C15.4981 13.1912 15.2518 13.2998 15.0708 13.486L12.6778 15.947C12.1018 15.837 10.9438 15.476 9.75183 14.287C8.55983 13.094 8.19883 11.933 8.09183 11.361L10.5508 8.96699C10.7372 8.78612 10.846 8.53982 10.854 8.2802C10.862 8.02059 10.7687 7.76804 10.5938 7.57599L6.89883 3.51299C6.72388 3.32035 6.48071 3.2035 6.22099 3.18725C5.96126 3.17101 5.70543 3.25665 5.50783 3.42599L3.33783 5.28699C3.16494 5.46051 3.06175 5.69145 3.04783 5.93599C3.03283 6.18599 2.74683 12.108 7.33883 16.702C11.3448 20.707 16.3628 21 17.7448 21C17.9468 21 18.0708 20.994 18.1038 20.992C18.3483 20.9783 18.5792 20.8747 18.7518 20.701L20.6118 18.53C20.7813 18.3325 20.8671 18.0768 20.8511 17.817C20.835 17.5573 20.7183 17.3141 20.5258 17.139L16.4618 13.443Z"
        fill={color}
      />
    </svg>
  );
}
export function EmailIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.04 4H2.04004V20H22.04V4ZM20.04 8L12.04 13L4.04004 8V6L12.04 11L20.04 6V8Z"
        fill={color}
      />
    </svg>
  );
}
export function LocationIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.04 1.5C9.8528 1.50258 7.75588 2.3726 6.20927 3.91922C4.66265 5.46584 3.79263 7.56276 3.79005 9.75C3.78743 11.5374 4.37128 13.2763 5.45205 14.7C5.45205 14.7 5.67705 14.9963 5.7138 15.039L12.04 22.5L18.3693 15.0353C18.4023 14.9955 18.628 14.7 18.628 14.7L18.6288 14.6978C19.709 13.2747 20.2926 11.5366 20.29 9.75C20.2875 7.56276 19.4174 5.46584 17.8708 3.91922C16.3242 2.3726 14.2273 1.50258 12.04 1.5ZM12.04 12.75C11.4467 12.75 10.8667 12.5741 10.3733 12.2444C9.87999 11.9148 9.49547 11.4462 9.26841 10.8981C9.04135 10.3499 8.98194 9.74667 9.09769 9.16473C9.21345 8.58279 9.49917 8.04824 9.91873 7.62868C10.3383 7.20912 10.8728 6.9234 11.4548 6.80764C12.0367 6.69189 12.6399 6.7513 13.1881 6.97836C13.7363 7.20542 14.2048 7.58994 14.5345 8.08329C14.8641 8.57664 15.04 9.15666 15.04 9.75C15.0391 10.5453 14.7227 11.3078 14.1603 11.8702C13.5979 12.4326 12.8354 12.749 12.04 12.75Z"
        fill={color}
      />
    </svg>
  );
}

export function DotIcon() {
  const color = "var(--clr-primary-100)";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5C10.8065 7.5 9.66193 7.97411 8.81802 8.81802C7.97411 9.66193 7.5 10.8065 7.5 12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export function BookOpen({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 9.8V20m0-10.2c0-1.704.107-3.584-1.638-4.473C9.72 5 8.88 5 7.2 5H4.6C3.364 5 3 5.437 3 6.6v8.8c0 .568-.036 1.195.546 1.491c.214.109.493.109 1.052.109H7.43c2.377 0 3.26 1.036 4.569 3m0-10.2c0-1.704-.108-3.584 1.638-4.473C14.279 5 15.12 5 16.8 5h2.6c1.235 0 1.6.436 1.6 1.6v8.8c0 .567.035 1.195-.546 1.491c-.213.109-.493.109-1.052.109h-2.833c-2.377 0-3.26 1.036-4.57 3"
      />
    </svg>
  );
}

export function SendIcon({ iconFill }) {
  const color = iconFill || "var(--clr-primary-100)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"
      />
    </svg>
  );
}

export function FlashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--clr-secondary-900)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-zap text-[#DBB171] w-8 h-8 flex-shrink-0 mt-1"
      ariaHidden="true"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
    </svg>
  );
}

export function ConversionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-target text-[#DBB171] w-8 h-8 flex-shrink-0 mt-1"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
}

export function MobileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-smartphone text-[#DBB171] w-8 h-8 flex-shrink-0 mt-1"
      ariaHidden="true"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  );
}

export function SecureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shield text-[#DBB171] w-8 h-8 flex-shrink-0 mt-1"
      ariaHidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-clock text-[#DBB171] w-8 h-8 flex-shrink-0 mt-1"
      ariaHidden="true"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export function CircleCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-check-big w-8 h-8 mr-3"
      ariaHidden="true"
    >
      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
      <path d="m9 11 3 3L22 4"></path>
    </svg>
  );
}

export function CircleXIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-x w-8 h-8 mr-3"
      ariaHidden="true"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m15 9-6 6"></path>
      <path d="m9 9 6 6"></path>
    </svg>
  );
}

export function CircleCheckIconGold() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
        fill="#DBB171"
      />
    </svg>
  );
}

export function RedXIcon() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 24H0V0H16V24Z" stroke="#E5E7EB" />
      <g clipPath="url(#clip0_528_2259)">
        <path
          d="M8 19C10.1217 19 12.1566 18.1571 13.6569 16.6569C15.1571 15.1566 16 13.1217 16 11C16 8.87827 15.1571 6.84344 13.6569 5.34315C12.1566 3.84285 10.1217 3 8 3C5.87827 3 3.84344 3.84285 2.34315 5.34315C0.842855 6.84344 0 8.87827 0 11C0 13.1217 0.842855 15.1566 2.34315 16.6569C3.84344 18.1571 5.87827 19 8 19ZM5.46875 8.46875C5.7625 8.175 6.2375 8.175 6.52812 8.46875L7.99687 9.9375L9.46562 8.46875C9.75937 8.175 10.2344 8.175 10.525 8.46875C10.8156 8.7625 10.8187 9.2375 10.525 9.52812L9.05625 10.9969L10.525 12.4656C10.8187 12.7594 10.8187 13.2344 10.525 13.525C10.2312 13.8156 9.75625 13.8187 9.46562 13.525L7.99687 12.0562L6.52812 13.525C6.23438 13.8187 5.75938 13.8187 5.46875 13.525C5.17812 13.2312 5.175 12.7562 5.46875 12.4656L6.9375 10.9969L5.46875 9.52812C5.175 9.23438 5.175 8.75938 5.46875 8.46875Z"
          fill="#EF4444"
        />
      </g>
      <defs>
        <clipPath id="clip0_528_2259">
          <path d="M0 3H16V19H0V3Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SheeldIcon() {
  return (
    <svg
      width="48"
      height="76"
      viewBox="0 0 48 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M48 76H0V0H48V76Z" stroke="#E5E7EB" />
      <path d="M48 61H0V13H48V61Z" stroke="#E5E7EB" />
      <path
        d="M24 13C24.4313 13 24.8625 13.0938 25.2563 13.2719L42.9094 20.7625C44.9719 21.6344 46.5094 23.6688 46.5 26.125C46.4532 35.425 42.6282 52.4406 26.475 60.175C24.9094 60.925 23.0907 60.925 21.525 60.175C5.37192 52.4406 1.54692 35.425 1.50004 26.125C1.49067 23.6688 3.02817 21.6344 5.09067 20.7625L22.7532 13.2719C23.1375 13.0938 23.5688 13 24 13ZM24 19.2625V54.7C36.9375 48.4375 40.4157 34.5719 40.5 26.2563L24 19.2625Z"
        fill="#DBB171"
      />
    </svg>
  );
}
