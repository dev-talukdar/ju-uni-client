import { Form, Select } from "antd";
import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

type TUsableSelectProps = {
  label: string;
  name: string;
  options:
    | { value: string | number; label: string | number; disable?: boolean }[]
    | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const UsableSelectWithWatch = ({
  label,
  name,
  options,
  disabled,
  mode,
  onValueChange,
}: TUsableSelectProps) => {
  const { control } = useFormContext();
  const inputValue = useWatch({ control, name });
  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue]);
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

export default UsableSelectWithWatch;
