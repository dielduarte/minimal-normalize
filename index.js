module.exports = (array, key) =>
  array.reduce((prevObj, nextItem) => {
    return {
      ...prevObj,
      [nextItem[key]]: nextItem
    }
  }, {});