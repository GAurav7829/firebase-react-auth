import React, { useState } from 'react';
import firebaseObj from './firebase';
import Swal from 'sweetalert2';

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const fireAuthObj = firebaseObj.auth();
    const register = () => {
        fireAuthObj.createUserWithEmailAndPassword(email, password)
            .then(response => {
                Swal.fire('Congrats', 'User Registered Successfully', 'success');
                setError('');
            }).catch(error => {
                Swal.fire('Error', 'User Registration Failed', 'error');
                setError(error.message);
            });
    }
    const login = () => {
        fireAuthObj.signInWithEmailAndPassword(email, password)
            .then(response => {
                Swal.fire('Congrats', 'User LogIn Successfully', 'success');
                setError('');
            }).catch(error => {
                Swal.fire('Error', 'User LogIn Failed', 'error');
                setError(error.message);
            });

    }
    return (<>
        <div className='row justify-content-center '>
            <div className='col-md-4 shadow p-3 mb-5 bg-white rounded'>
                {error}
                <hr />
                <h2>Firebase Authentication</h2>
                <input type='text' placeholder='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type='button' value='REGISTER' className='btn btn-primary' onClick={register} />
                <input type='button' value='LOGIN' className='btn btn-success' onClick={login} />
            </div>
        </div>
    </>);
}

export default Authentication;