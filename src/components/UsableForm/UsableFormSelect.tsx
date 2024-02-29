import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TUsableSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disable?: boolean }[];
};

const UsableFormSelect = ({ label, name, options }: TUsableSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select style={{ width: "100% " }} {...field} options={options} />
        </Form.Item>
      )}
    />
  );
};

export default UsableFormSelect;
