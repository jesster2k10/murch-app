import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Section = styled.View`
  margin-top: ${props => props.top ? props.top : props.padding ? props.padding : 0};
  margin-bottom: ${props => props.bottom ? props.bottom : props.padding ? props.padding : 0};
  margin-left: ${props => props.left ? props.left : props.padding ? props.padding : 0};
  margin-right: ${props => props.right ? props.right : props.padding ? props.padding : 0};
  flex-direction: ${props => props.row ? 'row' : 'column'}
`

export const TitleContainer = styled.View`
  margin-left: 25px;
  margin-bottom: 15px;
`;