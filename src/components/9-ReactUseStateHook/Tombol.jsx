import PropType from 'prop-types';


export default function Tombol(props) {
 
    const handleCLick = () => {
       props.btnType === "inc" ? props.onButtonClick(+1) : props.onButtonClick(-1);
    }

    return (
        <button className='px-4 border-2 border-red-300' onClick={handleCLick}>{props.children}</button> 
    )
}

Tombol.propTypes = {
    children: PropType.string.isRequired,
    btnType: PropType.string.isRequired,
    onButtonClick: PropType.func.isRequired
}

