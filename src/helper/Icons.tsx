import * as React from "react";
// import Svg, { Circle, Rect } from "react-native-svg";
import Svg, { SvgProps, Path } from "react-native-svg";


export const HomeIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#292D32"
      d="M12.5 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
    />
    <Path
      fill="#292D32"
      d="M18.1 22.56H6.9c-1.82 0-3.48-1.4-3.78-3.19L1.79 11.4c-.22-1.24.39-2.83 1.38-3.62l6.93-5.55c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-2 3.2-3.78 3.2ZM12.49 2.93c-.53 0-1.06.16-1.45.47L4.11 8.96c-.56.45-.96 1.49-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.11-.7-.29-1.76-.84-2.2l-6.93-5.54c-.4-.32-.94-.48-1.47-.48Z"
    />
  </Svg>

);


export const HomeActiveIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#BAAFE9"
      d="m17.2 5.685-4.8-3.358c-1.308-.917-3.317-.867-4.575.108L3.65 5.693c-.833.65-1.492 1.984-1.492 3.034v5.75a3.859 3.859 0 0 0 3.85 3.858h8.984a3.852 3.852 0 0 0 3.85-3.85v-5.65c0-1.125-.725-2.508-1.642-3.15Zm-6.075 9.317a.63.63 0 0 1-.625.625.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5Z"
    />
  </Svg>
)

export const VehicleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#8B8B8B"
      d="M11.083 12.292H1.917a.63.63 0 0 1-.625-.625V5A3.962 3.962 0 0 1 5.25 1.042h7.5a.63.63 0 0 1 .625.625V10a2.29 2.29 0 0 1-2.292 2.292Zm-8.541-1.25h8.541c.575 0 1.042-.467 1.042-1.042V2.292H5.25A2.714 2.714 0 0 0 2.542 5v6.042Z"
    />
    <Path
      fill="#8B8B8B"
      d="M16.083 17.292h-.833a.63.63 0 0 1-.625-.625 1.041 1.041 0 1 0-2.083 0 .63.63 0 0 1-.625.625H8.583a.63.63 0 0 1-.625-.625 1.042 1.042 0 0 0-2.083 0 .63.63 0 0 1-.625.625h-.833a3.126 3.126 0 0 1-3.125-3.125v-2.5a.63.63 0 0 1 .625-.625h9.166c.575 0 1.042-.467 1.042-1.042V4.167a.63.63 0 0 1 .625-.625h1.533A2.29 2.29 0 0 1 16.275 4.7L17.7 7.192a.62.62 0 0 1-.542.933h-1.075a.206.206 0 0 0-.208.208v2.5c0 .117.092.209.208.209h2.5a.63.63 0 0 1 .625.625v2.5c0 1.725-1.4 3.125-3.125 3.125Zm-.291-1.25h.291a1.878 1.878 0 0 0 1.875-1.875v-1.875h-1.875c-.8 0-1.458-.659-1.458-1.459v-2.5c0-.8.65-1.458 1.458-1.458l-.891-1.558a1.043 1.043 0 0 0-.909-.525h-.908V10a2.29 2.29 0 0 1-2.292 2.292H2.542v1.875c0 1.033.841 1.875 1.875 1.875h.291a2.302 2.302 0 0 1 2.209-1.667c1.05 0 1.933.708 2.208 1.667h2.258a2.302 2.302 0 0 1 2.209-1.667c1.05 0 1.925.708 2.2 1.667Z"
    />
    <Path
      fill="#8B8B8B"
      d="M6.917 18.958a2.29 2.29 0 0 1-2.292-2.291 2.29 2.29 0 0 1 2.292-2.292 2.29 2.29 0 0 1 2.291 2.292 2.29 2.29 0 0 1-2.291 2.291Zm0-3.333a1.041 1.041 0 1 0 0 2.083 1.041 1.041 0 0 0 0-2.083Zm6.666 3.333a2.29 2.29 0 0 1-2.291-2.291 2.29 2.29 0 0 1 2.291-2.292 2.29 2.29 0 0 1 2.292 2.292 2.29 2.29 0 0 1-2.292 2.291Zm0-3.333a1.041 1.041 0 1 0 0 2.083 1.041 1.041 0 0 0 0-2.083Zm5-3.333h-2.5c-.8 0-1.458-.659-1.458-1.459v-2.5c0-.8.658-1.458 1.458-1.458h1.075a.61.61 0 0 1 .542.317l1.425 2.5c.05.091.083.2.083.308v1.667a.63.63 0 0 1-.625.625Zm-2.5-4.167a.206.206 0 0 0-.208.208v2.5c0 .117.092.209.208.209h1.875v-.875l-1.166-2.042h-.709Z"
    />
  </Svg>
);

export const VehicleActiveIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#BAAFE9"
      d="M11.917 2.433v6.925c0 .85-.692 1.542-1.542 1.542H2.75a.836.836 0 0 1-.833-.834V4.741c0-1.7 1.375-3.074 3.075-3.074h6.15c.433 0 .775.341.775.766Z"
    />
    <Path
      fill="#BAAFE9"
      d="M18.167 12.916c.233 0 .416.184.416.417v.833c0 1.384-1.116 2.5-2.5 2.5 0-1.375-1.125-2.5-2.5-2.5a2.507 2.507 0 0 0-2.5 2.5H9.417c0-1.375-1.125-2.5-2.5-2.5a2.507 2.507 0 0 0-2.5 2.5 2.497 2.497 0 0 1-2.5-2.5V12.5c0-.459.375-.834.833-.834h7.917a2.083 2.083 0 0 0 2.083-2.083V5c0-.458.375-.833.833-.833h.7c.6 0 1.15.325 1.45.841l.534.933a.21.21 0 0 1-.184.309A2.083 2.083 0 0 0 14 8.333v2.5a2.083 2.083 0 0 0 2.083 2.083h2.084Z"
    />
    <Path
      fill="#BAAFE9"
      d="M6.917 18.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Zm6.666 0a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Zm5-7.891v1.225h-2.5a.836.836 0 0 1-.833-.834v-2.5c0-.458.375-.833.833-.833h1.075l1.209 2.117c.141.25.216.533.216.825Z"
    />
  </Svg>
)

export const StoreIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#8B8B8B"
      d="M12.25 18.957h-4.5c-4.117 0-5.867-1.758-5.867-5.866V9.349a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v3.742c0 3.408 1.209 4.617 4.617 4.617h4.492c3.408 0 4.616-1.209 4.616-4.617V9.349a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v3.742c.009 4.108-1.75 5.867-5.858 5.867Z"
    />
    <Path
      fill="#8B8B8B"
      d="M10 10.625c-.917 0-1.75-.358-2.342-1.017-.592-.658-.867-1.516-.775-2.433l.558-5.567a.632.632 0 0 1 .625-.566h3.891c.325 0 .592.241.625.566l.559 5.567c.091.917-.184 1.775-.775 2.433a3.193 3.193 0 0 1-2.367 1.017ZM8.623 2.292l-.5 5.008c-.058.558.109 1.083.459 1.467.708.783 2.124.783 2.833 0 .35-.392.516-.917.458-1.467l-.5-5.008h-2.75Z"
    />
    <Path
      fill="#8B8B8B"
      d="M15.258 10.625c-1.691 0-3.2-1.367-3.375-3.05L11.3 1.733a.644.644 0 0 1 .158-.483.613.613 0 0 1 .467-.208h2.542c2.45 0 3.591 1.025 3.933 3.541l.233 2.317c.1.983-.2 1.917-.841 2.625-.642.708-1.542 1.1-2.534 1.1Zm-2.641-8.333.516 5.158c.109 1.042 1.075 1.925 2.125 1.925.634 0 1.2-.242 1.609-.683.4-.442.583-1.034.525-1.667l-.234-2.292c-.258-1.883-.866-2.441-2.691-2.441h-1.85Zm-7.918 8.333c-.991 0-1.891-.392-2.533-1.1-.642-.708-.942-1.642-.842-2.625l.225-2.292c.35-2.541 1.492-3.566 3.942-3.566h2.542a.64.64 0 0 1 .466.208.612.612 0 0 1 .159.483l-.584 5.842c-.175 1.683-1.683 3.05-3.375 3.05Zm.792-8.333c-1.825 0-2.433.55-2.7 2.458l-.225 2.275a2.118 2.118 0 0 0 .525 1.667c.4.441.966.683 1.608.683 1.05 0 2.025-.883 2.125-1.925l.517-5.158H5.49Zm6.592 16.666H7.917a.63.63 0 0 1-.625-.625V16.25c0-1.75.958-2.708 2.708-2.708 1.75 0 2.708.958 2.708 2.708v2.083a.63.63 0 0 1-.625.625Zm-3.541-1.25h2.916V16.25c0-1.05-.408-1.458-1.458-1.458s-1.458.408-1.458 1.458v1.458Z"
    />
  </Svg>
);


export const StoreActiveIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#BAAFE9"
      d="m19.133 6.892-.241-2.308c-.35-2.517-1.492-3.542-3.934-3.542H5.992c-2.45 0-3.584 1.025-3.942 3.567L1.825 6.9c-.083.892.158 1.759.683 2.434.634.825 1.609 1.291 2.692 1.291 1.05 0 2.058-.525 2.692-1.366a3.129 3.129 0 0 0 2.608 1.366c1.075 0 2.017-.5 2.592-1.333.641.825 1.633 1.333 2.666 1.333 1.109 0 2.109-.491 2.734-1.358.5-.667.725-1.508.641-2.375Zm-9.175 6.992A2.079 2.079 0 0 0 8.1 15.959v2.283c0 .225.183.408.408.408h3.975a.409.409 0 0 0 .409-.408V16.25c.008-1.741-1.017-2.566-2.934-2.366Z"
    />
    <Path
      fill="#BAAFE9"
      d="M18.308 11.998v2.483c0 2.3-1.866 4.167-4.166 4.167a.408.408 0 0 1-.409-.408v-1.992c0-1.067-.325-1.9-.958-2.467-.558-.508-1.317-.758-2.258-.758-.209 0-.417.008-.642.033a2.905 2.905 0 0 0-2.608 2.9v2.284a.409.409 0 0 1-.409.408 4.168 4.168 0 0 1-4.166-4.167v-2.466a.833.833 0 0 1 1.116-.784c.225.075.45.134.684.167.1.017.208.033.308.033.133.017.267.025.4.025.967 0 1.917-.358 2.667-.975.716.617 1.65.975 2.633.975a3.99 3.99 0 0 0 2.625-.958 4.21 4.21 0 0 0 2.633.958c.15 0 .3-.008.442-.025a4.015 4.015 0 0 0 1.008-.216.83.83 0 0 1 1.1.783Z"
    />
  </Svg>
)
 export const BillsIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#8B8B8B"
      d="M10.75 11.083a.621.621 0 0 1-.317-.083L3.075 6.742a.628.628 0 0 1 .633-1.084l7.042 4.075 7-4.05a.633.633 0 0 1 .858.225c.175.3.067.684-.225.859L11.075 11a.782.782 0 0 1-.325.083Z"
    />
    <Path
      fill="#8B8B8B"
      d="M10.75 18.633a.63.63 0 0 1-.625-.625V10.45a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v7.558a.63.63 0 0 1-.625.625Z"
    />
    <Path
      fill="#8B8B8B"
      d="M10.75 18.958c-.733 0-1.458-.158-2.033-.475l-4.45-2.475c-1.209-.666-2.15-2.275-2.15-3.658V7.642c0-1.384.941-2.984 2.15-3.659l4.45-2.466c1.141-.634 2.925-.634 4.066 0l4.45 2.475c1.209.666 2.15 2.275 2.15 3.658v4.708c0 1.384-.941 2.984-2.15 3.659l-4.45 2.466c-.575.317-1.3.475-2.033.475Zm0-16.666c-.525 0-1.042.108-1.425.316l-4.45 2.475c-.8.442-1.508 1.642-1.508 2.559v4.708c0 .917.708 2.117 1.508 2.567l4.45 2.475c.758.425 2.092.425 2.85 0l4.45-2.475c.8-.45 1.508-1.642 1.508-2.567V7.642c0-.917-.708-2.117-1.508-2.567L12.175 2.6c-.383-.2-.9-.308-1.425-.308Z"
    />
  </Svg>
);

export const BillSActiveIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#BAAFE9"
      d="m17.09 6.518-6.417 3.717a.859.859 0 0 1-.85 0L3.407 6.518c-.459-.267-.575-.892-.225-1.283.241-.275.516-.5.808-.659l4.517-2.5c.966-.541 2.533-.541 3.5 0l4.516 2.5c.292.159.567.392.809.659.333.391.216 1.016-.242 1.283Zm-7.315 5.265v5.683c0 .633-.642 1.05-1.208.775-1.717-.841-4.609-2.416-4.609-2.416-1.016-.575-1.85-2.025-1.85-3.217v-4.3c0-.658.692-1.075 1.259-.75l5.991 3.475c.25.158.417.442.417.75Zm.95 0v5.683c0 .633.642 1.05 1.208.775 1.717-.841 4.609-2.416 4.609-2.416 1.016-.575 1.85-2.025 1.85-3.217v-4.3c0-.658-.692-1.075-1.259-.75l-5.991 3.475a.897.897 0 0 0-.417.75Z"
    />
  </Svg>
);


export const TransactionsIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#8B8B8B"
      d="M10.833 8.125h-5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Zm5.034 4.208c-1.259 0-2.325-.933-2.425-2.133a2.288 2.288 0 0 1 .683-1.858 2.258 2.258 0 0 1 1.633-.675H17.5c.825.025 1.458.675 1.458 1.475v1.716c0 .8-.633 1.45-1.433 1.475h-1.658Zm1.608-3.416h-1.708c-.292 0-.559.108-.75.308a1.05 1.05 0 0 0-.325.867c.041.55.575.991 1.175.991H17.5c.108 0 .208-.1.208-.225V9.142c0-.125-.1-.217-.233-.225Z"
    />
    <Path
      fill="#8B8B8B"
      d="M13.333 17.709h-7.5c-2.866 0-4.791-1.925-4.791-4.792V7.084c0-2.567 1.583-4.425 4.041-4.734.225-.033.484-.058.75-.058h7.5c.2 0 .459.008.725.05 2.459.283 4.067 2.15 4.067 4.742v1.208a.63.63 0 0 1-.625.625h-1.733c-.292 0-.559.108-.75.308l-.009.009a1.052 1.052 0 0 0-.316.85c.041.55.575.991 1.175.991H17.5a.63.63 0 0 1 .625.625v1.209c0 2.875-1.925 4.8-4.792 4.8Zm-7.5-14.167c-.2 0-.391.017-.583.042-1.833.233-2.958 1.566-2.958 3.5v5.833c0 2.15 1.391 3.542 3.541 3.542h7.5c2.15 0 3.542-1.392 3.542-3.542v-.583h-1.008c-1.259 0-2.325-.934-2.425-2.134a2.27 2.27 0 0 1 .683-1.85 2.28 2.28 0 0 1 1.642-.683h1.108v-.583c0-1.95-1.142-3.292-2.992-3.509-.2-.033-.375-.033-.55-.033h-7.5Z"
    />
  </Svg>
);
export const TransactionsActiveIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#BAAFE9"
      d="M18.833 9.141v1.717a.856.856 0 0 1-.833.85h-1.633c-.9 0-1.725-.659-1.8-1.559-.05-.525.15-1.016.5-1.358a1.66 1.66 0 0 1 1.2-.5H18a.856.856 0 0 1 .833.85Z"
    />
    <Path
      fill="#BAAFE9"
      d="M17.558 12.958h-1.191c-1.584 0-2.917-1.192-3.05-2.709a2.932 2.932 0 0 1 .875-2.35 2.869 2.869 0 0 1 2.075-.858h1.291c.242 0 .442-.2.417-.442-.183-2.025-1.525-3.408-3.517-3.641a3.812 3.812 0 0 0-.625-.042h-7.5c-.233 0-.458.017-.675.05-2.125.267-3.491 1.85-3.491 4.117v5.833c0 2.3 1.866 4.167 4.166 4.167h7.5c2.334 0 3.942-1.459 4.142-3.684a.409.409 0 0 0-.417-.441Zm-6.225-4.834h-5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z"
    />
  </Svg>
);

export const FundWallet = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.885 12.865H7.718m2.084-2.033v4.166"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.55 2.098-.025.059-2.417 5.608H5.733c-.566 0-1.108.117-1.6.325l1.459-3.483.033-.084.058-.133c.017-.05.034-.1.059-.142 1.091-2.525 2.325-3.1 4.808-2.15Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.042 7.932a3.967 3.967 0 0 0-1.175-.167H8.108l2.417-5.608.025-.059c.125.042.242.1.367.15l1.841.775c1.025.425 1.742.867 2.175 1.4.084.1.15.192.209.3.075.117.133.234.166.359.034.075.059.15.075.216.225.7.092 1.559-.341 2.634Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.935 11.832v1.625c0 .166-.008.333-.017.5-.158 2.908-1.783 4.375-4.866 4.375h-6.5c-.2 0-.4-.017-.592-.042-2.65-.175-4.067-1.592-4.242-4.242a4.597 4.597 0 0 1-.041-.591v-1.625A4.078 4.078 0 0 1 4.143 8.09a4.127 4.127 0 0 1 1.6-.325h8.134c.408 0 .808.058 1.175.167a4.086 4.086 0 0 1 2.883 3.9Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.591 4.607 4.133 8.09a4.078 4.078 0 0 0-2.466 3.742V9.39a4.874 4.874 0 0 1 3.925-4.783ZM17.932 9.39v2.442A4.066 4.066 0 0 0 15.05 7.94c.433-1.083.558-1.933.35-2.642a.955.955 0 0 0-.075-.216 4.852 4.852 0 0 1 2.608 4.308Z"
    />
  </Svg>
);


export const SendMoney = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 7.5V1.667m0 0L8.833 3.333M10.5 1.667l1.667 1.666m-10.017 7.5h3.675c.317 0 .6.175.742.459l.975 1.95a1.667 1.667 0 0 0 1.491.925h2.942a1.666 1.666 0 0 0 1.492-.925l.975-1.95a.833.833 0 0 1 .741-.459h3.634"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.333 4.275C3.383 4.708 2.166 6.442 2.166 10v2.5c0 4.167 1.667 5.833 5.834 5.833h5c4.166 0 5.833-1.666 5.833-5.833V10c0-3.558-1.216-5.292-4.166-5.725"
    />
  </Svg>
);

export const PaystackIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 400 400"
    {...props}
  >
    <Path
      fill="#001A34"
      d="M189 401H1.03V1.092h399.816V401H189m-82.821-99.333c.694.424 1.39.848 2.397 1.694 1.13.19 2.26.38 4.324.701 33.04-.034 66.08-.069 99.663.068 1.875-.982 3.75-1.965 6.226-3.3.948-2.584 2.543-5.124 2.716-7.758.405-6.14.218-12.325.098-18.488-.134-6.917-4.355-11.293-11.273-11.313-32.16-.096-64.323-.158-96.482.097-2.917.024-5.815 2.397-9.208 4.07-.372.726-.744 1.451-1.606 2.915-.119 8.484-.343 16.968-.254 25.45.015 1.443 1.372 2.873 2.258 4.8.283.172.567.344 1.14 1.064m4.973-51.174c.36-.04.719-.08 1.874.004 17.489.038 34.977.108 52.465.108 39.81 0 79.619 0 119.428-.085 8.643-.02 12.479-3.957 12.657-12.542.096-4.662.052-9.328.065-13.991.03-10.84-3.532-14.482-14.269-14.485-55.633-.014-111.266-.014-166.9-.017-1.165 0-2.334-.03-3.496.045-6.61.426-10.352 4.354-10.383 10.926a2608.75 2608.75 0 0 0-.007 18.489c.016 6.592 1.802 9.01 8.566 11.548m-7.328-59.144c2.849 4.868 7.508 5.485 12.532 5.483 57.122-.026 114.245-.015 171.367-.032 3.66-.001 7.349.097 10.975-.299 5.845-.636 9.296-4.485 9.414-10.365.134-6.659.118-13.324-.022-19.983-.124-5.866-3.705-9.634-9.515-10.261-1.65-.179-3.326-.147-4.99-.147-59.12-.006-118.242-.006-177.362 0-1.498 0-3.033-.123-4.485.155-4.138.791-7.495 2.652-8.918 8.032-.062 5.737-.272 11.478-.13 17.21.08 3.19.747 6.366 1.134 10.207m89.677-89.495h-8.492c-23.313 0-46.625-.03-69.937.019-8.595.018-12.46 3.815-12.457 11.951.002 5.495-.01 10.99.031 16.485.07 9.076 3.557 12.669 12.754 12.676 56.448.046 112.897.04 169.346.008 8.63-.005 12.765-4.263 12.857-13.005.05-4.661-.031-9.324-.057-13.986-.059-10.472-3.689-14.133-14.125-14.139-29.64-.016-59.28-.008-89.92-.01z"
    />
    <Path
      fill="#02A2DA"
      d="M103.132 163.048c1.11-4.496 4.467-6.357 8.605-7.148 1.452-.278 2.987-.155 4.485-.155 59.12-.006 118.241-.006 177.362 0 1.664 0 3.34-.032 4.99.147 5.81.627 9.391 4.395 9.515 10.261.14 6.659.156 13.324.022 19.983-.118 5.88-3.57 9.729-9.414 10.365-3.626.396-7.314.298-10.975.299-57.122.017-114.245.006-171.367.032-5.024.002-9.683-.615-12.488-6.33-.216-9.717-.476-18.585-.735-27.454z"
    />
    <Path
      fill="#02A3DA"
      d="M194 101.854c30.14.001 59.78-.007 89.42.01 10.436.005 14.066 3.666 14.125 14.138.026 4.662.106 9.325.057 13.986-.092 8.742-4.228 13-12.857 13.005-56.449.032-112.898.038-169.346-.008-9.197-.007-12.685-3.6-12.754-12.676-.041-5.494-.029-10.99-.031-16.485-.004-8.136 3.862-11.933 12.457-11.951 23.312-.05 46.624-.018 69.937-.02H194z"
    />
    <Path
      fill="#169FD0"
      d="M110.865 250.239c-6.478-2.284-8.264-4.702-8.28-11.294a2608.75 2608.75 0 0 1 .007-18.489c.03-6.572 3.773-10.5 10.383-10.926 1.162-.074 2.331-.045 3.497-.045 55.633.003 111.266.003 166.9.017 10.736.003 14.297 3.644 14.268 14.485-.013 4.663.031 9.329-.065 13.99-.178 8.586-4.014 12.524-12.657 12.543-39.81.086-79.619.084-119.428.085-17.488 0-34.976-.07-53.198-.26-.965-.136-1.196-.12-1.427-.106m100.635-1.225h24.982c15.489-.003 30.978.04 46.466-.027 9.552-.04 13-3.517 13.064-12.898.023-3.331.013-6.662 0-9.993-.046-12.05-3.038-15.063-15.068-15.066-53.628-.012-107.256-.018-160.884.016-2.645.001-5.38.042-7.918.68-6.533 1.642-8.048 3.794-8.122 10.59-.043 3.997-.026 7.994-.025 11.991.005 12.007 2.448 14.472 14.572 14.693 1.665.03 3.33.013 4.996.014H211.5z"
    />
    <Path
      fill="#0D8DBD"
      d="M105.126 267.047c2.907-1.282 5.805-3.655 8.722-3.679 32.159-.255 64.321-.193 96.482-.097 6.918.02 11.139 4.396 11.273 11.313.12 6.163.307 12.349-.098 18.488-.173 2.634-1.768 5.174-3.147 7.805-.43.048-.692-.211-.544-.553.867-8.032 2.005-15.71 2.193-23.413.212-8.643-3.433-11.994-12.177-12.013-30.742-.065-61.485-.098-92.226.075-3.175.017-6.341 1.488-9.755 2.239a17.772 17.772 0 0 1-.723-.165z"
    />
    <Path
      fill="#1DA5D7"
      d="M212.02 303.959c-33.04.034-66.08.069-99.568-.234-.437-.518-.427-.699.05-.858 30.68.04 60.894.057 91.108.076 2.806.002 5.612.02 8.419.276 0 .247-.008.74-.008.74zM104.89 300.111c-.738-1.435-2.095-2.865-2.11-4.308-.089-8.482.135-16.966.634-25.715.38-.265.652-.06.647.408.332 10.132.669 19.797.96 29.5a9.365 9.365 0 0 0-.132.115z"
    />
    <Path
      fill="#1CA6D5"
      d="M102.976 163.49c.415 8.427.675 17.295.899 26.682-.439-2.664-1.106-5.84-1.186-9.03-.142-5.732.068-11.473.287-17.652z"
    />
    <Path
      fill="#0D8DBD"
      d="M212.292 304.044c-.271-.085-.263-.578.071-.895 1.99-1.038 3.647-1.76 5.303-2.483l.392.388a37.469 37.469 0 0 1-5.766 2.99zM112.036 302.845c-.01.181-.021.362-.05.815a6.578 6.578 0 0 1-3.342-.616c.514-.538.96-.759 1.657-.894.746.289 1.24.492 1.735.695z"
    />
    <Path
      fill="#1DA5D7"
      d="M110.049 302.065c-.445.22-.89.441-1.56.768-.92-.318-1.616-.742-2.416-1.489-.106-.323-.03-.424.316-.384 1.45.395 2.555.75 3.66 1.105zM104.883 267.243c.243-.196.723-.077.803.203-.486 1.047-1.053 1.815-1.62 2.583l-.407-.31c.237-.83.609-1.555 1.224-2.476z"
    />
    <Path
      fill="#00648D"
      d="M111.008 250.366c.088-.142.319-.157.885-.082-.023.13-.382.17-.885.082z"
    />
    <Path
      fill="#1DA5D7"
      d="M105.928 301.07c-.323-.123-.607-.295-.965-.713-.074-.246.014-.323.236-.217.452.31.66.535.844.78l-.115.15z"
    />
    <Path
      fill="#01A4DC"
      d="M211 249.014h-87.437c-1.666 0-3.331.016-4.996-.014-12.124-.221-14.567-2.686-14.572-14.693-.001-3.997-.018-7.994.025-11.991.074-6.796 1.589-8.948 8.122-10.59 2.538-.638 5.273-.679 7.918-.68 53.628-.034 107.256-.028 160.884-.016 12.03.003 15.022 3.015 15.068 15.066.013 3.33.023 6.662 0 9.993-.064 9.381-3.512 12.857-13.064 12.898-15.488.066-30.977.024-46.466.027H211z"
    />
    <Path
      fill="#02A3DB"
      d="M106.39 300.96c-.532-.285-.739-.51-1.146-.857-.514-9.81-.85-19.475-1.183-29.607.572-1.235 1.139-2.003 1.868-3.005 3.334-1.03 6.5-2.5 9.675-2.518 30.741-.173 61.484-.14 92.226-.075 8.744.019 12.389 3.37 12.177 12.013-.188 7.702-1.326 15.381-2.193 23.413-1.804 1.064-3.46 1.787-5.451 2.579-3.14.06-5.947.042-8.753.04-30.214-.02-60.428-.037-91.108-.076-.96-.225-1.455-.428-2.201-.717-1.357-.44-2.461-.795-3.912-1.19z"
    />
  </Svg>
);