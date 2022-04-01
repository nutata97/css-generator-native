import { Slider } from 'antd';

function LineHeight(data){
  return (
    <Slider 
      min={0}
      max={10}
      step={0.05}
      defaultValue={ data.lineHeight }
      onChange={ data.onChange }
    />
  );
}

export default LineHeight;