/* eslint-disable consistent-return */

function navigateTo(info, value, navigation){
  let nested = '';
  let screen = '';
  let id='';
  if(info[value].url.includes('character')){
    nested = 'Characters';
    screen = 'CharacterDetail';
  } if (info[value].url.includes('episode')){
    nested = 'Episodes';
    screen = 'EpisodeDetail';
  } if(info[value].url.includes('location')){
    nested = 'Locations';
    screen = 'LocationDetail';
  }
  id=info[value].url[info[value].url.length-1]
  return navigation.navigate(nested, {screen, params: { id}});
};

export default navigateTo;
