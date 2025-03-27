import styled from "styled-components";
import { CardArrow } from "../../icons/CardArrow";
import { DemoIcon } from "../../icons/demo/DemoIcon";
import { JSX } from "react";

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
  svg {
    fill: #1268fb;
    transition: fill 0.2s ease-in-out;
  }
`;
const ServiceCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  svg {
    path {
      stroke: #1268fb;
      transition: stroke 0.2s ease-in-out;
    }
  }
`;
const ServiceCardNumber = styled.div`
  color: #1268fb;
  font-weight: 400;
  font-size: 16px;
  transition: 0.2s ease-in-out;
`;

const ServiceCardName = styled.div`
  font-size: 20px;
  color: #1268fb;
  font-weight: 400;
  width: 100%;
  transition: 0.2s ease-in-out;
`;

const ServiceCardWarapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #d4dcef;
  border-radius: 5px;
  padding: 20px 20px;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid #1268fb;
    background-color: #1268fb;

    ${ServiceCardName}, ${ServiceCardNumber}, svg {
      color: #fff;
      fill: #fff;
    }
    ${ServiceCardBottom} {
      svg {
        path {
          stroke: #fff;
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
