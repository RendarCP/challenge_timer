import tw from 'twin.macro';
import Button from './core/Buttons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div>logo</div>
      <RightWrapper>
        <NavItem>home</NavItem>
        <NavItem>타이머</NavItem>
        <NavItem>커뮤니티</NavItem>
        <NavItem>내 정보</NavItem>
        <div>
          <Button onClick={() => navigate('/auth/login')}>로그인</Button>
        </div>
      </RightWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = tw.header`
  flex
  justify-between
  items-center
  p-3
`;

const RightWrapper = tw.nav`
  flex
  items-center
  gap-2
`;

const NavItem = tw.div`
  // flex-1
`;
