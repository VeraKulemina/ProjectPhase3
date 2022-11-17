import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function NewItemForm({ onAddItem }) {
    const [formData, setFormData] = useState({
      name: "",
      img_url: "",
      description: "",
      category: "",
      price: "",
    });
    
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
  
    function handleSubmit() {
        // Semantic UI React's Form component handles the preventDefault automatically!
    
        const newItems = {
          name: formData.name,
          img_url: formData.img_url,
          description: formData.description,
          category: formData.category,
          price: formData.price,
        };

    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItems),
    })
      .then((r) => r.json())
      .then(onAddItem);
  }

  return (
    <div>
      <h3 className="NewForm">NewForm</h3>
      <Form onSubmit={handleSubmit} className="buttonS">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="name"
            name="name"
            className="name-1"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Image"
            placeholder="img_url"
            name="img_url"
            className="img_url"
            value={formData.img_url}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Description"
            placeholder="description"
            name="description"
            className="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Category"
            placeholder="Category"
            name="Category"
            className="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Price"
            placeholder="amount"
            name="price"
            className="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default NewItemForm;