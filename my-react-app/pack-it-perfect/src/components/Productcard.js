import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ProductCard = ({ categories }) => {
  const { categoryName } = useParams();
 
  const filteredCategories = categories.filter(category => category.category === categoryName);
  return (
    <div className="container-fluid" id="top-products">
      <div className="container">
      <br /><br />
       
        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h1 className="category-title" style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'last baseline', marginBottom: '40px' }}><span style={{ color: 'rgb(0, 0, 90)', marginLeft: '10px' }}>Our Products</span></h1>
            <div className="row" style={{marginTop:'80px'}}>
              {category.subProducts.length > 0 ? (
                category.subProducts.map((product, productIndex) => (
                  <div key={productIndex} className="col-md-3 mb-4">
                    <Link to={`/category/${categoryName}/product/${product.title}`}>
                    <button className='btn-productscard'>
                    
                    <div className="card product-card ">   
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                      />
                      <div className="card-body">
                      <div  className="card-title" >
                      <h5>{product.title}</h5>
                      </div>

                      
                      </div>
                    </div>
                   
                    </button>
                             </Link>
                  
                  </div>
                ))
              ) : (
                <p>No products available in this category.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
