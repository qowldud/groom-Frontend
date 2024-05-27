const github = new Github();

const ui = new UI();


const searchuser = document.getElementById('searchUser');

searchuser.addEventListener('keyup', (e) => {
    const userText = e.target.value;


    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                alert('X');
            } else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{

    }
})