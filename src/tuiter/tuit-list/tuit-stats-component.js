import React from "react";
import {likeTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";

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
    const toggleLike = (tuit) => {
        dispatch(likeTuit(tuit))
    }
    const heartClass = post.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"
    return(
        <div>
            <span className="pe-5"><i className="bi bi-chat"></i> {post.replies}</span>
            <span className="pe-5"><i className="bi bi-repeat"></i> {post.retuits}</span>
            <span className="pe-5"><i className={heartClass} onClick={() => toggleLike(post)}></i> {post.likes}</span>
            <span className="pe-5"><i className="bi bi-share"></i></span>


        </div>
    );
}

export default TuitStats;