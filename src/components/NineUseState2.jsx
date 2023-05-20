// import useState
import { useState } from 'react'

export default function NineUseState(){
    const [title, setTitle] = useState('Belajar React JS');

    const handleClick = () => {
        console.log('Button di klik');
        console.log(title);
        // use ternary operator for toggle
        title === 'Belajar React JS' ? setTitle('React JS itu mudah') : setTitle('Belajar React JS');
        // setTitle('React JS itu mudah');
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}