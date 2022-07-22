
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import Product from '../../../backend/src/models/Products';
import ProductCard from '../Components/productPage/ProductCard';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
    const navigate = useNavigate();

    function handleClick(e){
        let index = e.target.getAttribute("datasetindex");
        navigate("/product/"+index)
    }

    const [products, setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();
    const [search, setSearch] = useState();
    const containerStyle = {
    }
    const gridStyle = {
        display:"grid",
        gridTemplateColumns:"auto auto auto"
    }
    const shortDescription = (text ) => {
        let charCount = 180;
        let shortDescription = text.substring(0, charCount);
         return text < charCount ? text : shortDescription;
    }

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/api/products`)
            .then((response) => response.json());

        console.log(response)

        setProducts(response.products)
        setFilteredProducts(response.products)
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(()=> {
        if(products)
        {
            let filtered = products.filter(filterBySearch)

            setFilteredProducts(filtered)
        }
    }, [search])

    function filterBySearch(value) {
        return value.title.toLowerCase().includes(search.toLowerCase()) || value.id == search;
    }

    return (
        <div className="" style={containerStyle}>
            <h1> Product Details:</h1>
            <div style={{width:"100%"}}><Input onChange={(event)=> setSearch(event.target.value)} bsSize="lg" type="text" placeholder="Search.."/></div>
            <div style={gridStyle}>
                {filteredProducts && filteredProducts.map((product) =>
                <Card key={product.id} style={{width:"500px", border:"0px"}} className="m-3">
                <div style= {{height:"250px"}}>
                    <img style={{width:"auto", height: "100%"}} alt="Card image" src={product.image}/>
                </div>
                    <CardBody>
                        <CardTitle tag="h5">
                           {product.title}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6">
                            ${product.price}
                        </CardSubtitle>
                        <CardText>
                            {shortDescription(product.description)}
                        </CardText>
                        <div><small>Product id: {product.id}</small></div>
                        <Button datasetindex={product.id} onClick={handleClick}>
                            View Product
                        </Button>
                    </CardBody>
                </Card>
                )}
            </div>

        </div>
    )

}

export default ProductsPage;