import { useState } from "react";
import axios from "axios";

const AddProduct = ({ onAdd }) => {
  const uri = "https://demo-product-backend.onrender.com";
    //  const uri = "http://localhost:5000";
  const [productname, setProductname] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [availablein, setAvailablein] = useState("");
  const [imageuri, setImageuri] = useState("");
  const [image, setImage] = useState(null);

  const onChangeFile = (e) => {
    setImageuri(uri+"/"+e.target.files[0].name);
    setImage(e.target.files[0]);
  };

  const uploadHandler = () => {
    const data = new FormData();
    data.append("file", image);
    axios.post(uri+"/product/upload", data).then((res) => {});
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!productname || !categories || !description || !availablein) {
      alert("Please fill all field");
      return;
    }
    const Data = {
      productname,
      categories,
      description,
      availablein,
      imageuri,
    };

    onAdd(Data);
    uploadHandler();
    console.log(Data);
  };

  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <div className="form-control">
        <label>Productname</label>
        <input
          type="text"
          placeholder="Add Productname"
          value={productname}
          onChange={(e) => setProductname(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Categories</label>
        <input
          type="text"
          placeholder="Add Categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Availablein</label>
        <input
          type="text"
          placeholder="Availablein"
          value={availablein}
          onChange={(e) => setAvailablein(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Image</label>
        <input
          type="file"
          onChange={(e) => {
            onChangeFile(e);
          }}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddProduct;
