import React from 'react';
import clsx from 'clsx';
import Wrapper, { WrapperProps } from './Wrapper';
import ThemeProvider, { ThemeContext } from './ThemeProvider';
import { Theme } from './theme';

import styles from './Skeleton.module.scss';

export interface SkeletonProps extends WrapperProps {
  theme?: Theme;
  animationDuration?: number;
}

const Skeleton = (props: SkeletonProps) => {
  const { className, theme, animationDuration = 800, ...rest } = props;

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Consumer>
        {({ highlightColor }) => (
          <Wrapper
            className={clsx(styles['skeleton'], className)}
            afterNode={
              <span
                className={styles['highlight']}
                style={{
                  ...(highlightColor
                    ? {
                        background: `linear-gradient(90deg, transparent, ${highlightColor}, transparent)`
                      }
                    : undefined),
                  ...(animationDuration
                    ? { animationDuration: `${animationDuration}ms` }
                    : undefined)
                }}
              />
            }
            {...rest}
          />
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default Skeleton;
