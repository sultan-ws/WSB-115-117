import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddPCategory = () => {

  const [parentCategories, setParentCategories] = useState([]);
  const [preview, setPreview] = useState('');
  
  const fetchCategory = () => {
    axios.get(`${process.env.REACT_APP_API_HOST}/api/admin-panel/parent-category/active-categories`)
      .then((response) => {
        console.log(response.data);
        setParentCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  useEffect(()=>{fetchCategory();},[]);

  const handleAddCategory = (e)=>{
    e.preventDefault();

    if(e.target.parent_category.value === 'default'){
      Swal.fire({
        title: "Parent category",
        text: "Please select parent category",
        icon: "question"
      });

      return
    }

    axios.post(`${process.env.REACT_APP_API_HOST}/api/admin-panel/product-category/create-category`, e.target)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  const handleImgPreview = (e)=>{
    const file = e.target.files[0];

    const reader = new FileReader;
    reader.readAsDataURL(file);
    
    reader.onload = () => {
      setPreview(reader.result)
    }
  }


  return (
    <div className="w-[90%] mx-auto my-[150px] bg-white border rounded-[10px]">
      <span className="bg-[#f8f8f9] rounded-[10px_10px_0_0] border-b p-[8px_16px] text-[20px] font-bold block text-[#303640]">
        Add Category
      </span>
      <div className="w-[90%] mx-auto my-[20px]">
        <form method="post" onSubmit={handleAddCategory}>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryName" className="block text-[#303640]">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              id="categoryName"
              placeholder="Category Name"
              className="input border p-1 w-full rounded-[5px] my-[10px]"
            />
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="slug" className="block text-[#303640]">
              Category Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              placeholder="Category Slug"
              className="input border p-1 w-full rounded-[5px] my-[10px]"
            />
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Category Image
            </label>
            <input
              type="file"
              name="thumbnail"
              id="categoryImg"
              className="input border w-full rounded-[5px] my-[10px] category"
              onChange={handleImgPreview}
            />

            {
              (!preview) ? ('') : (
                <img src={preview} className="w-[200px]" />
              )
            }
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryImg" className="block text-[#303640]">
              Parent Category
            </label>
            <select name="parent_category" id="" className="border w-full py-2 px-2 rounded-[5px] my-[10px] category input">
            <option value="default">-- Select Parent Category --</option>
              {
                parentCategories.map((parentCategory)=>(
                  <option key={parentCategory.id} value={parentCategory._id}>{parentCategory.name}</option>
                ))
              }
            </select>
          </div>
          <div className="w-full my-[10px]">
            <label htmlFor="categoryDesc" className="block text-[#303640]">
              Category Description
            </label>
            <textarea
              type="file"
              name="description"
              id="categoryDesc"
              className="input border w-full rounded-[5px] my-[10px]"
            />
          </div>
          <div className="w-full my-[10px]">
            <label
              htmlFor="categoryStatus"
              className=" text-[#303640] mr-[20px]"
            >
              Status
            </label>
            <input
              type="radio"
              name="status"
              id="categoryStatus"
              value={true}
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Display</span>
            <input
              type="radio"
              name="status"
              id="categoryStatus"
              value={false}
              className="input my-[10px] mx-[10px] accent-[#5351c9] cursor-pointer"
            />
            <span>Hide</span>
          </div>
          <div className="w-full my-[20px] ">
            <button type="submit" className="bg-[#5351c9] rounded-md text-white px-3 h-[35px]">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPCategory;

