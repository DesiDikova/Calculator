import './App.css';
import { useState } from 'react';


function App() {

    const [calc, setCalc] = useState('');

    const operations = ['/', '*', '+', '-', '.'];

    const updateCalc = (value) => {
        if (operations.includes(value) && calc == '' ||
            operations.includes(value) && operations.includes(calc.slice(-1)
            )
        ) {
            return;
        }
            setCalc(calc + value);
    }

    const createDigits = () => {
        const digits = [];
        for (let d = 1; d < 10; d++) {
            digits.push(
                <button onClick={() => updateCalc(d.toString())}key={d}>{d}</button>
            );
        };
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteDigit = () => {
        if (calc == '') {
            return;
        }
        const value = calc.slice(0, -1);

        setCalc(value);
    }

    return (
        <div className="App">
            <h1 className="title">CALCULATOR</h1>
            <div className="calculator">
                <div className="display">
                    {calc || '0'}
                </div>

                <div className="operators">
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('/')}>/</button>

                    <button onClick={deleteDigit}>Del</button>
                </div>

                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>

                    <button onClick={calculate}>Enter</button>
                </div>
            </div>
        </div>
    );
}

export default App;
