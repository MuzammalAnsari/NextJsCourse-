
import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"


// FETCH DATA WITH AN API
// const getData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" }); //cache is used to not cache data if data is constantly changing
//     // const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });  //revalidate is going to refresh data in every on hour

//     if (!res.ok) {
//         console.error("Error response:", res);
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// };

// FETCH DATA WITH AN API
const getData = async (slug) => {
    const res = `http://localhost:3000/api/blog/${slug}`;
    const url = await fetch(res);

    if (!url.ok) {
        throw new Error("Something went wrong");
    }

    return url.json();
};



const BlogPage = async () => {
    // console.log('params ', params)
    const posts = await getData()

    // const posts = await getPosts()
    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}

        </div>
    )
}

export default BlogPage