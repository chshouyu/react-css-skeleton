import React, { CSSProperties } from 'react';
import config from './config';
import Box, { BoxProps } from './Box';

export interface CircleProps
  extends Pick<
    BoxProps,
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginHorizontal'
    | 'marginVertical'
    | 'className'
    | 'style'
  > {
  size?: number | string;
}

const Circle = (props: CircleProps) => {
  const { size, style, ...rest } = props;

  const innerStyle: CSSProperties = {
    width: size,
    height: size,
    backgroundColor: config.backgroundColor,
    borderRadius: '50%',
    ...style
  };

  return <Box style={innerStyle} {...rest} />;
};

export default Circle;
