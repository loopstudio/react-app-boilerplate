import {
  Wrapper,
  Spinner,
  DoubleBounce,
  DoubleBounceWithDelay,
} from './Loading.styles';

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => (
  <Wrapper className={className}>
    <Spinner>
      <DoubleBounce />
      <DoubleBounceWithDelay />
    </Spinner>
  </Wrapper>
);

export default Loading;
