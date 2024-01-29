import React, { ReactNode } from "react";



const page = async ({params}:{
    params: {productId: number}
}) => {

    const Id = params.productId

    const getPostData = async () =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }

          const data = await res.json()

          return data
    }


    const data: ProductTypes = await getPostData()
     


    return (
        <div className="min-h-screen">
            <h1>Product With ID: {params.productId} </h1>

            <div className="my-4">
                <h1 className="text-2xl font-bold">{data?.title}</h1>
                <p>{data?.body}</p>
            </div>
        </div>
    );
};

export default page;