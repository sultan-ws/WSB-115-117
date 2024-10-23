import axios from "axios";
import React, { useState } from "react";
// import ColorPicker from "@rc-component/color-picker";
// import "@rc-component/color-picker/assets/index.css";
// import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
function Color() {
  const [color, setColor] = useState({});

  const setImage = () => {
    let imageFileInput = document.querySelector("#image_src");
    let imagePreview = document.querySelector("#image_preview");
    let colorCode = document.querySelector("#color_code");
    let color_picker = document.querySelector("#color_picker");
    imageFileInput.addEventListener("change", function () {
      const file = this.files[0];
      console.log(file);
      if (!file) return;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        imagePreview.src = this.result;
      });
      reader.readAsDataURL(file);

      const colorPicker = new window.EyeDropper();
      const colorSelector = document.querySelector("#colorPicker");
      colorSelector.addEventListener("click", () => {
        colorPicker
          .open()
          .then((res) => {
            colorCode.value = res.sRGBHex;
            color_picker.value = res.sRGBHex;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  };

  // const handleCreateColor = (e)=>{
  //   e.preventDefault();

  //   console.log({
  //     color: e.target.name.value,
  //     code:e.target.color_code.value
  //   })

  // }

  const handleCreateColor = ()=>{
   
    axios.post(`${process.env.REACT_APP_API_HOST}/api/admin-panel/color/create-color`, color)
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  return (
    <div className="w-[90%] bg-white mx-auto rounded-[10px] border my-[150px]">
      <div className="bg-[#f8f8f9] h-[50px] header w-full p-[12px] rounded-[10px_10px_0_0]">
        Add Colors
      </div>
      <form action="" method='post'>
      <div className="w-full p-[20px]">
        <label htmlFor="color">Color Name</label> <br />
        <input
          type="text"
          name="color"
          id="color"
          className="w-full p-[10px] focus:outline-none border my-[10px] rounded-[5px]"
          placeholder="Color Name"
          onChange={(e)=>{setColor({...color, name: e.target.value})}}
        />
        <label htmlFor="color_code">Color Code</label> <br />
        <input
          type="text"
          name="code"
          id="color_code"
          className="w-full p-[10px] focus:outline-none border my-[10px] rounded-[5px]"
          placeholder="Color Code"
          onChange={(e)=>{setColor({...color, code: e.target.value})}}
        />
        <label htmlFor="color">Color Picker</label> <br />
        <input
          type="color"
          name="color_picker"
          id="color_picker"
          className="focus:outline-none border my-[10px] rounded-[5px]"
        />
        <div className="w-[300px] my-[10px]">
          {/* <ColorPicker color={color} onChange={setColor} height={200} /> */}
          <span className="w-full h-[200px] object-contain my-[10px]">
            <img
              src=""
              alt="Select product"
              id="image_preview"
              width={300}
              height={200}
            />
          </span>
          <input
            type="file"
            name="image"
            id="image_src"
            className="category w-full border input rounded-[5px]"
            onClick={() => setImage()}
          />
          <span
            id="colorPicker"
            className="w-[100px] bg-[#5351c9] text-white cursor-pointer h-[30px] text-center rounded-[5px] box-border my-[30px] block border"
          >
            Pick Color
          </span>
        </div>
        <button type="button" onClick={handleCreateColor} className="bg-[#5351C9] text-white rounded-[5px]  w-[120px] h-[40px]">
         Add color
        </button>
      </div>
      </form>
    </div>
  );
}

export default Color;
