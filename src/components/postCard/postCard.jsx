import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        // <div className={styles.container}>
        //     <div className={styles.top}>
        //         {post.img && <div className={styles.imgContainer}>
        //             <Image src={post.img} alt="" fill className={styles.img} />
        //         </div>}
        //         <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
        //     </div>
        //     <div className={styles.bottom}>
        //         <h1 className={styles.title}>{post.title}</h1>
        //         <p className={styles.desc}>{post.body}</p>
        //         <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
        //     </div>
        // </div>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/19137460/pexels-photo-19137460/free-photo-of-turquoise-sea-off-the-coast-of-bali.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill className={styles.img} />
                </div>
                <span className={styles.date}>12345</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>title</h1>
                <p className={styles.dec}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quibusdam nemo consectetur quidem exercitationem ipsam illo eveniet. Sed a eos sapiente excepturi ullam aperiam alias. Ut vel doloribus repellat placeat!</p>
                <Link href="/blog/post" className={styles.link}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard