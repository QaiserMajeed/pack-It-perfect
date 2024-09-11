import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';


const ProductDetails = () => {
    const { categoryName, product } = useParams();
    
    const filteredCategories = Products?.find(category => category.category === categoryName);
    const filterProducts = filteredCategories.subProducts.find(a => a.title === product);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 product-image-container'>
                    <img src={filterProducts.image} alt={filterProducts.title} />
                </div>
                <div className='col-md-6 product-info s'>
                    <div className='product-heading'>
                        <h2>{filterProducts.title}</h2>
                    </div>
                    <div className='row product-rating'>
                        <div className="col-md-3 product-stars" style={{borderRight:'2px solid #ddd'}} dangerouslySetInnerHTML={{ __html: filterProducts.stars }}></div>
                        <div className="col-md-3 product-social-links">
                            <a href={filterProducts.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={filterProducts.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={filterProducts.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="product-description">
                        <p>{filterProducts.description}</p>
                    </div>
                    <div className="product-category">
                        <p>Category: {filteredCategories.category}</p>
                    </div>
                </div>
            </div>


           
        </div>

        
    );
};

export default ProductDetails;