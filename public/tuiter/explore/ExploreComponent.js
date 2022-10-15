import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row mb-2">
            <div class="col-11">
                <div class="input-group">
                    <span class="input-group-text wd-search-icon"><i class="fa fa-search fa"
                                                                     style="color: lightgrey"></i></span>
                    <input class="form-control wd-search-bar"
                           id="search"
                           placeholder="Search Twitter"
                           type="search">
                </div>
            </div>
            <div class="col-1">
                <a href="explore-settings.html">
                        <span>
                    <i class="fa fa-cog fa-2x mx-auto" style="color: blue"></i>
                </span>
                </a>
            </div>
        </div>
    <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For You</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
    </ul>
    <div class="card position-relative">
        <img class="card-img-top" src="../images/spacex.webp">
            <div class="card-img-overlay card-inverse text-white"><h2 class="position-absolute bottom-0">SpaceX's
                Starship</h2></div>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;
