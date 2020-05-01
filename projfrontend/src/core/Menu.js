import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/helper';
import {ReactComponent as ReactLogo} from '../user/logo3.svg';

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {background: '#333', color: '#fff'}
    }
    else{
        return {color: '##333'}
    }
};

const Menu = ({history}) => {

  return (
    <div>
    <div className="topnav">
    <Link style={currentTab(history,'/signin')} to='/signin'><i class="fa fa-user navIcon1"></i></Link>
    <Link style={currentTab(history,'/cart')} to='/cart'><i class="fa fa-shopping-cart navIcon1" style={{'padding': '0.15em 0.2em 0.15em 0.2em'}}></i></Link>
    <a href="/search"><i class="fa fa-search navIcon1" style={{'paddingLeft': '0.17em', 'paddingRight': '0.17em'}}></i></a>
    <div><ReactLogo class="logo" /></div>
</div>
    </div>
  )
}

export default withRouter(Menu);