import { MouseEvent,useState } from "react";
import Popup from "./Popup";
import image from "./image"


interface Obj{
    id:number,
    picture: string,
    name: string,
    price: string,
    amount: number,
    total: string,
}
interface Props{
    add:(value:(prev:Obj[]) => Obj[])=> void
}

const Content = ({add}:Props) => {
    const [isPopup,setIsPopup] = useState(false)
    const [pic,setPic] = useState<string>(image[0].big)
    const [clicked,setClicked] = useState<string>(image[0].small)
    const [count,setCount] = useState<number>(0)
    const handleClick = (event:MouseEvent) =>{
        console.log(event)
        setIsPopup(!isPopup)
        setPic(pic)
    }
    const setter = (img:string,smallImg:string) =>{
        setPic(img)
        setClicked(smallImg)
    }
    // const idCount = (id:number)=>id += 1
    const price = (125.00).toFixed(2)
    const total = (Number(price) * count).toFixed(2)
    
    return ( 
        <>

        < Popup isPopup = {isPopup} handleClick = {isPopup} click ={setIsPopup} initialsmall = {clicked} initialPic ={pic} images = {image} />
        
        <div className="main-content font-khumba lg:h-[85%] w-full flex justify-center items-center">
            <div className="shoe-flex lg:h-[80%] lg:w-[90%] flex lg:flex-row flex-col ">
            <div className="shoes lg:w-[50%] h-full hidden lg:flex flex-col justify-between">
                <img onClick={handleClick} src={pic} alt="shoe1" className="lg:rounded-[15px] lg:w-[71%] lg:h-[80%] hover:cursor-pointer" />
                <div className="small-img hidden lg:flex h-[15%] w-[71%] justify-between">
                    <div className={ clicked === image[0].small ? "small clicked w-[20%] rounded-[15px] overflow-hidden cursor-pointer" : "small w-[20%] rounded-[15px] overflow-hidden hover:opacity-50 cursor-pointer" } onClick={()=>{setter(image[0].big,image[0].small)}}><img src="../assets/image-product-1-thumbnail.jpg" alt="small shoe" /></div>
                    <div className={ clicked === image[1].small ? "small clicked w-[20%] rounded-[15px] overflow-hidden cursor-pointer" : "small w-[20%] rounded-[15px] overflow-hidden hover:opacity-50 cursor-pointer" } onClick={()=>{setter(image[1].big,image[1].small)}}><img src="../assets/image-product-2-thumbnail.jpg" alt="small shoe" /></div>
                    <div className={ clicked === image[2].small ? "small clicked w-[20%] rounded-[15px] overflow-hidden cursor-pointer" : "small w-[20%] rounded-[15px] overflow-hidden hover:opacity-50 cursor-pointer" } onClick={()=>{setter(image[2].big,image[2].small)}}><img src="../assets/image-product-3-thumbnail.jpg" alt="small shoe" /></div>
                    <div className={ clicked === image[3].small ? "small clicked w-[20%] rounded-[15px] overflow-hidden cursor-pointer" : "small w-[20%] rounded-[15px] overflow-hidden hover:opacity-50 cursor-pointer" } onClick={()=>{setter(image[3].big,image[3].small)}}><img src="../assets/image-product-4-thumbnail.jpg" alt="small shoe" /></div>
                </div>
            </div>
            <div className="shoe-details px-7 lg:w-[45%] flex flex-col justify-center">
                <p className="lg:text-[16px] text-[12px] text-amber-600">SNEAKER COMPANY</p>
                <h1 className="lg:text-[40px] text-[25px] text-[#1d2025] font-bold leading-7 lg:leading-10 pt-2">Fall Limited Edition Sneakers</h1>
                <p className="lg:mt-7 mt-3 mb-4 text-sm lg:text-lg text-[#b6bdc8]">These low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole. they'll withstand Everything the weather can offer.</p>
                <div className="price mb-3 flex lg:flex-col lg:justify-normal justify-between lg:items-start items-center">
                    <span className="lg:text-[25px] font-extrabold">${price}<span className="ml-3 text-orange-500 rounded bg-red-200  text-[12px] px-2 font-bold ">50%</span></span>
                    <s className="lg:pt-1 lg:pb-6 text-[#b6bdc8]">$250.00</s>
                </div>
                <div className="add flex flex-col lg:flex-row">
                <div className="plus-minus flex justify-between lg:justify-center items-center mb-2 lg:mr-3 bg-gray-300 rounded-[12px]">
                <span className="ml-2 lg:ml-0 py-4 px-3 hover:cursor-pointer active:translate-y-2 inline" onClick={()=>{count > 0 && setCount(count - 1)}}>
                <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                        <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/>
                        </defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a"/></svg> 
                </span>
                    <span className=" w-8 text-center">{count}</span>
                    <span className="mr-2 lg:mr-0 py-4 px-3 hover:cursor-pointer active:translate-y-2" onClick={()=>{count < 10 && setCount(count + 1)}}>
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                        <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/>
                    </defs><use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b"/></svg>
                    </span>   
                </div>
                <button onClick={()=>{
                    count != 0 && 
                    add(prev => [...prev, {
                    id: prev.length,  // Use prev.length to generate a unique id
                    picture: image[0].small,
                    name: 'Fall Limited Edition Sneakers',
                    price: price,
                    amount: count,
                    total: total,
                  }]);
                    setCount(0);
                    }} className="inline-flex lg:justify-normal justify-center bg-amber-600 rounded-[12px] px-12 py-3 active:translate-y-2 lg:opacity-70 lg:hover:opacity-100">
                <svg className="lg:mr-3" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#000000" fillRule="nonzero"/></svg>
                    Add to cart
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Content;