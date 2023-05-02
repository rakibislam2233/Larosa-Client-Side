import React, { useState } from 'react';
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import { MdOutlineFavorite} from "react-icons/md";
const Recipes = ({rp}) => {
    const [like,setLike] = useState(false)
    console.log(like);
    console.log(rp);
    const {name,picture,ingredients,method,rating} = rp;
    return (
        <div className='border rounded-2xl p-2 space-y-3 flex flex-col justify-between'>
            <div>
            <img className='w-full h-80 rounded'  src={picture} alt="" />
            <h3 className='text-2xl'>{name}</h3>
            <p><span className='text-xl'>Ingredients</span> : <br /> {ingredients}</p>
            <p><span className='text-xl'><span className='text-xl'>Method: <br /> </span></span>{method}</p>
            </div>
         <div className='flex justify-between'>
         <h2 className='flex items-center gap-1'> <div className='flex gap-1 text-amber-500'>
                <BsStarFill></BsStarFill>  
                <BsStarFill></BsStarFill>  
                <BsStarFill></BsStarFill>  
                <BsStarFill></BsStarFill>  
                <BsStarHalf></BsStarHalf>  
                </div> {rating}</h2>
            <div>
                <button title='Your Favorite' className={`${like?"text-rose-500":''}`} onClick={()=>setLike(true)}><MdOutlineFavorite className='w-6 h-6'></MdOutlineFavorite></button>
            </div>
         </div>
        </div>
    );
};

export default Recipes;