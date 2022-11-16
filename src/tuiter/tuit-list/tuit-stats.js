import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        post = {
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "tuit": ""
        }
    }
) => {
    const dispatch = useDispatch();
    const heartClass = post.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"
    return(
        <div className="row">
            <span className="col-sm"><i className="bi bi-chat"></i> {post.replies}</span>
            <span className="col-sm"><i className="bi bi-repeat"></i> {post.retuits}</span>
            <span className="col-sm"><i className={heartClass} onClick={() => dispatch(updateTuitThunk({
                ...post,
                likes: post.liked ? post.likes - 1: post.likes + 1,
                liked: !post.liked
            }))}></i> {post.likes}</span>
            <span className="col-sm"><i className="bi bi-hand-thumbs-down" onClick={() => dispatch(updateTuitThunk({
                ...post,
                dislikes: post.dislikes + 1
            }))}></i> {post.dislikes}</span>
            <span className="col-sm"><i className="bi bi-share"></i></span>
        </div>
    );
}

export default TuitStats;