import styled from '@emotion/styled';

interface Spacer {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

const Spacer = ({ top, left, right, bottom }: Spacer) => {
  return <SpacerBox top={top} left={left} right={right} bottom={bottom} />;
};

export default Spacer;

const SpacerBox = styled.div<Spacer>`
  margin-top: ${props => (props.top ? props.top : 0)}px;
  margin-bottom: ${props => (props.bottom ? props.bottom : 0)}px;
  margin-left: ${props => (props.left ? props.left : 0)}px;
  margin-right: ${props => (props.right ? props.right : 0)}px;
`;
