import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';

const TopProductDetails = () => {
    const { product } = useParams();;
    debugger
    const trimmedProduct = product.trim().toLowerCase();

    const category = Products.find(cat =>
        cat.subProducts && cat.subProducts.some(subP => subP.title.toLowerCase().trim() === trimmedProduct)
    );


    const productDetails = category.subProducts.find(p => p.title.toLowerCase() === trimmedProduct);

    // let productDetails = null;
    // let category = null;

    // for (let cat of Products) {
    //     if (cat.subProducts) {
    //         productDetails = cat.subProducts.find(p => p.title === trimmedProduct);
    //         if (productDetails) {
    //             category = cat;
    //             break;
    //         }
    //     }
    // }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 product-image-container'>
                    <img src={productDetails.image} alt={productDetails.title} />
                </div>
                <div className='col-md-6 product-info '>
                    <div className='product-heading'>
                        <h2>{productDetails.title}</h2>
                    </div>
                    <div className='row product-rating'>
                        <div className="col-md-3 product-stars" style={{ borderRight: '2px solid #ddd' }} dangerouslySetInnerHTML={{ __html: productDetails.stars }}></div>
                        <div className="col-md-3 product-social-links">
                            <a href={productDetails.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={productDetails.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={productDetails.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="product-description">
                        <p>{productDetails.description}</p>
                    </div>
                    <div className="product-category">
                        <p>Category: {productDetails.category}</p>
                    </div>
                </div>
            </div>



        </div>


    );
};

export default TopProductDetails;