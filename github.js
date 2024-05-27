class Github{
    constructor(){
        this.client_id = 'Ov23liJ4FN1lSqLJEJdQ';
        this.client_secret = '84fd6ade292557e13b042a20b252add7e73b3534';
        this.respos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = 
            await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = 
            await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos,
        }
    }
}