const loadNews = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/08`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}

const displayNews = news =>{
    const newsContainer = document.getElementById('news-container');
    news.forEach(news =>{
        const newsDiv =document.createElement('div');
        newsDiv.classList.add('row' ,'g-2','mt-3')
        newsDiv.innerHTML = `
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${news.title}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    <div>
                        <div class="d-flex">
                            <img src="${news.author.img}" class="rounded-circle " style="max-height: 50px; max-width: 50px;" alt="Cinque Terre">
                            <p class="p-2">${news.author.name? news.author.name: "No Name" }</p>
                            <div class="d-flex p-3">
                            <i class="fa-solid fa-eye p-1"></i>
                            <p>${news.total_view}</p>
                            </div>
                        </div>
                       
                    </div>
                </div>`    
                newsContainer.appendChild(newsDiv);
        })
        
}
loadNews();
