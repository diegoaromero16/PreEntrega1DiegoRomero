import { useCartContext } from '../Context/CartContext'
import './CartWidget.css'

const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
        <button type="button" className="btn btn-cart position-relative mx-3">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id='count-cart' className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                {totalProducts() || cart}
            </span>
        </button>
    );
};
export default CartWidget