// Task 27 Post & Comments Reports
async function postCommments() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let response2 = await fetch("https://jsonplaceholder.typicode.com/comments");

        if (!response.ok || !response2.ok) {
            console.log("Could not load successfully, try again later");
            return;
        }
        let data = await response.json();
        console.log("Posts sample:", data);

        let data2 = await response2.json();
        console.log("Comments sample:", data2);
        let comments = {};
        for (let comment of data2) {
            let postId = comment.postId;
            if (!comments[postId]) {
                comments[postId] = [];
            }
            comments[postId].push(comment);
        }
        for (let post of data) {
            post.comments = comments[post.id];
        }
        console.log("posts with its comments:", data[90]);
        console.log("post with its title:", data[0].title);
        console.log("Number of comments:", data[0].comments.length);
        // heres what im saying in group it is picking first title and its comment because every post have equal comments
        const mostCommented = data.reduce((max, post) =>
            post.comments.length > max.comments.length ? post : max
        );
        console.log("Post with highest comments:", mostCommented.title);
        console.log("Number of comments:", mostCommented);
        return { mostCommentedPost: mostCommented.title, commentCount: mostCommented.comments.length };
    } catch (error) {
        console.error(error);
    }
}
postCommments();

// time complexity: O(n)inearbecause we go through all posts and comments onlyonce


