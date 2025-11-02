import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width={24} viewBox="0 0 24 24" height={24} fill="none" {...props}>
    <Path
      fill="#ffffffff"
      d="M9.025.045c-.086.031-.23.098-.315.152-.089.055-2.035 2.085-4.326 4.513C.673 8.64.21 9.144.136 9.328c-.181.465-.181.88 0 1.345.074.184.54.693 4.267 4.638 4.818 5.1 4.363 4.68 5.092 4.68.395 0 .44-.007.647-.113.6-.313.951-1.028.836-1.7-.096-.56.082-.353-3.774-4.435L3.666 10l3.538-3.746c3.856-4.079 3.678-3.872 3.774-4.43.115-.673-.236-1.393-.836-1.698C9.95.025 9.876.01 9.55.002c-.237-.008-.426.008-.525.043Z"
    />
  </Svg>
);
const Memo = memo(ArrowLeftIcon);
export default Memo;
