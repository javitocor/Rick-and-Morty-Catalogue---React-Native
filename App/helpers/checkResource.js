/* eslint-disable consistent-return */
function checkResource(item, navigation){
  let nested = '';
  let screen = '';

  if(item.url.includes('character')){
    nested = 'Characters';
    screen = 'CharacterDetail';
  } if (item.url.includes('episode')){
    nested = 'Episodes';
    screen = 'EpisodeDetail';
  } if(item.url.includes('location')){
    nested = 'Locations';
    screen = 'LocationDetail';
  } 
  return   navigation.navigate(nested, {
    screen, 
    params: {
      id: item.id
    },
  });    
}

export default checkResource;