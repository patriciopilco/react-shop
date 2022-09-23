import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {

	const { addToCard } = useContext(AppContext);

    const handleClick = (itemProduct) => {
		console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        addToCard(itemProduct);
    }
    return (
        <div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ () => handleClick(product) }>
					<img src={ addToCartImage } alt="" />
				</figure>
			</div>
		</div>
    );
};

export default ProductItem;