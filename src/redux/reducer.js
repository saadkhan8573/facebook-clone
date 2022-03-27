import { GrAdd } from "react-icons/gr";

const initialState = {
    userPosts: [
        {
            id: 1,
            text: "Best fireworks show I,ve ever seen!",
            comments: [
                {
                    name: "Saad Mushtaq",
                    comment: "Nice"
                },
                {
                    name: "Zia-ur-rehman",
                    comment: "Good"
                }
            ]
        },
        {
            id: 2,
            text: "This has some great healthy recipies",
            comments: [
                {
                    name: "Saad Mushtaq",
                    comment: "Nice"
                },
                {
                    name: "Zia-ur-rehman",
                    comment: "Good"
                },
                {
                    name: "Hussain",
                    comment: "awsome"
                }
            ]
        },
    ]
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_DATA": return {
            ...state,
            userPosts: [
                action.payload,
                ...state.userPosts,
            ]
        }
        // case "POST_COMMENT":
        //     const newComment = state.userPosts.map(val => val.id === action.payload.id ? action.payload : val)
        //     return {
        //         ...state,
        //         userPosts: [
        //             ...state.userPosts,
        //             {
        //                 comments: [
        //                     newComment
        //                 ]
        //             }
        //         ]
        //     }
        default: return state
    }
}

export default userReducer