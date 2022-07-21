import {useParams} from 'react-router-dom';
import UpdateForm from '../components/productPage/UpdateForm';

import LinkButton from '../components/productPage/LinkButton';

function EditProduct() {

    const { id } = useParams();

  return (

    <div>
      <h1>Update Product:</h1>
      <UpdateForm productId={id}/>
      <LinkButton to={`/product/${id}`} text={'Back'}/>
    </div>

  )
}

export default EditProduct
