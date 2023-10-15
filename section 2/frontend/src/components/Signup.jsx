// import React from 'react'

// const Signup = () => {
//   return (
//     <div className='page2'>

//       <div className='mycard2'>

//         <h3 className='form-title2'>Glad to see you</h3>

//         <form>

//           <label>Name</label>
//           <input className='myinput2' type="Name" />

//           <label>Email</label>
//           <input className='myinput2' type="email" />

//           <label>Password</label>
//           <input className='myinput2' type="password" />

//           <button className='mybtn2'>Create Account</button>
//         </form>

//       </div>

//     </div>
//   )
// }

// export default Signup




import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  name : Yup.string().required('Name is required').min(3, 'Too Short'),
  password: Yup.string().required('Password is required').min(6, 'Too Short')
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
  )
});

const Signup = () => {

  // initialize formik
  const signupForm = useFormik({
    initialValues:{
      name : '',
      email: '',
      password: ''
    },

    onSubmit: (values) => { console.log(values) },

    validationSchema: SignupSchema
  
  })

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='col-md-4 mx-auto py-5'>
          <div className="card">
            <div className="card-body">
              <h2 className='text-center my-5'>SIGNUP FORM</h2>
              <form onSubmit={signupForm.handleSubmit} >
                <label>Full Name</label>
                <span className='error-label'>{ signupForm.touched.name && signupForm.errors.name}</span>
                <input type="text" className="form-control mb-3" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} />
                <label>Email</label>
                <input type="text" className="form-control mb-3" id="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
                <label>Password</label>
                <span className='error-label'>{ signupForm.touched.password && signupForm.errors.password}</span>
                <input type="text" className="form-control mb-3" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} />

                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup;
