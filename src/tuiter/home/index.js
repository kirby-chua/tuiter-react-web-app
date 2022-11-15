import React from "react";
import WhatsHappening from "./whats-happening";
import TuitLists from "../tuit-list/tuits-list";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitLists/>
        </>
    );
};
export default HomeComponent;