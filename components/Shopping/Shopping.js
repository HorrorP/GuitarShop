class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    handleFeedback(event) {
        event.preventDefault(); // предотвратить перезагрузку страницы после отправки формы

        const name = document.getElementById('name-input').value;
        const email = document.getElementById('email-input').value;
        const phone = document.getElementById('phone-input').value;
        const adress = document.getElementById('adress-input').value;

        // Вывод сообщения об успешной отправке
        const feedbackForm = document.getElementById('feedback-form');
        feedbackForm.innerHTML = '<p>Заказ успешно создан! Оплата после получения товара!</p>';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} RUB</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
        const html = `
        <div class="shopping-container">
        <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
        <table>
            ${htmlCatalog}
            <tr>
                <td class="shopping-element__name">💥 Сумма:</td>
                <td class="shopping-element__price">${sumCatalog.toLocaleString()} RUB</td>
            </tr>
        </table>
        <form id="feedback-form" onsubmit="shoppingPage.handleFeedback(event)">
            <input type="text" class="name" id="name-input" placeholder="Имя Фамилия" required>
            <input type="email" class="email" id="email-input" placeholder="E-Mail" required>
            <input type="phone" class="phone" id="phone-input" placeholder="Номер телефона" required>
            <input type="text" class="adress" id="adress-input" placeholder="Адрес доставки" required>
            
            <button class="button_order" type="submit">Заказать</button>
        </form>
        </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
        
    }
}
const shoppingPage = new Shopping();