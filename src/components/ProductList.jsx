import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { setProducts } from '../redux/productSlice';
import productData from '../data/product.json';
import styles from './ProductList.module.css'; // Import CSS module

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(setProducts(productData.products));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.title}>Available Products</h2>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>${product.price}</p>
              <div className={styles.buttonContainer}>
                <button 
                  className={styles.addToCartButton}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button 
                  className={styles.removeFromCartButton}
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
