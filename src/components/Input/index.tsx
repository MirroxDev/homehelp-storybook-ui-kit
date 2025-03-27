import styled from "styled-components";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

interface InputProps extends StyledInputProps {
  label: string;
  id: string;
}

// Стили для input
const StyledInput = styled.input<StyledInputProps>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff3333" : "#ccc")};
  background-color: #fff;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? "#ff3333" : "#007bff")};
    box-shadow: 0 0 4px
      ${({ hasError }) =>
        hasError ? "rgba(255, 51, 51, 0.2)" : "rgba(0, 123, 255, 0.2)"};
  }

  &:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-100%) scale(0.75);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Стили для label
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  color: #333;
`;

// Стили для обертки
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

export const Input = ({
  hasError = false,
  label,
  placeholder,
  id,
  onChange,
  ...props
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <InputWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        hasError={hasError}
        placeholder={placeholder}
        onChange={handleChange}
        id={id}
        {...props}
      />
    </InputWrapper>
  );
};
