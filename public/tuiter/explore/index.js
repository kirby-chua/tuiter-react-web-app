
import WhoToFollowList from "../WhoToFollowList/index.js";
import NavigationSideBar from "../NavigationSideBar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";

const handleNavClick = (event) => {
    const navbar = [$("#for-you"), $("#trending"), $("#news"), $("#sports"), $("#entertainment")];
    navbar.map(nav => nav.attr('class', 'nav-link'));
    const target = event.target;
    $(target).attr('class', 'nav-link active');
}
function exploreComponent() {
    $('#wd-explore').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSideBar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
    ${ExploreComponent()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    ${WhoToFollowList()}
   </div>
  </div>
   `);

    const navbar = [$("#for-you"), $("#trending"), $("#news"), $("#sports"), $("#entertainment")];
    navbar.map(nav=>nav.click(handleNavClick));
}

$(exploreComponent);