const PORT = 9000;
const url = "https://www.theguardian.com/uk-news"
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = [];

    $(".fc-item__title", html).each(function() {
        const title = $(this).text();
        const url = $(this).find("a").attr("href");
        articles.push(
            {
                title,
                url
            }
        )
    })
        
   console.log(articles);

   
    
}).catch(err => console.log(err));

let Scraper = document.getElementById("scraper");
   Scraper.innerHTML = `${articles}`;

app.listen(PORT, ()=> console.log("Server running on port ${PORT}"));