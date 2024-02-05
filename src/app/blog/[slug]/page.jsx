import Image from "next/image"
import styles from "./singlePost.module.css"


const getData = async ({ slug }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${slug}`;
    console.log("Fetching data from:", url);

    const res = await fetch(url);

    if (!res.ok) {
        console.error("Error response:", res);
        throw new Error("Something went wrong");
    }

    return res.json();
};



const SinglePostPage = async ({ params }) => {
    // console.log('params ', params)

    const { slug } = params

    const post = await getData({ slug })
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-turquoise-sea-off-the-coast-of-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className={styles.img}
                    fill
                />
            </div>

            <div className={styles.textContainer}>
                <div className={styles.title}>{post.body}</div>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-turquoise-sea-off-the-coast-of-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width={50}
                        height={50}
                    />
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>author</div>
                        <div className={styles.detailValue}>jeffrey</div>
                    </div>
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>publish</div>
                        <div className={styles.detailValue}>12345</div>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage