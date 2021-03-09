import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/shop'>
          Contact
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //console.log(state);
  return { currentUser: state.user.currentUser }; //user ka combine reducer ka user
};
export default connect(mapStateToProps)(Header);
