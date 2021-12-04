export default function Size({value, activeValue, setActiveValue}) {
    return(
        <div onClick={()=> setActiveValue(value)} className={`c-pointer circle ${activeValue === value ? 'diagonalCross' : null} row-center align-items-center me-2`}>
            <div className="c-pointer txt-regular txt-8 text-center txt-dark-blue">{value}</div>
        </div>
    )
}