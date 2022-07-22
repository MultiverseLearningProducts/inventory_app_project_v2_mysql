import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import LinkButton from '../productPage/LinkButton';

function ProductInfo ({item}) {

  const navigate = useNavigate();

  const DeleteProduct = async (itemId) => {
    if(window.confirm('Are you sure you want to delete this item?')) {

      try {
        console.log('DELETE!');
        const response = await fetch(`http://localhost:8000/api/product/${itemId}`, {
        method: 'DELETE',
       // headers: {
        //  'SameSite': 'None'
        //}
      });
      const data = await response.json();

      console.log('Product deleted!', data);
      navigate('/');
      toast.success('Item was successfully deleted!');

      } catch (error) {
        console.log(error.message);
        toast.error(`Item was not deleted - error: ${error.message}`);
      }
      
    }
  };


function ProductCard({ item }) {
    return (
      <div className="description-card-actions">
        <LinkButton to={`/`} text={'Back'}/>
        <LinkButton className='link-btn-edit' to={`/edit-product/${item.id}`} text={'Update'} textColor={'#fff'} bgColor={'#00d912'}/>
        <button className='link-btn-delete' 
          onClick={() => DeleteProduct(item.id)}
          >
            Delete
          </button>
          {/* <LinkButton className='link-btn-edit' to={`/edit-product/${item.id}`} text={'Edit'} textColor={'#fff'} bgColor={'#00d912'}/>
        <button className='link-btn-update' 
        //  onClick={() => UpdateProduct(item.id)}
         >
          Update
          </button> */}
      </div>
      </div>
    )
}

export default ProductInfo;

