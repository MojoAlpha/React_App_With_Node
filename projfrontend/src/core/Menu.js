import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/helper';

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {background: '#333', color: '#fff','borderRadius':'1em'}
    }
    else{
        return {color: '##333'}
    }
};

const Menu = ({history}) => {
  require('./style-home.css')

  return (
    <div className="topnav">
    {isAuthenticated() &&  isAuthenticated().user.role ===0 && (
    <Link href='/signout' on onClick={() => {
      signout(() => {
        history.push('/');
      })
    }}><div className="tooltip"><i class="fa fa-user navIcon1"></i>
    <span className="tooltiptext">Sign Out!!</span>
  </div></Link>
    )}
    {!isAuthenticated() && (
      <Link style={currentTab(history,'/signin')} to='/signin'><i class="fa fa-user navIcon1"></i></Link>
    )}
    {isAuthenticated() && (
      <Link style={currentTab(history,'/cart')} to='/cart'><i class="fa fa-shopping-cart navIcon1" style={{'padding': '0.15em 0.2em 0.15em 0.2em'}}></i></Link>
    )}
    {isAuthenticated() && (
    <a href="/search"><i class="fa fa-search navIcon1" style={{'paddingLeft': '0.17em', 'paddingRight': '0.17em'}}></i></a>
    )}
    <div><img src='https://raw.githubusercontent.com/MojoAlpha/React_App_With_Node/446987865b92b94dbdb71e34fb308c266ed261e8/projfrontend/src/user/logo3.svg' className='logo'></img></div>
</div>
  )
}

export default withRouter(Menu);