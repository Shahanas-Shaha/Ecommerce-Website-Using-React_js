import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import dellImgUrl from '../assets/images/shop/del.png'
import CheckOutPage from './CheckOutPage'

const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        //fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems)
    }, []);

    //calculate price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    //handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1
        setcartItems([...cartItems])

        //update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setcartItems([...cartItems])

            //update local storage with new cart items
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }

    // handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)

        //update new cart
        setcartItems(updatedCart);

        updateLocalStorage(updatedCart);
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    //cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    //order total
    const orderTotal = cartSubtotal;
    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"cart page"} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                {/* table body */}
                                <tbody>
                                    {
                                        cartItems.map((item, indx) => (
                                            <tr key={indx}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>

                                                <td className="cat-price"> $ {item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease
                                                            (item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box'
                                                            name='qtybutton' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease
                                                            (item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={dellImgUrl} alt="" />
                                                    </a>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* cart top ends */}

                        {/* cart bottom */}
                        <div className="cart-bottom">
                            {/* Checkout */}
                            <div className="cart-checkout-box">
                                <form className="coupon">
                                    <input className=' cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon code...' />
                                    <input type="submit" value={"Apply Coupon"} />
                                </form>

                                <form className='cart-checkout'>
                                    <input type="submit" value={"Update Cart"} />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/* checkout box end */}

                            {/* shopping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shiping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value='ind'>India</option>
                                                    <option value='Uk'>United Kingdom</option>
                                                    <option value='us'>United States</option>
                                                    <option value='Pak'>Pakistan</option>
                                                    <option value='bd'>Bangladesh</option>
                                                    <option value='Np'>Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value='ind'>New Delhi</option>
                                                    <option value='Uk'>London</option>
                                                    <option value='us'>New York</option>
                                                    <option value='Pak'>Dhaka</option>
                                                    <option value='bd'>Karachi</option>
                                                    
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name="postcode"  id="postcode"  placeholder="Postcode / ZIP *" className='cart-page-input-text'/>
                                            <button type='submit'>Update Address</button>
                                        </div>
                                    </div>

                                    {/* Right section */}
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                           <h3>Cart Totals</h3>
                                           <ul className='lab-ul'>
                                             <li>
                                                <span className="pull-left">Cart Subtotal</span>
                                                <p className="pull-right">$ {cartSubtotal}</p>
                                             </li>
                                             <li>
                                                <span className="pull-left">Shipping and Handling</span>
                                                <p className="pull-right">Free Shipping</p>
                                             </li>
                                             <li>
                                                <span className="pull-left">Order Total</span>
                                                <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                                             </li>
                                           </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
