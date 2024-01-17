function generatePosts(post, i){

    document.getElementById('content').innerHTML += `
    <div class="postDiv">
        <div class="postHead">
        <img src="${post['profilepic']}">
        <div class="user">
        <span class="author"> ${post['author']}</span>
        <span> ${post['location']}</span>
        </div>
        </div> 
        <img src="${post['image']}">
        <div class="postDetails">
            <div class="icon">
                <div class="iconLeft">
                <img id="likeButton${i}" onclick="like(${i})" src="${post['heartPic']}" alt="hearticon" class="heart">
                <img src="./img/comment.png" alt="commenticon">
                <img src="./img/arrow.jpg" alt="sendicon">
                </div> 
            </div>
            <span id="likeCount">Gefällt ${post['likes']} Mal</span> 
            <div class="postText"> 
            <span class="author"> ${post['author']} </span><span>${post['description']}</span>
            </div> 
        </div> 
        <div id="comDiv${i}"></div>
        <div class="commentSection">                 
        <textarea id="input${i}" placeholder="Kommentar hinzufügen..."></textarea>
        <button onclick="addComment(${i})">Senden</button>
        </div> 
    </div>
`;
}