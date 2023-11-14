import './CartWidget.css'

function CartWidget() {
    return (
        <button type="button" class="btn position-relative mx-3">
            <i class="fa-solid fa-cart-shopping"></i>
            <span id='count-cart' class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                1
            </span>
        </button>
    )
}
export default CartWidget