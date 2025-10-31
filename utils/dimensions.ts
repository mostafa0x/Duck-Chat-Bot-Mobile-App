import {
  responsiveHeight as rhPx,
  responsiveWidth as rwPx,
} from "react-native-responsive-dimensions";
import { RFValue as rfPx } from "react-native-responsive-fontsize";

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const rw = (px: number) => rwPx((px / BASE_WIDTH) * 100);
export const rh = (px: number) => rhPx((px / BASE_HEIGHT) * 100);
export const rf = (px: number) => rfPx(px, BASE_HEIGHT);
