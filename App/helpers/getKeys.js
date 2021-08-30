/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const getKeys = (item) => {
  let keys = Object.keys(item)

  keys= keys.filter(value => {
      if (value === 'created' || value === 'url' || value === 'id' || value === 'image'){
        return false;
    }
    return true;
  });
  return keys;
}

export default getKeys;