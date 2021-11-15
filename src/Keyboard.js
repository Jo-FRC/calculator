import React, { useState } from 'react'

export default function Keyboard() {
    const [value, setValue] = useState('');
    const [firstEntry, setFirstEntry] = useState();
    const [operation, setOperation] = useState();

    const operationalValues = ['-', '+', '/', '*'];

    const handleClick = (e) => {
        const input = e.target.id;
        if (operationalValues.some(val => val === input) || input === '=') {
            if (value === 0) {
                return
            } else if ( operationalValues.some(val => val === input)) {
                setOperation(input);
                setFirstEntry(Number(value));
                setValue('');
                } else if (input === '='){
                    console.log(value);
                    console.log(operation);
                    let secondEntry = Number(value)
                    let result = (eval(`${firstEntry} ${operation} ${secondEntry}`));
                    setValue(result)
                   
            }
            
        } else {
            setValue( value + input);
        }
        
    }

    return (
        <div className='machine'>
            <div className='screen'>
                <p>{value}</p>
            </div>
            <div className='keyboard'>
                <div className='key' id='7' onClick={handleClick}>7</div>
                <div className='key' id='8' onClick={handleClick}>8</div>
                <div className='key' id='9' onClick={handleClick}>9</div>
                <div className='key' id='/' onClick={handleClick}>/</div>
                <div className='key' id='4' onClick={handleClick}>4</div>
                <div className='key' id='5' onClick={handleClick}>5</div>
                <div className='key' id='6' onClick={handleClick}>6</div>
                <div className='key' id='*' onClick={handleClick}>x</div>
                <div className='key' id='1' onClick={handleClick}>1</div>
                <div className='key' id='2' onClick={handleClick}>2</div>
                <div className='key' id='3' onClick={handleClick}>3</div>
                <div className='key' id='-' onClick={handleClick}>-</div>
                <div className='key' id='0' onClick={handleClick}>0</div>
                <div className='key' id='.' onClick={handleClick}>.</div>
                <div className='key' id='+' onClick={handleClick}>+</div>
                <div className='key' id='=' onClick={handleClick}>=</div>
            </div>
      </div>
       
    )
}
