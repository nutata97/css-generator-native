import { InputNumber, Select } from 'antd';

const { Option } = Select;

function FontSize(data){
  const selectAfter = (
    <Select defaultValue={data.fontSize.unit} style={{ width: 70 }} onChange={(value) => data.onChange('unit', value)}>
      <Option value="px">px</Option>
      <Option value="em">em</Option>
      <Option value="rem">rem</Option>
    </Select>
  );

  return (
    <InputNumber style={{ width: 180 }} addonAfter={selectAfter} defaultValue={data.fontSize.value} onChange={(value) => data.onChange('value', value)}/>
  );
}

export default FontSize;