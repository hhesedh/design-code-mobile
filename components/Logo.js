import React from "react";
import styled from "styled-components";

const Logo = props => (
  <Container style={{ elevation: 5 }}>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  margin: 5px 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-left: 8px;
`;