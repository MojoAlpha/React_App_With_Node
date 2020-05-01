import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import {Link, Redirect} from 'react-router-dom';
import { updateCategory, getCategory } from './helper/adminapicall';

const UpdateCategory = ({match}) => {

    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    const {user, token} = isAuthenticated();

    const preload = (categoryId) => {
        getCategory(categoryId).then(data => {
            if(data.error){
                console.log('Error in Loading!!')
            }else{
                setName(data.name);
            }
        })
    }

    useEffect(() => {
        preload(match.params.categoryId)
    }, [])

    const goBack = () => (
        <div className='mt-5'>
          <Link className='btn btn-sm btn-success mb-3' to='/admin/categories'>
            Categories
          </Link>
        </div>
    )

    const handleChange = event => {
        setError('')
        setName(event.target.value)
    }
//TODO:
    const Onsubmit = (event) => {
        event.preventDefault();
        setError('')
        setSuccess(<i class="fas fa-truck-monster"></i>)
        setLoadingVal();

        updateCategory(match.params.categoryId, user._id, token, name)
        .then(data => {
            if(data.error) {
                console.log('Cannot Update!!')
                setError(true)
            }else{
                setError('')
                setSuccess(true)
                setName('')
            }
        })

    }

    const setLoadingVal = () => {
        setTimeout(() => {
            setLoading(true);
        },1000)
    }

    const performRedirect = () => {
        if(loading)
        return <Redirect to='/admin/dashboard' />;
    }

    const successMessage = () =>{
        if(success){
            return (
                <div>
                <h4 className='text-success'>Updated Successfully!!</h4>
                </div>
            )
        }     
    }

    const warningMessage = () => {
        if(error){
            return <h4 className='text-danger'>Failed To Update!!</h4>
        }
    }

    const myCategoryForm = () => (
        <form>
          <div className='form-group'>
            <p className='lead'>Update The Category :</p>
            <input type='text' className='form-control my-3' onChange={handleChange} value={name} autoFocus required placeholder='For Ex. Summer' />
            <button onClick={Onsubmit} className='btn btn-outline-info'>Update Category</button>
            </div>
        </form>
    )


    return (
        <Base title='Update Category'  description='Update an Existing Category from here!!'
        className='container bg-info p-4'>
          <div className='row bg-white rounded'>
            <div className='col-md-8 offset-md-2'>
            {successMessage()}
            {warningMessage()}
            {myCategoryForm()} 
            {goBack()}
            {performRedirect()}
            </div>
          </div>
        </Base>
    )
}

export default UpdateCategory;