import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [number, setNumber] = useState([])
    const [operation, setOperation] = useState('')
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const operations = ['+', '-', '*', '/',]
   
    
   
    const handleNumber = (numero ) => {
         
        setNumber([ ...number, numero])
        console.log(number)
         
    }
    const handleOperation = (operation)=>{
        setNumber([...number,operation])
        setOperation(operation)
        
        
    }
    const reset = ()=>{
        setNumber(['0'])
    }
    const result = () => {
        if(operation === '+'){
            const result = number + number;
            setNumber(result)

        }
       setNumber([result])
        console.log(result) 
       

    }
    return (
        < >
            <h1>calculadora with React</h1>
            <div className='container'>

                <div className='answer'>
                    {number}
                </div>
                <div className='button_container'>
                    {
                        numbers.map((n) => (
                            <div onClick={() => handleNumber(n)} key={n} className='numberContainer'>{n}</div>

                        ))
                    }

                    <div className='operation'>
                        {
                            operations.map((op) => (

                                <div key={op} onClick={()=>handleOperation(op)} className='numberContainer'>{op}</div>
                            ))
                        }


                    </div>
                    <div  onClick={result}className='numberContainer'>
                        =
                    </div>
                    <div  onClick={reset}className='numberContainer'>
                        Reset
                    </div>

                </div>

            </div>

            Calculator

        </ >
    )
}

export default Calculator