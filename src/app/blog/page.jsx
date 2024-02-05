
import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"

function BlogPage(params) {
    console.log('params ', params)
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
        </div>
    )
}

export default BlogPage