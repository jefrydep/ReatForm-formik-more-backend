import { Formik } from 'formik';
import { useContext } from 'react'
import { UserContext } from './UserContext';
const LogingPage = () => {
  // const {hola,user} = useContext(UserContext);
  // console.log(hola,user);
  // const {id,name,email,}=user;


  return (
    <>
      <h1>Login User</h1>

      <hr />
      <Formik
      validate={({userName,password})=>{
        let  errores=

        if(userName){

        }
        
      }}
        initialValues={
          {
            userName: '',
            password: ''
          }
        }
        onSubmit={({userName,password}) => {
          console.log( {userName,password})
        }}
      >
        {({ handleChange,values, handleSubmit,handleBlur }) => (
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              value={values.userName }
              name='userName'
              placeholder='userName'
              onChange={handleChange}
              onBlur={handleBlur}
              />
            <br>
            </br>
            <input
              type="text"
              value={values.password}
              name='password'
              placeholder='password'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type='submit' onClick={handleSubmit}>
              enviar
            </button>
          </form>
        )}
      </Formik>

    </>

  )
}

export default LogingPage