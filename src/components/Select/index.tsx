import Select, { ActionMeta, SingleValue } from 'react-select';

export interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  options: OptionType[];
  defaultValue?: OptionType;
  placeholder?: string;
  isDisabled?: boolean;
  onChange?: (newValue: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
}

export const CustomSelect = ({
  options,
  defaultValue,
  placeholder = "Выберите...",
  isDisabled = false,
  onChange,
  ...props
}: SelectProps) => {
  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      placeholder={placeholder}
      isDisabled={isDisabled}
      onChange={onChange}
      {...props}
    />
  );
};