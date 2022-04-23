import React, { useEffect, useState } from 'react';

const ManageSevices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete = id => {
        const procced = window.confirm('are you sure?')
        if (procced) {
            console.log(id);
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(serivce => serivce._id !== id)
                    setServices(remaining)
                }
                )
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>manage you servics</h2>
            {
                services.map(service => <div key={service._id}>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </div>)
            }
        </div>
    );
};

export default ManageSevices;