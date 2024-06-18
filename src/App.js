import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'CryptoPunk #6965',
          img: '6965.png',
          desc: 'Стилизованная коллекция из 10 тысяч неповторимых токенов. Каждый из NFT-аватаров создан в виде восьмибитных панков из будущего. Токен отчеканены на блокчейне Ethereum. Персонажи одеты в уникальные наряды, аксессуары, а также различаются по цвету кожи. Токен под номером 6965 является панком с антуражным головным убором.',
          category: 'NFT',
          price: '4.8m $'
        },
        {
          id: 2,
          title: 'Благовещание',
          img: 'blagoveschanie.jpg',
          desc: '«Благове́щение» (итал. Annunciazione) — одна из самых ранних живописных работ Леонардо да Винчи. Предположительно создана в 1472—1475 годах, когда Леонардо ещё работал в мастерской своего учителя Верроккьо[1]. Картина иллюстрирует евангельский текст о Благовещении — возвещении архангелом Гавриилом Деве Марии о будущем рождении Иисуса Христа.',
          category: 'Классика',
          price: '12.9m $'
        },
        {
          id: 3,
          title: 'Everydays: The First 5000 Days',
          img: 'everydays-the-first-5000-days.jpg',
          desc: 'NFT работа художника Beeple, представляющая собой коллаж из 5000 изображений, созданных ежедневно в течение более чем 13 лет.',
          category: 'NFT',
          price: '69.3m $'
        },
        {
          id: 4,
          title: 'Исходный код интернета',
          img: 'ishodnyj-kod-interneta-nft.png',
          desc: 'NFT, представляющий исходный код Всемирной паутины, созданный Тимом Бернерс-Ли. Включает в себя архивные файлы и цифровую документацию.',
          category: 'NFT',
          price: '5.4m $'
        },
        {
          id: 5,
          title: 'Винсент Ван Гог - Пейзаж с женщинами, штопающими сети',
          img: '150px-Van_Gogh_-_Landschaft_mit_Netzflickerinnen.jpeg',
          desc: 'Картина Винсента Ван Гога, написанная в 1882 году, изображающая сельскую сцену с женщинами, занятыми штопкой рыбацких сетей.',
          category: 'Классика',
          price: '3.1m $'
        },
        {
          id: 6,
          title: 'Портрет Джиневры де Бенчи',
          img: "Leonardo_da_Vinci_-_Ginevra_de'_Benci_-_Google_Art_Project.jpg",
          desc: 'Портрет работы Леонардо да Винчи, созданный в 1474–1478 годах, изображающий флорентийскую аристократку Джиневру де Бенчи.',
          category: 'Классика',
          price: '2.5m $'
        }
          
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
    return (
      <div className="wrapper">
        <Header order={this.state.orders} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item] }, () => {
      
    })
  }
}
  

export default App;
