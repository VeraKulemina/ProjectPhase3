import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function NewShoppeForm({ onAddActivity }) {
    const [formData, setFormData] = useState({
      name: "",
      address: "",
    });
    
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
  
    function handleSubmit() {
        // Semantic UI React's Form component handles the preventDefault automatically!
    
        const newActivity = {
          name: formData.name,
          address: formData.address,
        };

    fetch("http://localhost:9292/shoppes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((r) => r.json())
      .then(onAddActivity);
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
            label="Address"
            placeholder="address"
            name="address"
            className="add"
            value={formData.experience}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default NewShoppeForm;