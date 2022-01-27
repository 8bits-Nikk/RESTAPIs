import {api} from "./APIs";

export const getUsers = new Promise ((resolve, reject) => {
    let userData = []
    try {
        api.get(`/users`).then(value => {
            let data_len = value.data.data.length
            for (let i =0 ; i< data_len ; i++){
                userData.push(value.data.data[i])
            }
        })
        resolve(userData)
    }catch (e) {
        reject ("Sever are Busy")
    }
})

export const getUsersPost = async (id) => {
    let userPosts = []
    try {
        api.get(`/users/${id}/posts`).then(value => {
            let data_len = value.data.data.length
            for (let i=0 ; i< data_len ; i++){
                userPosts.push(value.data.data[i])
            }
        })
        return userPosts
    }catch (e) {
        return "Server Error"
    }
}

export const getPostComments = async (id) => {
    let postComments = []
    try {
        api.get(`/posts/${id}/comments`).then(value => {
            let data_len = value.data.data.length
            for (let i=0; i<data_len; i++){
                postComments.push(value.data.data[i])
            }
        })
        return postComments
    }catch (e) {
        return "Server Error"
    }
}

export const addPostComment = async (post_id, name, email, body) => {
    try {
        api.post(`/posts/${post_id}/comments`, {
            "name" : name,
            "email" : email,
            "body" : body,
        }).then(res => {
            return res
        })
    }catch (e) {
        return "Server Error"
    }
}
