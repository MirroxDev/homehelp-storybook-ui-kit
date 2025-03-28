import styled from "styled-components";
import { ChangeEvent, InputHTMLAttributes } from "react";
import variables from "../../variables";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  data_haserror?: boolean; // Переименовал в data_haserror по конвенции
}

interface StyledLabelProps {
  data_haserror?: boolean;
}

interface InputProps extends StyledInputProps {
  label: string;
  id: string;
}

// Стили для input
const StyledInput = styled.input<StyledInputProps>`
  height: 70px;
  padding: 0px 15px;
  border-radius: 5px;
  border: 1px solid
    ${({ data_haserror }) => (data_haserror ? `${variables.colors.base.red}` : `${variables.colors.base.gray}`)};
  background-color: #fff;
  color: #333;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus,
  &:not(:placeholder-shown) {
    padding-top: 20px;
    outline: none;
    border-color: ${({ data_haserror }) =>
      data_haserror ? `${variables.colors.base.red}` : `${variables.colors.base.primary}`};
    box-shadow: 0 0 4px
      ${({ data_haserror }) =>
        data_haserror ? "rgba(255, 51, 51, 0.2)" : "rgba(0, 123, 255, 0.2)"};
    ~ label {
      top: 20px;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Стили для label
const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ data_haserror }) => (data_haserror ? `${variables.colors.base.red}` : `${variables.colors.base.primary}`)};
  font-size: 20px;
  font-weight: 400;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  pointer-events: none;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

// Стили для обертки
const InputWrapper = styled.div`
  position: relative;
`;

export const Input = ({
  data_haserror,
  label,
  id,
  onChange,
  ...props
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <InputWrapper>
      <StyledInput
        onChange={handleChange}
        id={id}
        data_haserror={data_haserror}
        placeholder=""
        {...props}
      />
      <StyledLabel htmlFor={id} data_haserror={data_haserror}>
        {label}
      </StyledLabel>
    </InputWrapper>
  );
};
