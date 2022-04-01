import { Select } from 'antd';
const { Option } = Select;

function FontWeight(data){
  return (
    <Select defaultValue={data.fontWeight} style={{ width: 120 }} onChange={ data.onChange }>
      <Option value="100">100</Option>
      <Option value="200">200</Option>
      <Option value="300">300</Option>
      <Option value="400">400</Option>
      <Option value="500">500</Option>
      <Option value="600">600</Option>
      <Option value="700">700</Option>
      <Option value="800">800</Option>
      <Option value="900">900</Option>
      <Option value="bold">bold</Option>
      <Option value="bolder">bolder</Option>
      <Option value="lighter">lighter</Option>
      <Option value="normal">normal</Option>
    </Select>
  );
}

export default FontWeight;