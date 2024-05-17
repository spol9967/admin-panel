import { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";

import axios from "axios";

function App() {
  const [showAddTask, setShowAddtask] = useState(false);
  const [products, setProducts] = useState([]);
  const uri = "https://master--meek-kashata-56d554.netlify.app";
  // const uri = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(uri+"/product")
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
      });
  }, [setProducts]);

  // updating database
  const updateData = () => {
    axios
      .get(uri+"/product")
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
      });
  };

  //Delete product
  const deleteTask = (id) => {
    axios
    .delete(uri+"/product/"+id)
    .then((res) => {
      updateData();
      console.log(res.data)
    }).catch(err=>{console.log(err)});
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, reminder: !product.reminder }
          : product
      )
    );
  };

  //Add product
  const addProduct = (product) => {
    axios
    .post(uri+"/product/add", product)
    .then((res) => {
      console.log(res.data)
      updateData();
    }).catch(err=>{console.log(err)});
    

  };

  return (
    <div className="container">
      <Header title="Admin Panel" onAdd={() => setShowAddtask(!showAddTask)} />
      {showAddTask && <AddProduct onAdd={addProduct} />}
      <div className="card">
        {products.length > 0 ? (
          <Products
            products={products}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No task available"
        )}
      </div>
    </div>
  );
}

export default App;
