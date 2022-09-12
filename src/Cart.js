import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

     } = useCart();

     if (isEmpty) return <h1 className='text-center'>No orders on this table</h1>
  return (
    <section className='py-4 container'>
        <div className='row justyfiy-content-center'>
            <div className='col-12'>
                <h5>Table ({totalUniqueItems}) total order: ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item, index) => {
                            return(
                                <tr key={index}>
                                <td>
                                    <img src={item.img} alt='' style={{height: '6rem'}} />
                                </td>
                                <td>{item.title}</td>
                                <td>€ {item.price}</td>
                                <td>Quantity: ({item.quantity})</td>
                                <td>
                                    <button className='btn btn-primary ms-2' onClick={() => updateItemQuantity( item.id, item.quantity -1)}>-</button>
                                    <button className='btn btn-primary ms-2' onClick={() => updateItemQuantity( item.id, item.quantity +1)}>+</button>
                                    <button className='btn btn-danger ms-2' onClick={() => removeItem( item.id)}>Remove from order</button>
                                </td>

                            </tr>

                            )
                            
                        })}

                    </tbody>
                    
                </table>

            </div>
            <div className='col-auto ms-auto'>
                <h2>total Price: € {cartTotal}</h2>
            </div>
            <div className='col-auto'>
                <button
                    className='btn btn-danger m-2'
                    onClick={() => emptyCart()}> Clear order</button>
                    <button className='btn btn-success m-2'>Payment</button>
            </div>
        </div>
    </section>
  )
}

export default Cart