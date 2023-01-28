import { Formik,Form,Field,ErrorMessage} from 'formik';
import { useState } from 'react';
import { useContext } from 'react'
import { UserContext } from './UserContext';
const LogingPage = () => {
const [formularionEnviado, setFormularionEnviado] = useState(false)

  // const {hola,user} = useContext(UserContext);
  // console.log(hola,user);
  // const {id,name,email,}=user;


  return (
    <>
      <h1>Login User</h1>

      <hr />
      <Formik
      validate={({userName,password})=>{
        let  errores= {};
          //validacion del nombre
        if(!userName){
          errores.userName= 'por favor ingrese un nombre'

        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userName)){
          errores.userName = 'El nombre solo puede contener letras y espacios'
        }

        //validar password

        if(!password){
          errores.password= 'por favor ingrese un passwrod valido'

        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(userName)){
          errores.password = 'la contraseña es invalida'
        }



        return errores;
        
      }}
        initialValues={
          {
            userName: '',
            password: ''
          }
        }
        onSubmit={({userName,password},{resetForm}) => {
          resetForm()
          console.log( {userName,password});
          setFormularionEnviado(true)
          setTimeout(() => {
            setFormularionEnviado(false)
          }, 4000);
          
        }}
      >
        {/* {({ handleChange,values, handleSubmit,handleBlur,errors,touched }) => ( */}
        {({ errors }) => (
          // <form onSubmit={handleSubmit} >
          <Form>
            <Field
              type="text"
              name='userName'
              placeholder='userName'
              // value={values.userName }
              // onChange={handleChange}
              // onBlur={handleBlur}
              />
              <ErrorMessage name='userName' component={()=>(
                  <div className='error'>{errors.userName}</div>
            )}/>
              {/* {
                touched.userName && errors.userName && <div className='error'>{errors.userName}</div>
              } */}
            <br>
            </br>
            <Field
              type="text"
              name='password'
              placeholder='password'
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
            <ErrorMessage name='password' component={()=>(
                  <div className='error'>{errors.password}</div>
            )}/>
            {/* {touched.password && errors.password && <div className='error'>{errors.password}</div> } */}
            <button type='submit' >
              enviar
              

            </button>
            {
             formularionEnviado && <p>Formulario enviado con exitoi</p>
            }
          </Form>   
        )}
      </Formik>

    </>

  )
}

export default LogingPage