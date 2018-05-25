module.exports = (array, key, initializedObj = {}) =>
  array.reduce((prevObj, nextItem) => {
    return {
      ...prevObj,
      [nextItem[key]]: nextItem
    }
  }, initializedObj);