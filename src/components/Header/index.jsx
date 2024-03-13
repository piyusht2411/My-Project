import { useState } from 'react';
import logo from '../../assets/svg/logo_Imperium.svg';
import styles from './index.module.scss';
import Button from '../Button';
import { FaUserCircle } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(NavLink);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <nav>
            <ul className={styles.ul}>
              <li>
                {' '}
                <NavLink
                  className={styles.linkStyle}
                  style={({ isActive }) => {
                    return isActive ? { color: '#00d7fb' } : {};
                  }}
                  to="/">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.linkStyle}
                  style={({ isActive }) => {
                    return isActive ? { color: '#00d7fb' } : {};
                  }}
                  to="/indices">
                  INDICES <RiArrowDropDownLine size={25} />
                </NavLink>
              </li>
              <li>
                LEX <RiArrowDropDownLine size={25} />
              </li>
              <li>
                <NavLink
                  className={styles.linkStyle}
                  style={({ isActive }) => {
                    return isActive ? { color: '#00d7fb' } : {};
                  }}
                  to="/simulator">
                  MVP SIMULATOR
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.linkStyle}
                  style={({ isActive }) => {
                    return isActive ? { color: '#00d7fb' } : {};
                  }}
                  to="/how-it-works">
                  HOW IT WORKS{' '}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.linkStyle}
                  style={({ isActive }) => {
                    return isActive ? { color: '#00d7fb' } : {};
                  }}
                  to="/blog-and-social">
                  BLOG & SOCIAL
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className={styles.btn}>
            <Button icon={<FaUserCircle size={20} />} label="ACCOUNT" />
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {showMenu && (
          <div className={styles.menu}>
            <div className={styles.navMenu}>
              <ul className={styles.ulMenu}>
                <li
                  style={{
                    backgroundColor: '#000A19',
                    color: '#00D7FB',
                    gap: '1rem',
                    border: 'none',
                    fontSize: '0.75rem'
                  }}>
                  CLOSE MENU <AiOutlineClose size={40} onClick={toggleMenu} />
                </li>
                <div className={styles.menuContent}>
                  <li>
                    {' '}
                    <NavLink
                      className={styles.linkStyle}
                      style={({ isActive }) => {
                        return isActive ? { color: '#00d7fb' } : {};
                      }}
                      onClick={toggleMenu}
                      to="/">
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.linkStyle}
                      onClick={toggleMenu}
                      style={({ isActive }) => {
                        return isActive ? { color: '#00d7fb' } : {};
                      }}
                      to="/indices">
                      INDICES <RiArrowDropDownLine size={25} />
                    </NavLink>
                  </li>
                  <li>
                    LEX <RiArrowDropDownLine size={25} />
                  </li>
                  <li>
                    <NavLink
                      className={styles.linkStyle}
                      style={({ isActive }) => {
                        return isActive ? { color: '#00d7fb' } : {};
                      }}
                      onClick={toggleMenu}
                      to="/simulator">
                      MVP SIMULATOR
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => {
                        return isActive ? { color: '#00d7fb' } : {};
                      }}
                      onClick={toggleMenu}
                      to="/how-it-works">
                      HOW IT WORKS{' '}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={styles.linkStyle}
                      style={({ isActive }) => {
                        return isActive ? { color: '#00d7fb' } : {};
                      }}
                      onClick={toggleMenu}
                      to="/blog-and-social">
                      BLOG & SOCIAL
                    </NavLink>
                  </li>
                  <li>LOGIN</li>
                  <li>
                    <Button label="Register" />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
