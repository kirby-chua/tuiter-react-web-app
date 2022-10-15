import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row align-items-center mb-2">
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
                <a href="../explore/explore-settings.html">
                        <span>
                    <i class="fa fa-cog fa-2x mx-auto" style="color: #2a9fd6"></i>
                </span>
                </a>
            </div>
        </div>
    <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="../explore/for-you.html">For You</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../explore/trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../explore/news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../explore/sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="../explore/entertainment.html">Entertainment</a>
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
