import type { DirectionType, SkeletonType } from '@/shared/config/news';
import NewsSkeleton from '@/shared/ui/NewsSkeleton/NewsSkeleton';

interface Props {
  isLoading: boolean;
}

const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType,
) => {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <NewsSkeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
};

export default withSkeleton;
