import 'bootstrap/dist/css/bootstrap.css';
import { useContext, useRef } from 'react';
import {PostList} from '../store/post-list-store'
const CreatePost=()=>{
const {addPost}=useContext(PostList);
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

const handleSubmite=(event)=>{
  event.preventDefault();
  const userId=userIdElement.current.value;
  const postTitle=postTitleElement.current.value;
  const postBody=postBodyElement.current.value;
  const reactions=reactionsElement.current.value;
  const tags=tagsElement.current.value.split(/(\s+)/); 

  addPost(userId,postTitle,postBody,reactions,tags);

}
    return     <form className='create-post' onSubmit={handleSubmite}>
    
    <div className="mb-3">
    <label htmlFor="user-id" className="form-label">Enter User ID</label>
    <input type="text" className="form-control" id="user-id"  ref={userIdElement} placeholder=' Enter Your Id.'/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title"  ref={postTitleElement} placeholder='How are you are feeling today...'/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" className="form-control" id="body"  ref={postBodyElement} placeholder=" Tell us more about it " rows={4}/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text" className="form-control" id="reactions"  ref={reactionsElement} placeholder="How many people reacted to this post  " rows={4}/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your Hashtag here</label>
    <input type="text" className="form-control" id="tags"  ref={tagsElement} placeholder="Please enter tags usint space  " rows={4}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    
}

export default CreatePost;