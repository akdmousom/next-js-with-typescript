import ProductCard from "@/components/ProductsCard/ProductCard";

const page = async () => {

    const getAllProduct = async () => {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {

            throw new Error('Something went wrong!!!')
            
        }

        const data = res.json();

        return data;

    }

    const data: [] = await getAllProduct();

   
    

    return (
        <div className="min-h-screen">
            <h1 className="text-center text-3xl font-bold ">Product Page</h1>
            <div className="grid grid-cols-4 max-w-[1200px] mx-auto">

                {
                    data.map((item: {id: number, body: string, userId: number, title: string})=> <ProductCard key={item.id} userId={item.userId} id={item.id} title={item.title} body={item.body}/>)
                }

            </div>
        </div>
    );
};

export default page;