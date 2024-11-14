"use client"
import { BsArrowLeft } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { fetchCart } from "@/app/redux/slices/cartSlice";

export default function Cart({cartStatus,setCartStatus}) {
const [carts, setCarts] = useState([]);
const [filepath, setFilePath] = useState('');
const [items, setItems] = useState(0);
const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const cartdata = useSelector((state)=> state.cart.value);

  useEffect(() => {
    const cookiedata = Cookies.get('frank_user_115');

    if(!cookiedata) return;
    
    const userData = JSON.parse(cookiedata);

    dispatch(fetchCart(userData._id));

  }, [dispatch]);

useEffect(()=>{
  if(cartdata.data) setCarts(cartdata.data);
  if(cartdata.filepath) setFilePath(cartdata.filepath);
  if(cartdata.data) setItems(cartdata.data.length);

  if(cartdata.data){
    let total = 0;
    cartdata.data.forEach((cartproduct)=>{
      total += cartproduct.product.price * cartproduct.quantity;
    });

    setAmount(total);
  }
},[cartdata]);  


  return (
    <>
    <section className={`${cartStatus ? "opacity-100 visible" : "opacity-0 invisible"} duration-500`}>
    <div className="bg-[rgba(0,0,0,0.6)] border border-red-700 fixed top-0 z-[9999999] w-full min-h-screen">
      <div className='lg:w-[38%] w-full  fixed top-0 right-0 z-[999999] bg-white'>
        <div onClick={setCartStatus} className='py-3 px-6 flex items-center gap-2 bg-[#F9F9F9] cursor-pointer'>
          <BsArrowLeft className='font-bold' />
          <div className='text-sm font-semibold'>Contine Shopping</div>
        </div>
        <div className=' bg-black text-white text-[12px] text-center font-bold py-1.5'>Free shipping on orders $99+ and free returns</div>
        <div className='md:px-8 px-4 lg:h-screen h-full overflow-y-scroll pb-[200px]'>

          {
            carts.map((cartproduct, index)=>(
              <CartProducts key={index} cartproduct={cartproduct} filepath={filepath} />
            ))
          }
        </div>
        <div className="sticky bottom-0 px-8 bg-[#f9f9f9] py-4">
          <div className="flex items-center justify-between">
          <div className="text-[18px] font-semibold">Subtotal <span className="text-[14px] font-semibold text-customGray">({items} items)</span></div>
          <div className="text-[18px] font-semibold">₹ {amount}</div>
          </div>
          <Link href="/checkouts">
          <button className="text-[20px] hover:shadow-[5px_5px_0px_0px_#DDD] font-semibold flex justify-center items-center gap-2 text-white bg-black p-3 w-full mt-5">Secure Checkout <IoLockClosedOutline size={20} /></button>
          </Link>
        </div>
        <div>
        </div>
      </div>
      </div>
      </section>
      </>
  )
}

const updateQuantity = (e)=>{
  console.log(e.target.textContent, e.target.value)
}

function CartProducts({cartproduct, filepath}) {
  return (
    <div className='grid grid-cols-[25%_auto] gap-3 py-5 border-b border-customBorder'>
            <img className='w-full' src={filepath + cartproduct.product.thumbnail} alt="" />
            <div className='flex flex-col justify-between'>
              <div>
                <div className='flex items-center justify-between'>
                <h5 className='text-sm font-semibold'>{cartproduct.product.name}</h5>
                <MdClose size={20} />
                </div>
                <div className='font-semibold text-[12px] text-customGray'>Size: {cartproduct.size.name}</div>
                <div className='text-[12px] mt-1.5 text-customGray font-medium flex items-center gap-1 underline underline-offset-2'>Move to Wishlist <CiHeart size={16} /></div>
              </div>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <button disabled={cartproduct.quantity === 1}
                   className='px-2.5 py-0.5 text--[20px] border border-customBorder' value={cartproduct._id} onClick={updateQuantity}>-</button>
                  <button className='px-2.5 py-0.5 border border-customBorder'>{cartproduct.quantity}</button>
                  <button className='px-2.5 py-0.5 text--[20px] border border-customBorder' value={cartproduct._id} onClick={updateQuantity}>+</button>
                </div>
                <div className='text-[15px] font-semibold'>₹ {cartproduct.product.price}</div>
              </div>
            </div>
          </div>
  )
}
