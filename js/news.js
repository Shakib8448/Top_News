const loadCategoryNews = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategoryNews(data.data.news_category);
}

const loadNews = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}

const displayCategoryNews = news =>{
    const newsContainer = document.getElementById('news-category');
    news.forEach(news =>{
        const newsButton =document.createElement('div');
        newsButton.classList.add("d-flex");
        newsButton.innerHTML = `
            <button onclick="loadNews('${news.category_id}')" type="button" class="row-2
            justify-content-evenly mx-3 btn btn-outline-secondary mt-4">${news.category_name}</button>`    
        newsContainer.appendChild(newsButton);
        })
    }

    loadCategoryNews();

const displayNews = news =>{
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML=``
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
        const itemNum = document.getElementById('item-num')
        const n = news.length;
        itemNum.innerText = `${n} data found`
        
}

