import React, { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';

const Chef = () => {
    const [datas,setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data => setData(data))
    },[])
    console.log(datas);
    return (
        <div className='w-full  pt-24 bg-[#212428]  py-5'>
            <h3 className='text-4xl text-center font-semibold text-teal-500 pb-20'>Our Chef</h3>
            <div className='w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {
                    datas.map(data=><ChefDetails key={data.id} data={data}></ChefDetails>)
                }
            </div>
        </div>
    );
};

export default Chef;