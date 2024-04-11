class Header{

    handlerOpenShoppingPage(){
        shoppingPage.render();
    }
    
    render(count){
        const html = `
            <div class = "header-container">
                <a href="C:/Users/Baimu/Desktop/juteexsite/archive/index.html" class="header-back-button";">←</a>
                <div class = "header-counter" onclick = "headerPage.handlerOpenShoppingPage();">
                    🛒 ${count}
                </div>
            </div> 
        
        `;

        ROOT_HEADER.innerHTML = html;

    }
}

const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);