import React, { useContext, useEffect, useState }  from "react";
import { UserContext } from "../context/context";

function NewItemForm({setIsOpen, items, setItems}) {

    const [formData, setFormData] = useState({
        name: "",
        img_url: "",
        description: "",
        category: "",
        price: 0.99,
    });
    
    const handleInfoChange = (e) => {
        let newInfo = {...formData}
        newInfo[e.target.id] = e.target.value
        setFormData(newInfo)
   }

   const handleClose = () => {
        setIsOpen(false)
   }
  
   const handleSubmit = (e) => {
        e.preventDefault()
        //basic form validation
        if (formData.name === "" ||
            formData.img_url === "" || 
            formData.category === "" || 
            formData.description === ""){
                alert("Please complete form to submit.")
                return
        }
        fetch("http://localhost:9292/items", 
                {   method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(formData)
                }
            ).then(res => res.json())
            .then(data => setItems([...items, data]))
            .then(() => handleClose())
        
   }
   console.log(formData)

  return (
    <div class= "grid place-items-center">
    <div class="fixed inset-y-12 bg-white w-2/5-h-3/4 overflow-y-scroll z-20">
            <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <p class="mb-4 block text-lg underline font-medium text-[#07074D]">Create an Item:</p>
                <form onSubmit= {handleSubmit}>
                    <div class="mb-5">
                        <label id="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Enter a Name: 
                        </label>
                        <input 
                        onChange={handleInfoChange}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        placeholder="Item Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <label class="mb-3 block text-base font-medium text-[#07074D]">Select a Category: </label>
                        <select onChange={handleInfoChange} id="category" defaultValue="DEFAULT" class="w-full resize-none rounded-md mb-3 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                            <option value="DEFAULT" disabled hidden>select category</option>
                                <option id="divination">Divination</option>
                                <option id="swords">Crystals</option>
                                <option id="familiars">Familiars</option>
                                <option id="witchcraft">Witchcraft</option>
                                <option id="swords">Tomes</option>
                                <option id="wands">Wands</option>
                        </select>   
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Price:
                        </label>
                        <input
                        onChange={handleInfoChange}
                        type="number"
                        step="0.01"
                        value={formData.price}
                        id="price"
                        placeholder='$0.00'
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Enter an Image URL:
                        </label>
                        <input
                        onChange={handleInfoChange}
                        value={formData.img_url}
                        type="text"
                        name="subject"
                        id="img_url"
                        placeholder="Image URL here"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label class="mb-3 block text-base font-medium text-[#07074D]">
                        Give your Item a Description: 
                        </label>
                        <textarea
                        onChange={handleInfoChange}
                        value={formData.description}
                        rows="4"
                        type="text"
                        id="description"
                        placeholder="Provide a description of the item"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                        <button
                        class="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                        Submit
                        </button>
                        <button
                        onClick={handleClose}
                        class="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                        Cancel
                        </button>
                    </div>
                    <div>
                       
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
  );
}

export default NewItemForm;