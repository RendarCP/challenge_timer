import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import Button from './core/Buttons';
import Spacer from './core/Spacer';
import { Text } from './core/Text';
import Logo from '../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <LogoBox onClick={() => navigate('/')}>
        <LogoImage src={Logo} />
        <Spacer right={10} />
        <Text>Challenge Timer</Text>
      </LogoBox>
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

const LogoBox = tw.div`
  flex
  items-center
  cursor-pointer
`;

const LogoImage = tw.img`
  h-12
`;

const RightWrapper = tw.nav`
  flex
  items-center
  gap-2
`;

const NavItem = tw.div`
  // flex-1
`;
