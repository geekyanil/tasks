import React, { useState } from 'react';
import { FaBars, FaUserAlt } from 'react-icons/fa';
import { AiFillHome, AiFillContacts } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navigation = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <AiFillHome />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: <AiFillContacts />,
    },
  ];
  return (
    <div className="container-fluid">
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className="link_text"
              onClick={toggle}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Navigation;
