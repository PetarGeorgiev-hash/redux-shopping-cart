import { useSelector } from "react-redux"
import Item from "./item/Item"
import styles from "./Items.module.css"
const Items = () => {
  const dummyData = {
    "items": [
      {
        "id": 1,
        "name": "Smartphone",
        "brand": "Apple",
        "model": "iPhone 12",
        "price": 799.99,
        "in_stock": 15
      },
      {
        "id": 2,
        "name": "Laptop",
        "brand": "Dell",
        "model": "XPS 13",
        "price": 1299.99,
        "in_stock": 10
      },
      {
        "id": 3,
        "name": "Tablet",
        "brand": "Samsung",
        "model": "Galaxy Tab S7",
        "price": 499.99,
        "in_stock": 20
      },
      {
        "id": 4,
        "name": "Smart TV",
        "brand": "Sony",
        "model": "Bravia X900H",
        "price": 799.99,
        "in_stock": 5
      },
      {
        "id": 5,
        "name": "Headphones",
        "brand": "Bose",
        "model": "QuietComfort 35 II",
        "price": 299.99,
        "in_stock": 25
      }
    ]
  }

  const isVIsable = useSelector( state => state.toggle.cartIsVisable)

  
  return   <div className={styles.wrapper}>
    {  isVIsable && dummyData["items"].map( (item) =>{
       return <Item key={item["id"]} name={item["name"]} price={item["price"]}/>
    })}
  </div>


}

export default Items