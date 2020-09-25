import React, { CSSProperties } from 'react';
import config from './config';
import Box, { BoxProps } from './Box';

export interface RectProps
  extends Pick<
    BoxProps,
    | 'width'
    | 'height'
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginHorizontal'
    | 'marginVertical'
    | 'flex1'
    | 'radius'
    | 'className'
    | 'style'
  > {}

const Rect = (props: RectProps) => {
  const { style, radius = 2, ...rest } = props;

  const innerStyle: CSSProperties = {
    backgroundColor: config.backgroundColor,
    ...style
  };

  return <Box style={innerStyle} radius={radius} {...rest} />;
};

export default Rect;
