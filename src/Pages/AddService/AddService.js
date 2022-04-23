import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
       <div className='w-50 mx-auto'>
           <div>
               <h2>please add a service</h2>
           </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='you name' {...register("name", { required: true})} />
                <input className='mb-3' placeholder='you description  ' {...register("description")} />
                <input className='mb-3' placeholder='you price ' type="number" {...register("price")} />
                <input className='mb-3' placeholder='photo url ' type="text" {...register("img")} />
                <input className='mb-3' type="submit" />
            </form>
       </div>
    );
};

export default AddService;