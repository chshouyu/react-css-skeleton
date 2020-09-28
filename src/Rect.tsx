import React from 'react';
import Box, { BoxProps } from './Box';
import { ThemeContext } from './ThemeProvider';

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

  return (
    <ThemeContext.Consumer>
      {({ backgroundColor }) => (
        <Box
          style={{ ...(backgroundColor ? { backgroundColor } : undefined), ...style }}
          radius={radius}
          {...rest}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default Rect;
