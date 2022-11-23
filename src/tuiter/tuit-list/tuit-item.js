import React from "react";
import Moment from 'react-moment';
import TuitStatsComponent from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "tuit": ""
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 me-2">
                    <img className="rounded-circle" height={48} src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="fw-lighter">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        <span className="fw-bold">{post.userName}</span> <span>{post.handle}</span>
                        <span> &#183; <Moment format="MMMM Do YYYY, h:mm:ss a">{post.date}</Moment></span></div>
                    <div>
                        {post.tuit}
                    </div>
                    <TuitStatsComponent
                        key={post._id}
                        post={post}
                    />
                </div>


            </div>
        </li>
    );
}

export default TuitItem;