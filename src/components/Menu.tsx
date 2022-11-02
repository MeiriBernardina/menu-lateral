import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../models/SidebarItem';

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 0.1rem;
  font-size: 1rem;
  padding: 2rem;
  text-decoration: none;

  &:hover {
    background-color: #197aa6;
    border-radius: 4%;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const Menu: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </SidebarLink>
    </>
  );
};

export default Menu;
