export const getUserData = (data) => {
    return {
        type : "GET_USER_DATA",
        payload : data
    }
}

export const postComment = (data) => {
    return {
        type : "POST_COMMENT",
        payload : data
    }
}