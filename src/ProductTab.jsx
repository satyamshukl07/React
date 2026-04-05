import Product from "./Product.jsx";
function ProductTab(){
    let options =[<li>"hi-tech"</li>, <li>"durable"</li>,<li>"fast"</li>];
    return (
        <>
        <Product title="Phone" price={30000} />
        <Product title="laptop" price={50000}/>
        <Product title="pen"price={100}/>
        </>  
    );
}

export default ProductTab;