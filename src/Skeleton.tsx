import React from 'react';
import clsx from 'clsx';
import Wrapper, { WrapperProps } from './Wrapper';

import styles from './Skeleton.module.scss';

export interface SkeletonProps extends WrapperProps {}

const Skeleton = (props: SkeletonProps) => {
  const { className, ...rest } = props;

  return (
    <Wrapper
      className={clsx(styles['skeleton'], className)}
      afterNode={<span className={styles['highlight']} />}
      {...rest}
    />
  );
};

export default Skeleton;
