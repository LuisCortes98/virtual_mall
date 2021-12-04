const materials = [
    {
        value: "Polyester",
        label: "Poliéster"
    },
    {
        value: "cotton",
        label: "Algodón"
    },
    {
        value: "embroidery",
        label: "Bordado"
    },
    {
        value: "textile_vinyl",
        label: "Vinilo textíl"
    }
]

export default function Material({value, activeValue, setActiveValue}) {

    return(
        <div onClick={()=> setActiveValue(value)} className={`c-pointer px-3 py-1 material-container ${activeValue === value ? 'bg-black txt-white' : 'txt-black'} row-center align-items-center me-2`}>
            <div className="c-pointer txt-bold txt-8 text-center">{materials.find(x => x.value == value).label}</div>
        </div>
    )
}