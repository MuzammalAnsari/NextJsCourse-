import Image from "next/image"
import styles from "./singlePost.module.css"

function SinglePostPage() {
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
                <h1 className={styles.title}>Title</h1>
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
                <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deleniti fuga aliquam vel laudantium. Reprehenderit laborum, unde reiciendis quia quo neque quos voluptatibus, nihil impedit veritatis sunt quaerat ab odio!</div>
            </div>
        </div>
    )
}

export default SinglePostPage