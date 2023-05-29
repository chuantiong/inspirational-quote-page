import { quotes } from './quotes.js';

const render = () => {
    const main = document.getElementById('main');
    let strHtml = ``;
    
    quotes.forEach(quote => {
        strHtml += `
        <div class="quote-container">
            <div class="quote-contents">
                <h1 class="quote-contents__text">${quote.quote}</h1>
                <h2 class="quote-contents__author">- ${quote.author}</h2>
            </div>
            <img class="quote__bg-image" src="${quote.image}">
        </div>
        `
    });
    main.innerHTML = strHtml;
};

render();