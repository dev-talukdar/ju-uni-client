import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TUsableSelectProps = {
  label: string;
  name: string;
  options:
    | { value: string | number; label: string | number; disable?: boolean }[]
    | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

const UsableFormSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
}: TUsableSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100% " }}
            {...field}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default UsableFormSelect;
