import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 90px;
  padding-right: 90px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);

  .header__logo {
    font-size: 32px;
    font-weight: bold;
    color: #000;
  }

  .btn-signout {
    font-size: 14px;
    letter-spacing: 0.9px;
    color: #000;
    width: 131px;
    height: 50px;
    border-radius: 8px;
    border: 0;
    background-color: #f6f6f6;
  }
`;
const Header = () => (
  <HeaderStyle>
    <div className="header__logo">Lawyr</div>
    <div>
      <button className="btn-signout">Sign out</button>
    </div>
  </HeaderStyle>
);

export default Header;
