const PostSummaryItem = (post) => {
    const tweets = post.tweets ? `${post.tweets} Retweets` : '';
    return(`
    <div class="list-group-item">
                    <div class="row">
                        <div class="col-9 col-xl-10">
                            <div class="fw-light">${post.topic}</div>
                            <div>
                                <span class="fw-bold">${post.userName} <i class="fa fa-check-circle col"></i></span>
                                <span class="fw-light"> - ${post.time}</span>
                            </div>
                            <div class="fw-bold">${post.title}
                            </div>
                             <span class="fw-light">${tweets}</span>
                        </div>
                        <div class="col-3 col-xl-2"><img class="col-12" src="${post.image}"></img></div>
                    </div>
                </div>
    `)
}
export default PostSummaryItem;