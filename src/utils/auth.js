//被动登出解决方案——token失效
import { setItem, getItem } from "./storage.js";
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from "../constant/index.js";
//设置缓存的时间戳
export function setTimeStamp() {
  return setItem(TIME_STAMP, Date.now());
}
//获取缓存的时间戳
export function getTimeStamp() {
  return getItem(TIME_STAMP);
}
//判断是否失效
export function isTokenTimeout() {
  //当前时间
  const currentTime = Date.now();
  //缓存的时间
  const stampTime = getTimeStamp();
  if (currentTime - stampTime > TOKEN_TIMEOUT_VALUE) {
    return true;
  }
}
