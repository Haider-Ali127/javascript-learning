// Task 27 Post & Comments Reports
console.log("Hello")
async function postcommments() {
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
        for (const post of data) {
            post.comments = comments[post.id];
        }
        console.log("post with its title:", data[0].title);
        console.log("Number of comments:", data[0].comments);

        // heres what im saying in group it is picking first title and its comment because every post have equal comments
        let postcommments = [];
        let Count = 0;
        for (let post of data) {
            if (post.comments.length > Count) {
                Count = post.comments.length;
                postcommments = post;
            }
        }
        console.log("Post with highest comments:", postcommments.title);
        console.log("Number of comments:", Count);



    } catch (error) {
        console.error(error);
    }
}

postcommments();


// time complexity: O(n)inearbecause we go through all posts and comments onlyonce