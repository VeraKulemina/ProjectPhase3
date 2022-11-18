import React, { useState } from "react";

function NewItemForm() {

    const [formData, setFormData] = useState({
      name: "",
      img_url: "",
      description: "",
      category: "",
      price: "",
    });
    
    const handleInfoChange = (e) => {
      let newInfo = {...formData}
      newInfo[e.target.id] = e.target.value
      setFormData(newInfo)
   }
  

  //   fetch("http://localhost:9292/items", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newItems),
  //   })
  //     .then((r) => r.json())
  //     .then(onAddItem);
  // }

  return (
    <div class=" bg-white w-2/5-h-3/4 fixed left-15 z-20">
            <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <form >
                    <div class="mb-5">
                        <label id="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Name Your Card:
                        </label>
                        <input 
                        onChange={handleInfoChange}
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        placeholder="Card Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <label class="mb-3 block text-base font-medium text-[#07074D]">Select a Category: </label>
                        <select id="type" defaultValue="DEFAULT" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                            <option value="DEFAULT" disabled hidden>Select arcana and suit</option>
                            <optgroup label="Major">
                                <option id="major">Major</option>
                            </optgroup>
                                <optgroup label="Minor Arcana">
                                <option id="cups">Cups</option>
                                <option id="pentacles">Pentacles</option>
                                <option id="swords">Swords</option>
                                <option id="Wands">Wands</option>
                            </optgroup>
                        </select>   
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Meaning-Upright
                        </label>
                        <input
                        onChange={handleInfoChange}
                        value={formData.meaning_up}
                        type="text"
                        id="meaning_up"
                        placeholder="Enter a meaning when pulled upright"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Meaning-Reverse: 
                        </label>
                        <input
                        onChange={handleInfoChange}
                        value={formData.meaning_rev}
                        type="text"
                        name="subject"
                        id="meaning_rev"
                        placeholder="Enter meaning for card reverse"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Give your Card a Description: 
                        </label>
                        <textarea
                        onChange={handleInfoChange}
                        value={formData.desc}
                        rows="4"
                        type="text"
                        id="desc"
                        placeholder="Provide a description of your card"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
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
  );
}

export default NewItemForm;