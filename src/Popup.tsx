
import { useEffect, useState } from "react";
//comment

interface Imgobj{
    big:string,
    small:string,
}
interface Props {
    isPopup:boolean,
    handleClick: boolean,
    click:(value:boolean)=>void,
    images:Imgobj[],
    initialPic:string,
    initialsmall:string,
  }


const Popup = ({isPopup,handleClick,click,images,initialPic,initialsmall}:Props) => {

    const setter = (big:string,small:string)=>{
        setImage(big)
        setClicked(small)
    }
    const [image,setImage] = useState<string>(initialPic)
    const [clicked,setClicked] = useState<string>(images[0].small)
    const [index,setIndex] = useState<number>(images.findIndex(img => img.big === initialPic))
    console.log(index)

  const previous = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      setImage(images[newIndex].big);
      setClicked(images[newIndex].small);
      return newIndex;
    });
  };
  const next = () => {
    setIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      setImage(images[newIndex].big);
      setClicked(images[newIndex].small);
      return newIndex;
    });
  };


    useEffect(()=>{
        setImage(initialPic)
        setClicked(initialsmall)
        setIndex(images.findIndex(img => img.big === initialPic));
    },[initialPic,initialsmall,images])
    return ( 
        <>
        <div className={isPopup ? "popup absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-neutral-500/70 z-20" : "lg:hidden"}>
        <div className="shoes lg:w-[30%] h-[30%] lg:h-[80%] flex flex-col items-center justify-center ">
            <svg onClick={()=>{click(!handleClick)}} className="lg:self-end cursor-pointer lg:mb-3 hidden lg:block" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd"/>
                </svg>
            <div className="slide w-[100%] mb-4 relative">
            <span onClick={previous} className="arrow previous top-[50%] left-[20px] lg:left-[-20px] flex justify-center items-center absolute w-10 h-10 rounded-full bg-slate-100">
                <svg className="mr-1" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
            </span>
            <img src={image} alt="shoe1" className="lg:rounded-[15px] h-[100%] w-[100%] " />
            <span onClick={next} className="arrow after absolute right-[20px] lg:right-[-20px] top-[50%] flex justify-center items-center w-10 h-10 rounded-full bg-slate-100">
                <svg className="ml-1" width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
            </span>
            </div>
            <div className="small-img hidden lg:flex h-[15%] w-[100%] justify-between">
                <div className={ clicked === images[0].small ? "small cursor-pointer clicked w-[20%] rounded-[15px] overflow-hidden" : "small cursor-pointer w-[20%] rounded-[15px] overflow-hidden hover:opacity-50" } onClick={()=>{setter(images[0].big,images[0].small)}}><img src="../assets/image-product-1-thumbnail.jpg" alt="small shoe" /></div>
                <div className={ clicked === images[1].small ? "small cursor-pointer clicked w-[20%] rounded-[15px] overflow-hidden" : "small cursor-pointer w-[20%] rounded-[15px] overflow-hidden hover:opacity-50" } onClick={()=>{setter(images[1].big,images[1].small)}}><img src="../assets/image-product-2-thumbnail.jpg" alt="small shoe" /></div>
                <div className={ clicked === images[2].small ? "small cursor-pointer clicked w-[20%] rounded-[15px] overflow-hidden" : "small cursor-pointer w-[20%] rounded-[15px] overflow-hidden hover:opacity-50" } onClick={()=>{setter(images[2].big,images[2].small)}}><img src="../assets/image-product-3-thumbnail.jpg" alt="small shoe" /></div>
                <div className={ clicked === images[3].small ? "small cursor-pointer clicked w-[20%] rounded-[15px] overflow-hidden" : "small cursor-pointer w-[20%] rounded-[15px] overflow-hidden hover:opacity-50" } onClick={()=>{setter(images[3].big,images[3].small)}}><img src="../assets/image-product-4-thumbnail.jpg" alt="small shoe" /></div>
            </div>
        </div>
        </div>
         </>
     );
}
 
export default Popup;