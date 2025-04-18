import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSvg = styled.svg`
  animation: ${rotate} 1s linear infinite;
`;

export const Loading = () => {
  return (
    <LoadingSvg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1563 12.8438C22.6898 12.8438 22.3125 12.4664 22.3125 12C22.3125 10.6078 22.0406 9.25781 21.5016 7.98516C20.983 6.75998 20.2325 5.64659 19.2914 4.70625C18.3521 3.76387 17.2385 3.01321 16.0125 2.49609C14.7422 1.95938 13.3922 1.6875 12 1.6875C11.5336 1.6875 11.1562 1.31016 11.1562 0.84375C11.1562 0.377344 11.5336 0 12 0C13.6195 0 15.1922 0.316406 16.6711 0.944531C18.1008 1.54688 19.3828 2.41406 20.4844 3.51562C21.5859 4.61719 22.4508 5.90156 23.0555 7.32891C23.6813 8.80781 23.9977 10.3805 23.9977 12C24 12.4664 23.6227 12.8438 23.1563 12.8438Z" />
    </LoadingSvg>
  );
};
