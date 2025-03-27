import { ButtonHTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";
import { Loading } from "../../icons/Loading";

// Интерфейс пропсов для ButtonStyled
interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

// Интерфейс пропсов для компонента Button
interface ButtonProps extends StyledButtonProps {
  text: string;
}

const ButtonStyled = styled.button<StyledButtonProps>`
  padding: 20px 20px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) =>
    variant === "secondary"
      ? css`
          background-color: #6c757d;
          color: #fff;
        `
      : css`
          background-color: #1268fb;
          color: #fff;
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
      opacity: 0.7;
    `}

  ${({ loading }) =>
    loading &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
      pointer-events: none;
    `}

  &:hover {
    ${({ disabled, loading }) =>
      !disabled &&
      !loading &&
      css`
        opacity: 70%;
      `}
  }
`;

export const Button = ({
  text = "Text",
  disabled = false,
  loading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      disabled={disabled || loading} // Отключаем кнопку при loading
      type="button" // По умолчанию тип button, можно переопределить через props
      variant={variant}
      loading={loading}
      {...props}>
      {loading ? <Loading /> : text}
    </ButtonStyled>
  );
};
