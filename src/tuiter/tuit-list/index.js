import TuitItem from "./tuit-item-component";
import {useSelector} from "react-redux";

const TuitLists = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        post={tuit}
                    />
                )
            }
        </ul>
    );
};

export default TuitLists;