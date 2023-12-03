import './CartWidget.css'

function CartWidget() {
    return (
        <button type="button" className="btn btn-cart position-relative mx-3">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id='count-cart' className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                1
            </span>
        </button>
    )
}
export default CartWidget