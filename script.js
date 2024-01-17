
let posts =[{
    'author': 'Tagesschau',
    'profilepic':'./img/tageschau.jpg',
    'image': './img/streik.jpg',
    'description': 'Bauernproteste sorgen bundesweit für Störungen',
    'location': 'Germany',
    'comments': [],
    'likes': 9250,
    'liked': false
 },
 {
    'author': 'Zoo',
    'profilepic':'./img/zoopic.jpg',
    'image': './img/zoo.jpg',
    'description': 'Rhinoceros in der Savanne gesichtet!',
    'location': 'Frankfurt',
    'comments': [],
    'likes': 537,
    'liked': false
 }
];

function render() {
    load();
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        generatePosts(post,i);
        generateComments(post, i);
    }

}

function generateComments(post, i) {
    let comDiv = document.getElementById(`comDiv${i}`);

    for (let x = 0; x < post['comments'].length; x++) {
        const comment = post['comments'][x];
        comDiv.innerHTML += `<div class="sendcomments"><b>User: </b>${comment}</div>`;
    }
}

function addComment(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);
    input.value = '';
    save();
    render();
}

function save() { //speichert alle Elemente im localStorage
    let commentSave = JSON.stringify(posts);
    localStorage.setItem('comments', commentSave);
}

function load() { //läd alle Elemente aus dem localStorage
    let commentSave = localStorage.getItem('comments');
    if (commentSave) {
        posts = JSON.parse(commentSave);
    }
}

function like(i) {
    let likeStatus = posts[i]['liked']
    if (likeStatus == false) {
        posts[i]['liked'] = true
        posts[i]['likes']++;
        posts[i]['heartPic'] = './img/fullheart.jpg';
    } else {
        posts[i]['liked'] = false
        posts[i]['likes']--;
        posts[i]['heartPic'] = './img/heart.png';
    }
    save();
    render();
}

