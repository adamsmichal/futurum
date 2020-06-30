import React from "react";
import styled from "styled-components";

const MapComponent = styled.iframe`
  width: 100%;
  margin-top: ${({ theme }) => theme.space.l};
  border: none;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 250px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.phone}) {
    height: 400px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    height: 600px;
    padding: ${({ theme }) => theme.space.l} ${({ theme }) => theme.space.xxxxl};
  }
`;

const Map: React.FC = () => (
  <MapComponent
    src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d4781.068637661882!2d23.063188!3d53.190333!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d53.1905837!2d23.063423999999998!5e0!3m2!1sen!2spl!4v1592325769890!5m2!1sen!2spl"
    frameBorder="0"
    aria-hidden="false"
    tabIndex={0}
  />
);

export default Map;
