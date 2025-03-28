import styled from "styled-components";
import { CardArrow } from "../../icons/CardArrow";
import { DemoIcon } from "../../icons/demo/DemoIcon";
import { JSX } from "react";
import variables from "../../variables";
interface ServiceCardProps {
  icon: JSX.Element;
  number: string;
  name: string;
}

const ServiceCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 32px;
  @media (max-width: 762px) {
    padding-bottom: 1rem;
  }
  svg {
    fill: ${variables.colors.base.primary};
    transition: fill 0.2s ease-in-out;
  }
`;
const ServiceCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  svg {
    transition: 0.2s ease-in-out;
    path {
      stroke: ${variables.colors.base.primary};
      transition: stroke 0.2s ease-in-out;
    }
  }
`;
const ServiceCardNumber = styled.div`
  color: ${variables.colors.base.primary};
  font-weight: 400;
  font-size: 16px;
  transition: 0.2s ease-in-out;
`;

const ServiceCardName = styled.div`
  font-size: 20px;
  color: ${variables.colors.base.primary};
  font-weight: 400;
  width: 100%;
  transition: 0.2s ease-in-out;

  @media (max-width: 762px) {
    font-size: 16px;
  }
`;

const ServiceCardWarapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${variables.colors.base.white};
  border: 1px solid ${variables.colors.base.gray};
  border-radius: 5px;
  padding: 20px 20px;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 762px) {
    padding: 10px 10px;
  }

  &:hover {
    border: 1px solid ${variables.colors.base.primary};
    background-color: ${variables.colors.base.primary};

    ${ServiceCardName}, ${ServiceCardNumber}, svg {
      color: ${variables.colors.base.white};
      fill: ${variables.colors.base.white};
    }
    ${ServiceCardBottom} {
      svg {
        transform: rotate(45deg);
        path {
          stroke: ${variables.colors.base.white};
        }
      }
    }
  }
`;

export const ServiceCard = ({
  icon = <DemoIcon />,
  number = "01",
  name = "Service name",
  ...props
}: ServiceCardProps) => {
  return (
    <ServiceCardWarapper {...props}>
      <ServiceCardTop>
        {icon}
        <ServiceCardNumber>{number}</ServiceCardNumber>
      </ServiceCardTop>
      <ServiceCardBottom>
        <ServiceCardName>{name}</ServiceCardName>
        <CardArrow />
      </ServiceCardBottom>
    </ServiceCardWarapper>
  );
};
