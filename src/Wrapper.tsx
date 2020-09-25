import React, { ReactElement, cloneElement } from 'react';
import range from 'lodash.range';
import Box, { BoxProps } from './Box';

export interface WrapperProps extends Omit<BoxProps, 'children'> {
  children?: ReactElement | ReactElement[] | ((index: number) => ReactElement);
  /**
   * 子元素重复几份，避免自己写 range 循环了
   */
  childrenCount?: number;
}

const Wrapper = (props: WrapperProps) => {
  const { children, childrenCount, ...rest } = props;

  const getChildren = () => {
    if (childrenCount && childrenCount > 0 && !Array.isArray(children)) {
      return (
        children &&
        range(childrenCount).map((n) => {
          return cloneElement(typeof children === 'function' ? children(n) : children, {
            key: n
          });
        })
      );
    }
    return children;
  };

  return <Box {...rest}>{getChildren()}</Box>;
};

export default Wrapper;
