const fetchPost = async()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject()
        }, 2000);
    })
    return "here are my posts"
}

const Posts = async() => {
    const posts= await fetchPost()
    return (
        <div>
           {posts}
        </div>
    );
};

export default Posts;