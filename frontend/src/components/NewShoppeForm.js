import React, { useContext, useEffect, useState }  from "react";
import { UserContext } from "../context/context";

function NewShoppeForm({setIsOpen, shoppes, setShoppes }) {

    //maybe lazy, but I am just going to match passwords in state before submit. 
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        img_url: "",
        password: "",
        // passwordMatch: "",
    });
    //separated passwordMatch in state because I don't want to have a complicated looking fetch below
    const [passwordMatch, setPassMatch] = useState("")


    const handleInfoChange = (e) => {
        let newInfo = {...formData}
        newInfo[e.target.id] = e.target.value
        setFormData(newInfo)
     }
    
    const handleClose = () => {
        console.log("Closing!")
        setIsOpen(false)
   }

   const handleSubmit = (e) => {
        e.preventDefault()
        //basic form validation
        if (formData.name === "" ||
            formData.img_url === "" || 
            formData.address === "" || 
            formData.description === "" ||
            formData.password === "" ||
            passwordMatch === ""){
                alert("Please complete form to submit.")
                return
        }
        if (formData.password !== passwordMatch)
        {
            alert("Please make sure your passwords match")
            return
        }
        //and our post: 
        fetch("http://localhost:9292/shoppes", 
                {   method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify(formData)
                }
            ).then(res => res.json())
            .then(data => setShoppes([...shoppes, data]))
            .then(() => handleClose())
    }


    // fetch("http://localhost:9292/shoppes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newActivity),
    // })
    //   .then((r) => r.json())
    //   .then(onAddActivity);
    return (
        <div class= "grid place-items-center">
        <div class="fixed inset-y-12 bg-white w-2/5-h-3/4  z-20 overflow-y-scroll">
                <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <p class="mb-4 block text-lg underline font-medium text-[#07074D]">Register a New Account:</p>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-5">
                            <label id="name" class="mb-3 block text-base font-medium text-[#07074D]">
                            Name of Shoppe:
                            </label>
                            <input 
                            onChange={handleInfoChange}
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            placeholder="Shoppe/User Name"
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
                            value={formData.meaning_rev}
                            type="text"
                            name="subject"
                            id="img_url"
                            placeholder="Image URL here"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Enter a Password:
                            </label>
                            <input
                            onChange={handleInfoChange}
                            value={formData.password}
                            type="text"
                            id="password"
                            placeholder="Enter a street address here:"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Confirm Password:
                            </label>
                            <input
                            onChange={(e) => {
                                setPassMatch(e.target.value)
                            }}
                            value={passwordMatch}
                            type="text"
                            id="passwordMatch"
                            placeholder="Enter matching password:"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Enter an Address:
                            </label>
                            <input
                            onChange={handleInfoChange}
                            value={formData.address}
                            type="text"
                            id="address"
                            placeholder="Enter a street address here:"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                    
                        <div class="mb-5">
                            <label
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Give your Shoppe a Description: 
                            </label>
                            <textarea
                            onChange={handleInfoChange}
                            value={formData.description}
                            rows="4"
                            type="text"
                            id="description"
                            placeholder="Provide a description here"
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

export default NewShoppeForm;