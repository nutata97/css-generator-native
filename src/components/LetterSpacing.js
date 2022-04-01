import { Slider } from 'antd';

function LetterSpacing(data){
  return (
    <Slider 
      min={0}
      max={50}
      defaultValue={ data.letterSpacing }
      onChange={ data.onChange }
    />
  );
}

export default LetterSpacing;