import "./Product.css";
import Price from "./Price";
function Product ({title,idx}){
    let oldPrices =["12,083", "11,323","1,578" ,"599"];
    let newPrices =["8,999", "9,388","899","278"]; 
    let description = [["8,000 DPI","5 programmable button"],
    ["intutive surface", "design for i pad pro"],
    ["design for ipad pro","itutive surface"],
    ["wireless","optical oriented"]];
         return(
        <div className ="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice ={oldPrices[idx]} newPrice ={newPrices[idx]}/>
        </div>
    );

    }

export default Product;