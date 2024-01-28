const PostCard = (props:{title: string, body: string, id:number, userId: number}) => {
    return (
        <div className="max-w-[300px] my-4">
            <h1 className="font-bold">{props.title}</h1>
            <p>{props.body}</p>
            
        </div>
    );
};

export default PostCard;