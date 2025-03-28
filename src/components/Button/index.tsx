import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Loading } from "../../icons/Loading";
import variables from "../../variables";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
}

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
  background-color: ${variables.colors.base.primary};
  color: ${variables.colors.base.white};

  ${({ loading }) =>
    loading &&
    css`
      background-color: ${variables.colors.base.gray};
      cursor: not-allowed;
      opacity: 0.7;
      pointer-events: none;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${variables.colors.base.primary};
      cursor: not-allowed;
      opacity: 0.7;
      pointer-events: none;
      svg {
        fill: ${variables.colors.base.white};
      }
    `}

  &:hover {
    ${({ disabled, loading }) =>
      !disabled &&
      !loading &&
      css`
        opacity: 0.7;
      `}
  }
`;

export const Button = ({
  text = "Text",
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      disabled={disabled || loading}
      loading={loading}
      type="button"
      {...props}>
      {loading ? <Loading /> : text}
    </ButtonStyled>
  );
};
