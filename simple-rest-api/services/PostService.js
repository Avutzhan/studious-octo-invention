import Post from "../models/Post.js";
import FileService from "../services/FileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})
        return createdPost;
    }

    async getAll(r) {
        const posts = await Post.find();
        return posts
    }

    async getOne(id) {
        if (!id) {
            throw new Error('no id received')
        }
        const post = await Post.findById(id);
        return post
    }

    async update(post) {
        if (!post._id) {
            throw new Error('no id received')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            throw new Error('no id received')
        }
        const post = await Post.findByIdAndDelete(id);
        return post
    }
}

export default new PostService();