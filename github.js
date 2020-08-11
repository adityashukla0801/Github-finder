class Github{
  constructor (){
    this.client_id= 'da49d121bc21afa7a40d'
    this.client_secret = '5021cacb4f5429cfcfb1b81b38b1634992957744'
    this.repos_count = 5;
    this.repos_sort = 'created asc';

  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();
    
    return { 
      profile,
      repos 
    };
  }
}