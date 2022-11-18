import React, { useContext, useEffect, useState }  from "react";
import { UserContext } from "../context/context";

const LogIn = () => {
    
    //might not actually need current, but we will need the setter
    const {currentUser, setUser} = useContext(UserContext)

    const [userList, setUserList] = useState()
    const [formData, setFormData] = useState({
        name: "",
        password: ""        
    })

    console.log(formData)
    console.log(userList)
    //fetching all shoppes/users to compare passwords later. 
    useEffect(() => {
        fetch("http://localhost:9292/shoppes")
        .then(res => res.json())
        .then(data => setUserList(data))
    }, []);

    const handleInfoChange = (e) => {
        let newInfo = {...formData}
        newInfo[e.target.id] = e.target.value
        setFormData(newInfo)
   }

   const handleSubmit = (e) => {
        e.preventDefault()
        //try to find matching user
        let checkShoppe = userList.find((t) => (t.name == formData.name))
        //if we find the shoppe in the list and the password matches, change user
        //else, error!!
        // checkShoppe ? (checkShoppe.password == formData.password) ? setUser(checkShoppe) : alert("UserName or Password are Incorrect") : null
   }

    return(
    <div class= "grid place-items-center">
        <div class="fixed inset-y-12 bg-white w-2/5-h-3/4  z-20">
                <div class="flex items-center justify-center p-12">
                <div class="mx-auto w-full max-w-[550px]">
                    <p class="mb-4 block text-lg underline font-medium text-[#07074D]">Create an Item:</p>
                    <form onSubmit= {handleSubmit}>
                        <div class="mb-5">
                            <label id="name" class="mb-3 block text-base font-medium text-[#07074D]">
                            Enter Shoppe Name: 
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
                        <div class="mb-5">
                            <label
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Enter your Password: 
                            </label>
                            <input
                            onChange={handleInfoChange}
                            value={formData.password}
                            type="text"
                            name="subject"
                            id="password"
                            placeholder="Image URL here"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <button
                            class="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                            Submit
                            </button>
                            <button
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
        </div>)

}

export default LogIn;