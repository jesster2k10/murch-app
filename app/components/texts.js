import React from 'react';
import styled from 'styled-components/native';
import {
  fonts,
  colors,
} from '@styles';

export const Title = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: 38;
  font-weight: bold;
`;

export const SmallTitle = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: 26;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: ${props => props.small ? 14 : 18};
  font-weight: bold;
  ${props => props.styles};
`;

export const Strikethrough = Subtitle.extend`
  text-decoration-line: line-through;   
`;

export const Light = styled.Text`
  color: ${props => props.color ? props.color : colors.lightText};
  font-size: ${props => props.small ? 12 : 15};
  font-weight: 400;
`;

export const Text = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: ${props => props.small ? 14 : 16};
  font-weight: 400;
  line-height: 25;
`;

export const LargeText = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: 20;
  font-weight: 300;
  line-height: 25;
`;

export const Bold = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: 17;
  font-weight: 600;
`;

export const SmallBold = styled.Text`
  color: ${props => props.color ? props.color : colors.text};
  font-size: 15;
  font-weight: 600;
`;