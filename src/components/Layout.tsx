import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto 35rem;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-template-areas:
    "header header"
    "weather weather";
  gap: 1rem;

  border-radius: 0.25rem;
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.3);
  color: #222;
  max-width: 50rem;
  background-color: #023047;
  color: #f1faee;

  .header {
    grid-area: header;
    text-align: center;
  }

  .app {
    grid-area: weather;
    text-align: center;
    justify-content: center;
  }

  .icon {
    max-height: 20rem;
    max-width: 20rem;
    justify-content: center;
    align-items: end;
    margin-top: 5%;
    outline: solid 0px #ffb703;
    transition: outline 0.3s linear;
  }

  .icon:hover {
    cursor: pointer;
    outline-width: 6px;
  }

  .movedIcon {
    max-height: 3rem;
    max-width: 3rem;
    transition: 0.5s;
    animation-duration: 0.15s;
    animation-name: slidein;
    margin-left: 92%;
    margin-top: 50%;
    outline: 1px solid #f1faee;
    padding: 0;
  }

  @keyframes slidein {
    from {
      margin-top: 5%;
    }
    to {
      margin-left: 92%;
      margin-top: 50%;
    }
  }

  .table {
    z-index: 0;
  }

  .card {
    grid-area: weather;
    background-color: #8ECAE6;
    max-height: 28rem;
  }

  .section {
    margin-top: 1rem;
    box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    padding: 1rem;
  }

  .calculation {
    font-size: 5rem;
    text-align: center;
  }

  * {
    font-family: 'Nunito Sans', sans-serif;
  }

  blockquote {
    font-style: italic;
  }

  td {
    padding: 0.5rem;
  }

  td:nth-of-type(1) {
    font-style: italic;
    text-transform: lowercase;
  }

  td:nth-of-type(2) {
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Layout: FunctionComponent = (props) => {
  if (!props.children || !Array.isArray(props.children)) {
    return null;
  }

  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Layout;
