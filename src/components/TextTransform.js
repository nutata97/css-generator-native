import { Select } from 'antd';
const { Option } = Select;

function TextTransform(data){
  return (
    <Select defaultValue={data.textTransform} style={{ width: 120 }} onChange={ data.onChange }>
      <Option value="none">none</Option>
      <Option value="capitalize">capitalize</Option>
      <Option value="lowercase">lowercase</Option>
      <Option value="uppercase">uppercase</Option>
    </Select>
  );
}

export default TextTransform;