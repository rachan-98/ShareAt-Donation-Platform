import { useState } from "react";
import API from "../services/api";

const CreateDonationForm = ({ onDonationCreated }) => {
const [formData, setFormData] = useState({
title: "",
category: "",
description: "",
quantity: "",
condition: "Good",
pickupAddress: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

```
try {
  await API.post("/donations", formData);

  alert("Donation Created Successfully");

  setFormData({
    title: "",
    category: "",
    description: "",
    quantity: "",
    condition: "Good",
    pickupAddress: "",
  });

  onDonationCreated();
} catch (error) {
  console.error(error);
  alert("Failed to create donation");
}
```

};

return ( <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">

```
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-slate-800">
      Create a Donation
    </h2>

    <p className="text-gray-500 mt-2">
      Share items that can help someone in need.
    </p>
  </div>

  <form
    onSubmit={handleSubmit}
    className="grid md:grid-cols-2 gap-6"
  >

    <div>
      <label className="block text-sm font-medium mb-2">
        Donation Title
      </label>

      <input
        name="title"
        placeholder="Winter Clothes"
        value={formData.title}
        onChange={handleChange}
        className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Category
      </label>

      <input
        name="category"
        placeholder="Clothes, Books, Furniture..."
        value={formData.category}
        onChange={handleChange}
        className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Quantity
      </label>

      <input
        name="quantity"
        type="number"
        placeholder="10"
        value={formData.quantity}
        onChange={handleChange}
        className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Condition
      </label>

      <select
        name="condition"
        value={formData.condition}
        onChange={handleChange}
        className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <option>New</option>
        <option>Good</option>
        <option>Used</option>
      </select>
    </div>

    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-2">
        Pickup Address
      </label>

      <input
        name="pickupAddress"
        placeholder="Enter pickup address"
        value={formData.pickupAddress}
        onChange={handleChange}
        className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <div className="md:col-span-2">
      <label className="block text-sm font-medium mb-2">
        Description
      </label>

      <textarea
        rows="5"
        name="description"
        placeholder="Describe the items..."
        value={formData.description}
        onChange={handleChange}
        className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>

    <button
      type="submit"
      className="md:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
    >
      Create Donation
    </button>

  </form>
</div>


);
};

export default CreateDonationForm;
