import React, {
  ReactNode,
  Fragment,
  FunctionComponent,
  CSSProperties,
  useState,
  useEffect
} from 'react';
import { CSSTransition } from 'react-transition-group';
import usePrevious from './usePrevious';

export interface SkeletonWithLoadingProps {
  isLoading: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const withLoading = <P extends unknown>(element: ReactNode | ((props?: P) => ReactNode)) => {
  const SkeletonWithLoading: FunctionComponent<SkeletonWithLoadingProps & { extraProps?: P }> = ({
    isLoading,
    children,
    className,
    style,
    extraProps
  }) => {
    const [isInnerLoading, setIsInnerLoading] = useState(isLoading);
    const prevIsLoading = usePrevious(isLoading);

    useEffect(() => {
      if (!prevIsLoading && isLoading) {
        setIsInnerLoading(isLoading);
      }
    }, [isLoading, prevIsLoading]);

    const content = (
      <Fragment>
        <CSSTransition
          in={isLoading}
          timeout={{
            exit: 500
          }}
          onExited={() => {
            setIsInnerLoading(false);
          }}
          unmountOnExit
        >
          {typeof element === 'function' ? element(extraProps) : element}
        </CSSTransition>
        {!isInnerLoading && children}
      </Fragment>
    );

    /**
     * 这个情况当做一个容器来用
     */
    if (typeof className !== 'undefined' || typeof style !== 'undefined') {
      return (
        <div className={className} style={style}>
          {content}
        </div>
      );
    }

    return <Fragment>{content}</Fragment>;
  };
  return SkeletonWithLoading;
};

export default withLoading;
