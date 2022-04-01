import { Slider } from 'antd';

function WordSpacing(data){
  return (
    <Slider 
      min={-50}
      max={70}
      defaultValue={ data.wordSpacing }
      onChange={ data.onChange }
    />
  );
}

export default WordSpacing;