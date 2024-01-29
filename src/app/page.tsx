import PostCard from "@/components/Home/PostCard/PostCard";

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {

  const data: PostDataType [] = await getData();


  return (
   <div className="min-h-screen">
    <h1 className="text-center">Next JS 14 With TypeScript</h1>

    <div className="my-4">
    <h1 className="font-bold text-2xl underline">Post Section Start Here:</h1>
    <div className="grid grid-cols-4 max-w-[1200px] mx-auto">

    {
      data.map((post: PostDataType) => <PostCard key={post.id} title={post.title} id={post.id} userId={post.userId} body={post.body}/>)
    }

    </div>
    </div>
   </div>
  );
}
