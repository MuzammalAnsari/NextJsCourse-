"use server"

import { connectToDb } from "./utlis"
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {

    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");

    const { title, desc, slug, userId } = Object.fromEntries(formData)
    // console.log(title, desc, slug, userId);

    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save();
        console.log("post added successfully")
        revalidatePath("/blog")
    }
    catch (err) {
        console.log(err)
        return { error: "Database connection error" }
    }
}



export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log("post deleted successfully")
        revalidatePath("/blog")
    }
    catch (err) {
        console.log(err)
        return { error: "Database connection error" }
    }
}