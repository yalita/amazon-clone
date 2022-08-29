import React from 'react'
import Header from '../Header';
import { useStateValue } from '../StateProvider';
import '../styles/checkout.css'
import CheckoutProduct from '../CheckoutProduct';
import Subtotal from '../Subtotal';
import CurrencyFormat from 'react-currency-format';

const Checkout = () => {
    const [{ basket }] = useStateValue();
    return (
        <div>
            <Header />
            <div className='checkout'>
                <div className='checkout_left'>
            <img className='checkout_img' src='https://static.vecteezy.com/system/resources/previews/001/868/716/non_2x/credit-card-online-payment-concept-banner-free-vector.jpg' />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2>Your shopping basket</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className='checkout_right'>
                    <Subtotal />
                </div>
            )}
            </div>
        </div>
    )
}

export default Checkout;