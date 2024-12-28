
import React, { useState } from "react";
import { useProductStore } from '../store/product'; // Adjust the import path as needed

const Createpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore(); // Destructuring createProduct from the store

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.price || !formData.image) {
      alert("Please fill in all fields.");
      return;
    }

    // Call the createProduct function from the Zustand store
    const result = await createProduct(formData);

    if (result.success) {
      alert(result.message); // Show success message
      setFormData({ name: "", price: "", image: "" }); // Reset form after successful creation
    } else {
      alert(result.message); // Show error message
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price" style={{ display: "block", marginBottom: "5px" }}>Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image" style={{ display: "block", marginBottom: "5px" }}>Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Createpage;
