import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data"


// const getData = async ({ slug }) => {
//     const url = `https://jsonplaceholder.typicode.com/posts/${slug}`;
//     console.log("Fetching data from:", url);

//     const res = await fetch(url);

//     if (!res.ok) {
//         console.error("Error response:", res);
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// };



const SinglePostPage = async ({ params }) => {
    // console.log('params ', params)

    const { slug } = params

    // const post = await getData({ slug })
    const post = await getPost(slug)
    console.log(post)
    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imgContainer}>
                <Image
                    src={post.img}
                    className={styles.img}
                    fill
                />
            </div>}

            <div className={styles.textContainer}>
                <div className={styles.title}>{post?.title}</div>
                <div className={styles.detail}>


                    {post && <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    }

                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>publish</div>
                        <div className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</div>
                    </div>
                </div>
                <div className={styles.content}>{post.desc}</div>
            </div>
        </div>
    )
}

export default SinglePostPage