"use client"
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsBagPlus } from "react-icons/bs";
import Login from '../modals/Login';
import Cart from '../pages/cart/page';
import MobileSideBar from '../modals/MobileSideBar';
import Link from 'next/link';
import { MenMegaMenu, OurStoryMegaMenu, ThisJustInMegaMenu, WomenMegaMenu } from './MegaMenu';
import TextSlider from './TextSlider';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParentCategories } from '../redux/slices/parentCategorySlice';
import { useRouter } from 'next/navigation';
import { fetchCart } from '../redux/slices/cartSlice';
import Cookies from 'js-cookie';

export default function Header() {
  const route = useRouter();
  let [loginStatus, setLoginStatus] = useState(false)
  let [cartStatus, setCartStatus] = useState(false)
  let [menuHover, setMenuHover] = useState(null)
  let [sidebarStatus, setSidebarStatus] = useState(false);
  const [totalProducts, setTotalProducts] = useState(null);

  const dispatch = useDispatch();
  
  const cartdata = useSelector((state)=> state.cart.value);

  useEffect(()=>{
    console.log('cart=',cartdata);

    if(cartdata.data){
      let total = 0;

      cartdata.data.forEach((cartproduct)=>{
        total += cartproduct.quantity;
      });

      setTotalProducts(total);

    }
  },[cartdata]);

  useEffect(() => {
   
    dispatch(fetchParentCategories());

    const cookiedata = Cookies.get('frank_user_115');

    if(!cookiedata) return;
    
    const userData = JSON.parse(cookiedata);

    dispatch(fetchCart(userData._id));



  }, [dispatch]);

  const categories = useSelector((state) => state.parentCategories.value);

  const closeCart = ()=>{
    setCartStatus(false);
   
  }

  const handlecartOpen = ()=>{
    const cookiedata = Cookies.get('frank_user_115');
    if(!cookiedata) return alert('Please log in');
    setCartStatus(true);
  }


  return (
    <div className='fixed top-0 z-[999999] w-full'>
      <TextSlider />
      <header className='shadow-md py-2 lg:py-1 px-2 sm:px-4 md:px-10 bg-white flex justify-between'>
        <div className='  flex gap-2 sm:gap-4 items-center  basis-[70%] md:basis-[20%] lg:basis-[15%]'>
          <RxHamburgerMenu onClick={() => setSidebarStatus(true)} className='sm:hidden block w-[22px] h-7' />
          <MobileSideBar sidebarStatus={sidebarStatus} />
          <span className='font-bold md:text-[18px] text-[15px]'>Frank And Oak</span>
        </div>
        <nav className=' basis-[30%] lg:basis-[84%] md:basis-[75%]  flex items-center justify-end lg:justify-between'>
          <div className='lg:block  hidden'>
            <ul className='flex gap-6 text-[15px] font-medium'>
              {
                categories.map((category, index) => (
                  <li key={index} onMouseOver={() => setMenuHover(index)} onMouseOut={() => setMenuHover(null)} className=' cursor-pointer hover:underline underline-offset-4 px-3 duration-500 p-2'>
                    <Link href={`/collections/${category.name}`}>{category.name}</Link>
                  {
                    menuHover === index && (
                      <ThisJustInMegaMenu subCategories={category.subCategories} menuHover={menuHover} setMenuHover={setMenuHover} />
                    )
                  }
                    
                  </li>
                ))
              }
              <li onMouseOver={() => setMenuHover(4)} onMouseOut={() => setMenuHover(0)} className='hover:bg-[#F9F9F9] cursor-pointer hover:underline underline-offset-4 px-3 duration-500 p-2'>Our Story
                <OurStoryMegaMenu menuHover={menuHover} setMenuHover={setMenuHover} />
              </li>
            </ul>
          </div>
          <ul className='flex gap-3 sm:gap-5'>
            <li>
              <Link href={"/pages/search"}>
                <CiSearch className='sm:w-7 sm:h-7 h-5 w-5' />
              </Link>
            </li>
            <li className='cursor-pointer' onClick={() => setLoginStatus(true)}>
              <FaRegUserCircle className='sm:w-[22px]  sm:h-7 h-5 w-[18px] ' />
              <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
            </li>
            <li>
              <Link href={"/user-dashboard/wishlist"}>
                <FaRegHeart className='sm:w-[22px] sm:h-7 h-5 w-[18px] cursor-pointer' />
              </Link>
            </li>
            <li className='cursor-pointer relative'>
              <div className='absolute bottom-[55%] left-[100%]'>{totalProducts}</div>
              <BsBagPlus className='sm:w-[22px] sm:h-7 h-5 w-[18px]' onClick={handlecartOpen} />
              <Cart cartStatus={cartStatus} setCartStatus={closeCart} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}


