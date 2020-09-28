import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeContext } from './ThemeProvider';

import styles from './Box.module.scss';

export interface BoxProps {
  width?: number | string;
  height?: number | string;
  // margin
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  /** 水平 margin，即 marginLeft + marginRight */
  marginHorizontal?: number | string;
  /** 垂直 margin，即 marginTop + marginBottom */
  marginVertical?: number | string;
  // padding
  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  /** 水平 padding，即 paddingLeft + paddingRight */
  paddingHorizontal?: number | string;
  /** 垂直 padding，即 paddingTop + paddingBottom */
  paddingVertical?: number | string;
  // border
  border?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  /** 水平 border，即 borderLeft + borderRight */
  borderHorizontal?: boolean;
  /** 垂直 border，即 borderTop + borderBottom */
  borderVertical?: boolean;
  // flex
  /** display: flex */
  flex?: boolean;
  /** flex-direction: row */
  flexRow?: boolean;
  /** flex-direction: column */
  flexColumn?: boolean;
  /** flex: 1 */
  flex1?: boolean;
  /** align-items: center */
  alignCenter?: boolean;
  /** justify-content: center */
  justifyCenter?: boolean;
  /** justify-content: space-between */
  justifySpaceBetween?: boolean;
  /** border-radius */
  radius?: number | string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const Box = (props: BoxProps) => {
  const {
    marginHorizontal,
    marginVertical,
    paddingHorizontal,
    paddingVertical,
    border,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    borderHorizontal,
    borderVertical,
    flex,
    flex1,
    flexColumn,
    flexRow,
    alignCenter,
    justifyCenter,
    justifySpaceBetween,
    className,
    style,
    children,
    radius,
    ...restStyle
  } = props;

  const marginStyle: CSSProperties = {
    ...(typeof marginHorizontal !== 'undefined'
      ? { marginLeft: marginHorizontal, marginRight: marginHorizontal }
      : undefined),
    ...(typeof marginVertical !== 'undefined'
      ? { marginTop: marginVertical, marginBottom: marginVertical }
      : undefined)
  };

  const paddingStyle: CSSProperties = {
    ...(typeof paddingHorizontal !== 'undefined'
      ? { paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal }
      : undefined),
    ...(typeof paddingVertical !== 'undefined'
      ? { paddingTop: paddingVertical, paddingBottom: paddingVertical }
      : undefined)
  };

  const radiusStyle: CSSProperties = {
    ...(typeof radius !== 'undefined' ? { borderRadius: radius } : undefined)
  };

  const flexClassNames = clsx({
    [styles['flex']]:
      flex || flexColumn || flexRow || alignCenter || justifyCenter || justifySpaceBetween,
    [styles['flex1']]: flex1,
    [styles['flex-column']]: flexColumn,
    [styles['flex-row']]: flexRow,
    [styles['align-center']]: alignCenter,
    [styles['justify-center']]: justifyCenter,
    [styles['justify-space-between']]: justifySpaceBetween
  });

  const borderClassNames = clsx({
    [styles['border']]: border,
    [styles['border-left']]: borderLeft || borderHorizontal,
    [styles['border-right']]: borderRight || borderHorizontal,
    [styles['border-top']]: borderTop || borderVertical,
    [styles['border-bottom']]: borderBottom || borderVertical
  });

  const finalStyle: CSSProperties = {
    ...marginStyle,
    ...paddingStyle,
    ...radiusStyle,
    ...restStyle
  };

  return (
    <ThemeContext.Consumer>
      {({ borderColor }) => (
        <div
          className={clsx(styles['skeleton-box'], flexClassNames, borderClassNames, className)}
          style={{
            ...finalStyle,
            ...(borderColor ? { borderColor } : undefined),
            ...style
          }}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Box;
