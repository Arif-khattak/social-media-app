
import { createContext, useReducer } from "react";

export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
});


const postListReducer=(currentPostList,action)=>{
    let newPostList=currentPostList;
    if(action.type==='DELETE_POST' ){
        newPostList=currentPostList.filter((post)=>post.id!==action.payload.postId)
    }
    else if(action.type==='ADD_POST' ){
        newPostList=[action.payload, ...currentPostList]
    }
    return newPostList;
}



const PostListProvider=({children})=>{

const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=( userId,postTitle,postBody,reactions,tags )=>{
      dispatchPostList({
        type:'ADD_POST',
        payload:{
                id : Date.now(),
                title: postTitle,
                body :postBody,
                reactions: reactions,
                 userId: userId ,
                 tags: tags
            
        }
      })
        
    }
    
    const deletePost=(postId)=>{
dispatchPostList({
    type:"DELETE_POST",
    payload:{
        postId,
    }
})         
    }
    return  <PostList.Provider value={{postList,addPost,deletePost}} >
{children}
    </PostList.Provider>
    
    
    
}

const DEFAULT_POST_LIST=[
    {
        id : ' 1',
        title: 'Going to Mumbai ',
        body : ' Hi  friends i am goinf to Mumbai for my veccations. Hope to enjoy a lot.Peace out',
        reactions: 2,
         userId: ' user-9 ' ,
         tags: [ 'vacation' , ' Mumbai ', 'Enjoying']
    },

    {
        id : ' 2',
        title: ' Paass Hogai ',
        body : ' Mia baghir ppharayi ki Fsc Exam mian Pass Howa aer main bhahoth khosh hoo',
        reactions: 5,
         userId: ' user-11 ' ,
         tags: [ ' Lucky person ' ]
    },
    {
        id : ' 3',
        title: ' Paass Hogiya ',
        body : ' Mia baghir ppharayi ki Fsc Exam mian Pass Howa aer main bhahoth khosh hoo',
        reactions: 5,
         userId: ' user-11 ' ,
         tags: [ ' Lucky person ' ]
    }
]
export default PostListProvider;