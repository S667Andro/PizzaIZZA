
import React, { useState, useEffect } from 'react';
import './App.css';

// Pizza data based on the images
const pizzaData = [
  { id: 1, name: 'Пицца Маргарита', price: 429, weight: 540, calories: 265, proteins: 11, fats: 11, carbs: 30, ingredients: ['Сыр Моцарелла', 'Помидоры', 'Томатный соус'], image: 'https://user36270.clients-cdnnow.ru/1695726763356-300x217@2x.webp' },
  { id: 2, name: 'Пицца Пепперони', price: 459, weight: 560, calories: 285, proteins: 13, fats: 12, carbs: 32, ingredients: ['Пепперони', 'Сыр Моцарелла', 'Томатный соус'], image: 'https://user36270.clients-cdnnow.ru/1689062759275-300x217@2x.webp' },
  { id: 3, name: 'Пицца "6 сыров"', price: 875, weight: 570, calories: 320, proteins: 18, fats: 15, carbs: 28, ingredients: ['Моцарелла', 'Чеддер', 'Пармезан', 'Дор блю', 'Гауда', 'Сливочный сыр'], image: 'https://user36270.clients-cdnnow.ru/1689063114888-300x217@2x.webp' },
  { id: 4, name: 'Пицца Мясной пир', price: 499, weight: 590, calories: 295, proteins: 16, fats: 14, carbs: 30, ingredients: ['Пепперони', 'Салями', 'Ветчина', 'Сыр Моцарелла'], image: 'https://user36270.clients-cdnnow.ru/1689063393532-300x217@2x.webp' },
  { id: 5, name: 'Пицца Деревенская', price: 459, weight: 610, calories: 275, proteins: 14, fats: 13, carbs: 31, ingredients: ['Ветчина', 'Грибы', 'Лук', 'Сыр Моцарелла'], image: 'https://user36270.clients-cdnnow.ru/1689063533888-300x217@2x.webp' },
  { id: 6, name: 'Пицца Супер Пепперони', price: 785, weight: 560, calories: 310, proteins: 15, fats: 16, carbs: 29, ingredients: ['Двойная порция пепперони', 'Сыр Моцарелла', 'Томатный соус'], image: 'https://user36270.clients-cdnnow.ru/1689063724168-300x217@2x.webp' },
  { id: 7, name: 'Пицца "4 сыра"', price: 469, weight: 585, calories: 300, proteins: 17, fats: 14, carbs: 28, ingredients: ['Моцарелла', 'Чеддер', 'Пармезан', 'Дор блю'], image: 'https://user36270.clients-cdnnow.ru/1695727958387-300x217@2x.webp' },
  { id: 8, name: 'Пицца Аляска', price: 785, weight: 620, calories: 290, proteins: 15, fats: 13, carbs: 32, ingredients: ['Лосось', 'Крем-сыр', 'Каперсы', 'Красный лук'], image: 'https://user36270.clients-cdnnow.ru/1689064682869-300x217@2x.webp' },
  { id: 9, name: 'Пицца Чизбургер', price: 685, weight: 680, calories: 340, proteins: 18, fats: 17, carbs: 35, ingredients: ['Говядина', 'Чеддер', 'Огурцы', 'Лук', 'Горчичный соус'], image: 'https://user36270.clients-cdnnow.ru/1689065143487-300x217@2x.webp' },
  { id: 10, name: 'Пицца Гавайская', price: 570, weight: 590, calories: 270, proteins: 13, fats: 12, carbs: 33, ingredients: ['Ветчина', 'Ананасы', 'Сыр Моцарелла'], image: 'https://user36270.clients-cdnnow.ru/1689065350379-300x217@2x.webp' },
  { id: 11, name: 'Пицца Сити суприм', price: 1110, weight: 650, calories: 350, proteins: 19, fats: 18, carbs: 34, ingredients: ['Пепперони', 'Салями', 'Ветчина', 'Грибы', 'Перец', 'Лук'], image: 'https://user36270.clients-cdnnow.ru/1689065677982-300x217@2x.webp' },
  { id: 12, name: 'Пицца Калифорния', price: 685, weight: 585, calories: 285, proteins: 14, fats: 13, carbs: 31, ingredients: ['Курица', 'Бекон', 'Авокадо', 'Помидоры'], image: 'https://user36270.clients-cdnnow.ru/1689065880652-300x217@2x.webp' },
  { id: 13, name: 'Пицца Домашняя', price: 459, weight: 570, calories: 260, proteins: 12, fats: 11, carbs: 32, ingredients: ['Колбаса', 'Грибы', 'Лук', 'Сыр Моцарелла'], image: 'https://user36270.clients-cdnnow.ru/1689066025873-300x217@2x.webp' },
  { id: 14, name: 'Пицца Мясное ассорти', price: 769, weight: 650, calories: 330, proteins: 17, fats: 16, carbs: 30, ingredients: ['Пепперони', 'Салями', 'Ветчина', 'Бекон'], image: 'https://user36270.clients-cdnnow.ru/1689066218607-300x217@2x.webp' },
  { id: 15, name: 'Пицца с тигровыми креветками', price: 1110, weight: 675, calories: 250, proteins: 20, fats: 8, carbs: 30, ingredients: ['Тигровые креветки', 'Чеснок', 'Руккола', 'Пармезан'], image: 'https://user36270.clients-cdnnow.ru/1689066453674-300x217@2x.webp' },
  { id: 16, name: 'Пицца Род Айленд', price: 685, weight: 615, calories: 315, proteins: 16, fats: 15, carbs: 32, ingredients: ['Пепперони', 'Итальянские травы', 'Оливки', 'Перец'], image: 'https://user36270.clients-cdnnow.ru/1689066626878-300x217@2x.webp' },
  { id: 17, name: 'Пицца Ранч', price: 479, weight: 650, calories: 280, proteins: 13, fats: 13, carbs: 33, ingredients: ['Курица', 'Бекон', 'Соус Ранч', 'Помидоры'], image: 'https://user36270.clients-cdnnow.ru/1689066769430-300x217@2x.webp' },
  { id: 18, name: 'Пицца с лососем и соусом песто', price: 1110, weight: 535, calories: 290, proteins: 18, fats: 12, carbs: 29, ingredients: ['Лосось', 'Соус песто', 'Руккола', 'Помидоры черри'], image: 'https://user36270.clients-cdnnow.ru/1689067010439-300x217@2x.webp' },
  { id: 19, name: 'Пицца Грибной Микс', price: 659, weight: 575, calories: 255, proteins: 11, fats: 10, carbs: 34, ingredients: ['Шампиньоны', 'Вешенки', 'Лисички', 'Сыр Моцарелла'], image: 'https://user36270.clients-cdnnow.ru/1689067148601-300x217@2x.webp' },
  { id: 20, name: 'Пицца с шампиньонами', price: 685, weight: 525, calories: 245, proteins: 10, fats: 9, carbs: 35, ingredients: ['Шампиньоны', 'Сыр Моцарелла', 'Лук', 'Итальянские травы'], image: 'https://user36270.clients-cdnnow.ru/1689067372543-300x217@2x.webp' }
];

const extraIngredients = [
  { id: 'pepperoni', name: 'Пепперони', price: 150, image: 'https://user36270.clients-cdnnow.ru/1690451421246-180x113@2x.webp' },
  { id: 'mushrooms', name: 'Грибы', price: 100, image: 'https://user36270.clients-cdnnow.ru/1690451662826-180x113@2x.webp' },
  { id: 'ham', name: 'Ветчина', price: 120, image: 'https://user36270.clients-cdnnow.ru/1690451457142-180x113@2x.webp' },
  { id: 'cheese', name: 'Доп. сыр', price: 80, image: 'https://user36270.clients-cdnnow.ru/1690451740990-180x113@2x.webp' },
  { id: 'olives', name: 'Оливки', price: 90, image: 'https://user36270.clients-cdnnow.ru/1690452264839-180x113@2x.webp' },
  { id: 'tomatoes', name: 'Помидоры', price: 70, image: 'https://user36270.clients-cdnnow.ru/1690451973940-180x113@2x.webp' }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Автофокус на поисковую строку при открытии
  useEffect(() => {
    if (showSearchMenu) {
      const searchInput = document.querySelector('.search-input');
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 0);
      }
    }
  }, [showSearchMenu]);

  const HomePage = () => (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="orange-text">Назар просит тройку</h1>
          <p>Лучшая пицца в городе!</p>
        </div>
      </div>
      <div className="featured-image-section">
        <img 
          src="https://st.biglion.ru/cfs15/deal_offer_photo/70/d2/70d2fdff4a00977490e57e99f9673ea9.jpg" 
          alt="Вкусная пицца" 
          className="featured-pizza-image"
        />
      </div>
      <div className="slogan-section">
        <h2>PizzaIZZA - Вкус, который объединяет!</h2>
        <p>Свежие ингредиенты, авторские рецепты, быстрая доставка</p>
      </div>
    </div>
  );

  const PizzaListPage = () => {
    const filteredPizzas = pizzaData.filter(pizza =>
      pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="pizza-list">
        <div className="pizza-header">
          <button 
            className="hamburger-btn"
            onClick={() => setShowSearchMenu(!showSearchMenu)}
          >
            ☰
          </button>
          <h2>Наша пицца</h2>
        </div>
        
        {showSearchMenu && (
          <div className="search-menu">
            <input
              type="text"
              placeholder="Поиск пиццы..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              autoFocus
              onBlur={(e) => {
                // Предотвращаем потерю фокуса при клике по другим элементам
                setTimeout(() => {
                  if (showSearchMenu && document.activeElement !== e.target) {
                    e.target.focus();
                  }
                }, 100);
              }}
            />
          </div>
        )}
        
        <div className="pizza-grid">
          {filteredPizzas.map(pizza => (
            <div key={pizza.id} className="pizza-card" onClick={() => setSelectedPizza(pizza)}>
              <img src={pizza.image} alt={pizza.name} />
              <h3>{pizza.name}</h3>
              <p className="weight">{pizza.weight} г</p>
              <div className="price-section">
                <span className="price">от {pizza.price} ₽</span>
                <button className="select-btn">Выбрать</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PizzaDetailPage = () => {
    const [selectedSize, setSelectedSize] = useState('25');
    const [extraIngredientsList, setExtraIngredientsList] = useState([]);
    const [showIngredients, setShowIngredients] = useState(false);

    const getSizeMultiplier = (size) => {
      switch(size) {
        case '25': return 1;
        case '30': return 1.3;
        case '40': return 1.8;
        default: return 1;
      }
    };

    const calculatePrice = () => {
      const sizeMultiplier = getSizeMultiplier(selectedSize);
      const basePrice = selectedPizza.price * sizeMultiplier;
      const extraPrice = extraIngredientsList.reduce((sum, ingredient) => sum + ingredient.price, 0);
      return Math.round(basePrice + extraPrice);
    };

    const addToCart = () => {
      const item = {
        id: Date.now(),
        pizza: selectedPizza,
        size: selectedSize,
        extraIngredients: extraIngredientsList,
        price: calculatePrice(),
        quantity: 1
      };
      setCart([...cart, item]);
      setSelectedPizza(null);
    };

    const toggleExtraIngredient = (ingredient) => {
      const exists = extraIngredientsList.find(item => item.id === ingredient.id);
      if (exists) {
        setExtraIngredientsList(extraIngredientsList.filter(item => item.id !== ingredient.id));
      } else {
        setExtraIngredientsList([...extraIngredientsList, ingredient]);
      }
    };

    return (
      <div className="pizza-detail">
        <button className="back-btn" onClick={() => setSelectedPizza(null)}>← Назад</button>
        <div className="pizza-detail-content">
          <div className="pizza-image-section">
            <img src={selectedPizza.image} alt={selectedPizza.name} />
          </div>
          <div className="pizza-info-section">
            <h2>{selectedPizza.name}</h2>
            <div className="nutrition-info">
              <div className="nutrition-item">
                <span className="value">{selectedPizza.calories}</span>
                <span className="label">ккал</span>
              </div>
              <div className="nutrition-item">
                <span className="value">{selectedPizza.proteins}</span>
                <span className="label">Белки</span>
              </div>
              <div className="nutrition-item">
                <span className="value">{selectedPizza.fats}</span>
                <span className="label">Жиры</span>
              </div>
              <div className="nutrition-item">
                <span className="value">{selectedPizza.carbs}</span>
                <span className="label">Углеводы</span>
              </div>
            </div>

            <div className="size-selector">
              <button 
                className={selectedSize === '25' ? 'active' : ''} 
                onClick={() => setSelectedSize('25')}
              >
                25 см
              </button>
              <button 
                className={selectedSize === '30' ? 'active' : ''} 
                onClick={() => setSelectedSize('30')}
              >
                30 см
              </button>
              <button 
                className={selectedSize === '40' ? 'active' : ''} 
                onClick={() => setSelectedSize('40')}
              >
                40 см
              </button>
            </div>

            <div className="ingredients-section">
              <button 
                className="ingredients-toggle"
                onClick={() => setShowIngredients(!showIngredients)}
              >
                Состав {showIngredients ? '↑' : '↓'}
              </button>
              {showIngredients && (
                <div className="ingredients-list">
                  <p>{selectedPizza.ingredients.join(', ')}</p>
                </div>
              )}
            </div>

            <div className="extra-ingredients">
              <h3>Добавить ингредиенты</h3>
              <div className="extra-ingredients-grid">
                {extraIngredients.map(ingredient => (
                  <div 
                    key={ingredient.id} 
                    className={`extra-ingredient ${extraIngredientsList.find(item => item.id === ingredient.id) ? 'selected' : ''}`}
                    onClick={() => toggleExtraIngredient(ingredient)}
                  >
                    <img src={ingredient.image} alt={ingredient.name} />
                    <span>{ingredient.name}</span>
                    <span>+{ingredient.price}₽</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="add-to-cart-btn" onClick={addToCart}>
              Добавить за {calculatePrice()}₽
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CartPage = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
      if (newQuantity === 0) {
        removeFromCart(id);
        return;
      }
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    };

    return (
      <div className="cart-page">
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Корзина пуста</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.pizza.image} alt={item.pizza.name} />
                  <div className="item-info">
                    <h3>{item.pizza.name}</h3>
                    <p>Размер: {item.size} см</p>
                    {item.extraIngredients.length > 0 && (
                      <p>Доп: {item.extraIngredients.map(ing => ing.name).join(', ')}</p>
                    )}
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="item-price">
                    <span>{item.price * item.quantity}₽</span>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Итого: {total}₽</h3>
              <button 
                className="address-btn"
                onClick={() => setShowAddressModal(true)}
              >
                Укажите адрес доставки
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  const ProfilePage = () => {
    if (!user) {
      return (
        <div className="profile-page">
          <h2>Профиль</h2>
          <button className="auth-btn" onClick={() => setShowAuth(true)}>
            Войти в аккаунт
          </button>
        </div>
      );
    }

    return (
      <div className="profile-page">
        <h2>Профиль</h2>
        <div className="profile-info">
          <p>Имя: {user.name}</p>
          <p>Телефон: {user.phone}</p>
        </div>
        <div className="profile-sections">
          <div className="profile-section">
            <h3>Промокоды</h3>
            <div className="promo-code">
              <span>Назик</span>
              <p>Скидка при заказе от 3 пицц</p>
            </div>
          </div>
          <div className="profile-section">
            <h3>История заказов</h3>
            <p>Заказов пока нет</p>
          </div>
          <div className="profile-section">
            <h3>Адреса</h3>
            <p>Адресов пока нет</p>
          </div>
        </div>
      </div>
    );
  };

  const AuthModal = () => {
    const handleSendCode = () => {
      if (phoneNumber.length >= 10) {
        setShowCodeInput(true);
      }
    };

    const handleCodeSubmit = () => {
      if (code === '1212') {
        setUser({ name: 'Пользователь', phone: phoneNumber });
        setShowAuth(false);
        setShowCodeInput(false);
        setCode('');
        setPhoneNumber('');
      } else {
        alert('Неверный код');
      }
    };

    return (
      <div className="modal-overlay" onMouseDown={() => setShowAuth(false)}>
        <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowAuth(false)}>×</button>
          {!showCodeInput ? (
            <div className="auth-form">
              <h3>Введите номер телефона, чтобы авторизоваться</h3>
              <input
                type="tel"
                placeholder="+7 (900) 000 0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                autoFocus
              />
              <button onClick={handleSendCode}>Отправить код</button>
              <p className="agreement">
                Нажимая на кнопку «Отправить код» вы даете своё согласие с политикой конфиденциальности, 
                политикой куки, согласием на обработку ПД и публичной офертой на получение рекламных сообщений о продукции «PizzaIZZA»
              </p>
            </div>
          ) : (
            <div className="code-form">
              <h3>Введите код из SMS</h3>
              <input
                type="text"
                placeholder="0000"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength="4"
                autoFocus
              />
              <button onClick={handleCodeSubmit}>Подтвердить</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const AddressModal = () => {
    const handleOrder = () => {
      if (deliveryAddress && paymentMethod) {
        alert('Заказ оформлен!');
        setCart([]);
        setShowAddressModal(false);
        setDeliveryAddress('');
        setPaymentMethod('');
      }
    };

    return (
      <div className="modal-overlay" onMouseDown={() => setShowAddressModal(false)}>
        <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowAddressModal(false)}>×</button>
          <div className="address-form">
            <h3>Оформление заказа</h3>
            <div className="form-group">
              <label>Адрес доставки:</label>
              <input
                type="text"
                placeholder="Введите адрес"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label>Способ оплаты:</label>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Наличными
                </label>
                <label>
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  Картой
                </label>
              </div>
            </div>
            <button 
              className="order-btn"
              onClick={handleOrder}
              disabled={!deliveryAddress || !paymentMethod}
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    if (selectedPizza) return <PizzaDetailPage />;
    
    switch(currentPage) {
      case 'pizza': return <PizzaListPage />;
      case 'cart': return <CartPage />;
      case 'profile': return <ProfilePage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <nav className="nav">
            <button 
              className={currentPage === 'pizza' ? 'active' : ''}
              onClick={() => setCurrentPage('pizza')}
            >
              Пицца
            </button>
          </nav>
          
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <h1>PizzaIZZA</h1>
          </div>
          
          <div className="header-actions">
            <div className="contact-number">
              <span>📞 +7 (495) 488-70-76</span>
            </div>
            <button 
              className="cart-btn"
              onClick={() => setCurrentPage('cart')}
            >
              Корзина ({cart.length})
            </button>
            <button 
              className="profile-btn"
              onClick={() => setCurrentPage('profile')}
            >
              Профиль
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {renderPage()}
      </main>

      {showAuth && <AuthModal />}
      {showAddressModal && <AddressModal />}
    </div>
  );
}
