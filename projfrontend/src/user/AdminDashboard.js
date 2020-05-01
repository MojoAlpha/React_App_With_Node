import React from 'react';
import Base from '../core/Base';
import {isAuthenticated} from '../auth/helper/index'; 
import {Link} from 'react-router-dom';

const AdminDashboard = () => {

  const {user : {name, email, role} } = isAuthenticated()  //destructuring the users

  const adminLeft = () => {
    return(
      <div className='card'>
        <h4 className='card-header bg-dark text-white'>Admin Navigation</h4>
        <ul className='list-group'>
          <li className='list-group-item py-1'>
            <Link to='/admin/create/category' className='nav-link text-success'>
            Create Categories
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/categories' className='nav-link text-success'>
            Manage Categories
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/create/product' className='nav-link text-success'>
            Create Products
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/products' className='nav-link text-success'>
            Manage Products
            </Link>
          </li>
          <li className='list-group-item'>
            <Link to='/admin/orders' className='nav-link text-success'>
            Manage Orders
            </Link>
          </li>
        </ul>
        </div>
    )
  }

  const adminRight = () => {
    return (
      <div className='card mb-4'> 
        <h4 className='card-header'> Admin Info</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2'>Name:</span>{name}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-success mr-2'>Email:</span>{email}
          </li>
          <li className='list-group-item'>
            <span className='badge badge-danger'>Admin Area</span>
          </li>
        </ul>
      </div>
    )
  }


    return (
        <Base title='Welcome To Admin Area' 
        description='Manage all of your products here!!'
        className='container bg-success p-3'>
          <div className='row'>
            <div className='col-3'>{adminLeft()}</div>
            <div className='col-9'>{adminRight()}</div>
          </div>
        </Base>
    )
}

export default AdminDashboard;