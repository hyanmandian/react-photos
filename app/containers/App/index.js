import React from "react";
import styled from "styled-components";
import { node } from "prop-types";
import Helmet from "react-helmet-async";

const Wrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = ({ children }) => (
  <Wrapper>
    <Helmet
      titleTemplate="%s - React Etalpreliob"
      defaultTitle="React Etalpreliob"
    >
      <meta name="description" content="A React Etalpreliob application" />
    </Helmet>
    <main>{children}</main>
  </Wrapper>
);

App.propTypes = {
  children: node
};

export default App;
