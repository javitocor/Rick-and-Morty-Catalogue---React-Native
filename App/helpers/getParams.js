/* eslint-disable consistent-return */
function getParams(resource) {
  if(resource === 'character') {
    return [{label:'Name', value:'name'}, {label:'Status', value:'status'}, {label:'Species', value:'species'}, {label:'Type', value:'type'}, {label:'Gender', value:'gender'}]
  } if(resource === 'location') {
    return [{label:'Name', value:'name'}, {label:'Type', value:'type'}, {label:'Dimension', value:'dimension'}]
  } if(resource === 'episode') {
    return [{label:'Name', value:'name'}, {label:'Episode', value:'episode'}]
  }
};

export default getParams;