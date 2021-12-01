export default function Chat({number, name}) {

    return (
        <div id="chat-bubble" className="position-fixed m-3 zindex-1">
            <a className="row-center align-items-center bg-black p-3 w-100 h-100 rounded-circle" href={`https://wa.me/+57${number}?text=Hola%20${name}%2C%20quiero%20saber%20más%20de%20sus%20productos…`}>
                <i className="fab fa-whatsapp text-white txt-20"></i>
            </a>
        </div>
    );
}