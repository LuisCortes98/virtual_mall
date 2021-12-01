import Link from "next/link";

export default function Brand({image, name, number_contact, id}) {

    return (
        <Link href={{ pathname: '/catalog', query: { name: name, number_contact: number_contact }}} as='catalog'>
            <div id={`brand-${id}`} 
                className="bg-white p-3 c-pointer shadow border-rounded row-start align-content-center m-3">
                <img src={image} height={250} width={250} className="img-brand border-rounded" alt="section-image"/>
            </div>
        </Link>
    );
}