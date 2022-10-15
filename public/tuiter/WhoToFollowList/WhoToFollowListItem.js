const WhoToFollowListItem = (who) => {
    return(`
   
    <li class="list-group-item">
        <div class="row align-items-center">
            <div class="col-3 col-xxl-2"><img class="col-12 rounded-circle" src="../images/${who.avatarIcon}"></div>
            <div class="col-6 col-xxl-7 ps-lg-0 pe-lg-0 wd-follow-name">
                <div class="fw-bold">${who.userName} <i class="fa fa-check-circle col"></i></div>
                <div>@${who.handle}</div>
            </div>
            <div class="d-grid col-lg-2 col-xl-3 ps-lg-0 ps-xxl-3 wd-follow-button">
                <a href="#">
                    <button class="col-12 btn btn-primary rounded-pill offset">
                        Follow
                    </button>
                </a>
            </div>
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;