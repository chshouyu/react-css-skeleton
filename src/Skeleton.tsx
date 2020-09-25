import React from 'react';

export interface SkeletonProps {
  className?: string;
}

const Skeleton = (props: SkeletonProps) => {
  return <div className={props.className}>123</div>;
};

export default Skeleton;
