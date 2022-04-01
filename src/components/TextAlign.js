import { Select } from 'antd';
const { Option } = Select;

function TextAlign(data){
  return (
    <Select defaultValue={data.textAlign} style={{ width: 120 }} onChange={ data.onChange }>
      <Option value="left">left</Option>
      <Option value="right">right</Option>
      <Option value="justify">justify</Option>
      <Option value="center">center</Option>
    </Select>
  );
}

export default TextAlign;