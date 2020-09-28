import React, { CSSProperties } from 'react';
import Box, { BoxProps } from './Box';
import { ThemeContext } from './ThemeProvider';

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
    borderRadius: '50%'
  };

  return (
    <ThemeContext.Consumer>
      {({ backgroundColor }) => (
        <Box
          style={{
            ...innerStyle,
            ...(backgroundColor ? { backgroundColor } : undefined),
            ...style
          }}
          {...rest}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default Circle;
