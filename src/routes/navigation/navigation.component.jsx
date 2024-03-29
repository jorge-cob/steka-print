import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as BrandLogo } from '../../assets/brand.svg';

import './navigation.styles.scss';
const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <BrandLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>Shop</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Navigation;