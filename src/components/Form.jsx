import { useState } from "react";
import List from "./List";

const Form = () => {

    //prevent the form from reloading the page on submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    //new post creation function
    const createPost = () => {

        const {title,description, image} = post;
    
        if(!title || !description){
            throw new Error("😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔😔")    
        }
        setPostsList((posts) => [post, ...posts]);

        setPost({
            title: '',
            description: '',
            image: '',
        });
    }

    // post object with setPost 
    const [post, setPost] = useState({
        title: '',
        description: '',
        image: '',
    });

    //posts list containing all of our posts with setPostsList
    const [postsList, setPostsList] = useState([]);

    return(<>
        <form className="formStyle" onSubmit={handleSubmit}>
            {/* title input field */}
            <div className="inputWrapper">
                <label htmlFor="title" id="label">Title</label>
                <input type="text" id="title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} />
            </div>

            {/* description input field */}
            <div className="inputWrapper">
                <label htmlFor="description" id="label">Description</label>
                <textarea name="" id="description" cols="30" rows="10" value={post.description} onChange={(e) => setPost({...post, description: e.target.value})} ></textarea>
            </div>

            {/* image input field */}
            <div className="inputWrapper">
                <label htmlFor="image" id="label">Image</label>
                <input type="text" id="image" value={post.image} onChange={(e) => setPost({...post, image: e.target.value})} />
            </div>

            <button type="submit" className="createBtn" onClick={createPost}>Create</button>
        </form>

        <List posts={postsList} setPosts={setPostsList}/>
        
    </>)
}

export default Form;