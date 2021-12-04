export default function Color({value, activeValue, setActiveValue}) {
    return(
        <div onClick={()=> setActiveValue(value)} 
            className={`c-pointer circle bg-${value} ${activeValue === value ? 'ring' : null} row-center align-items-center me-2`}>
        </div>
    )
}