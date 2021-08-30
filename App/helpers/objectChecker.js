/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import {GetInfo} from './APIcalls';

const valueCheck =(item, keys)=>{
  const tmp = [];
  for(const k in keys) {
    if(typeof(item[keys[k]]) === 'object') {
      tmp.push(keys[k]);
    }
  }
  return tmp;
};

async function checkObject(item, key){
  const object = item[key];
  if(Array.isArray(object)){
    const tempArray = [];
    for(const link in object) { 
      const response = await GetInfo(object[link]);
      tempArray.push({name: response.name, url: response.url, id: response.id})
    }
    return tempArray
  } 
  return null; 
};

async function objectChecker (item, keys) {
  const finalObj = {};
  const objectKeys = valueCheck(item, keys);
  for (let i = 0; i < objectKeys.length;i++){
    const key = objectKeys[i];
    const data = await checkObject(item, key);
    if(data !==null){
      finalObj[key] = data;
    }
  }
  return [finalObj, objectKeys];
};

export default objectChecker;