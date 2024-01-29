import Link from "next/link";

const ProductCard = (props:{id: number, body: string, userId: number, title: string}) => {

    const Id = props.id
  
    
   
    return (
        <div className="my-4 mx-4">
            <h1>{props.title}</h1>
            <p>{props.body}</p>

            <Link href={`/product/${props.id}`}><button className="bg-red-400 py-2 px-4 rounded-lg mt-4 ">Click</button></Link>
        </div>
    );
};

export default ProductCard;