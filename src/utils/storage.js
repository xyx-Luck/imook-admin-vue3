// 存储数据
export const setItem = (key, value) => {
  return JSON.stringify(window.localStorage.setItem(key, value));
};
// 获取数据
export const getItem = (key) => {
  // return JSON.parse(window.localStorage.getItem(key));
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
};
// 删除某个数据
export const removeItem = (key) => {
  return window.localStorage.removeItem(key);
};
// 删除全局
export const clearItem = () => {
  return window.localStorage.clear();
};
