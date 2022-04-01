import { ChromePicker } from 'react-color';

function Color(data){
  return (
    <ChromePicker
      color={ data.color }
      onChange={ data.onChange }  
    />
  );
}

export default Color;