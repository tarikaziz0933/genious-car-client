import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phoneNumber.value;
        const message = form.message.value;
        const email = user?.email || 'unregistered';

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message

        }

        if (phone.length < 10) {
            alert('Phone No. should be 10 characters longer');
        }
        else {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        alert('Order placed successfully')
                        form.reset();
                    }
                })
                .catch(err => console.error(err));

        }
    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">Your Order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full" required />
                    <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-20 w-full my-6" placeholder="Messge"></textarea>
                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;