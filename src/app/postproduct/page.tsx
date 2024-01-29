const page = async () => {

    const formData = async(formData: FormData)=>{

        'use server'

        const rawFormData = {
            id: 102,
            userId: 26031996,
            title: formData.get('title'),
            body: formData.get('body')
        }

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            cache: 'no-cache',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(rawFormData)
        })

        const data: ProductTypes = await res.json();

        console.log(data);
        
        
        


    }



    return (
        <div className="grid  bg-emerald-500 min-h-screen justify-center items-center">

            <form className="grid justify-center items-center" action={formData}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" />

                <label htmlFor="title">Body</label>
                <input type="text" name="body" />

                <input className="bg-violet-600 mt-4  py-2 rounded-lg text-white font-bold text-center" type="submit" value={'submit'} />
            </form>
            
        </div>
    );
};

export default page;