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
        <div className='w-full  pt-24 bg-gray-900'>
            <h3 className='text-4xl text-center font-semibold text-teal-500'>Our Chef</h3>
            <div>
                {
                    datas.map(data=><ChefDetails key={data.id} data={data}></ChefDetails>)
                }
            </div>
        </div>
    );
};

export default Chef;