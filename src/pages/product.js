import '../css/style.css';
import '../App.css';
import catalog from '../img/catalog.png';
import catalog2 from '../img/catalog2.jpg';
import catalog3 from '../img/catalog3.jpg';
import footer from '../img/group.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';
import { connect } from 'react-redux';
import productReducer from '../reducers/productReducer';
import { Link } from 'react-router-dom';

// baris comment dibawah uda gak kepake karena uda pake reducer products, jadi uda gak local dari hal Infinity, ini dipake kalo local, nyambung di setProducts line 34
// const productLists = [{
//     productId : 1,
//     productDesc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit Tenetur dolor saepe, blanditiis modi perferendis reiciendis Nostrum quasi suscipit vitae ducimus harum culpa et distinctio sequi voluptas maiores", 
//     productPrice : 20,
// },
// {
//     productId : 2,
//     productDesc : "Casual",
//     productPrice : 21,

// },
// {
//     productId : 3,
//     productDesc : "Jeans",
//     productPrice : 22,

// }]
const Product = ({ products,count, addItem, minItem, getItem }) => {
    // baris dibawah ini uda gak kepake soalnya uda ambil dari productReducer, cek products di mapStateToProps atau di param baris atas ini
    // const [products, setProducts] = useState(productLists);
    const [productIndex, setProductIndex] = useState(0);
    return(
        <div>
            <div className="container-full-product">
                <br/>
                <div className="container" style={{ marginTop: 30, marginBottom: 55 }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src= { productIndex === 0 ? catalog : productIndex === 1 ? catalog2 : catalog3 }  style={{ width: 523, height: 567 }}  alt="" />
                                {/* <img src= { products.productId === 1 ? catalog : catalog2 }  style={{ width: 523, height: 567 }}  alt="" /> */}
                                {productIndex !== 0 && (
                                    <button className="btn-shop x" onClick={() => setProductIndex(productIndex - 1 )}>&#8249;</button>
                                )}
                                {productIndex !== products.length - 1 && (
                                    <button className="btn-shop y" onClick={() => setProductIndex(productIndex + 1 )}> &#8250;</button>
                                )}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6" >
                                    <FontAwesomeIcon icon={faShoppingCart} style={{float: "right" , marginRight : 27 }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md" style={{borderRight: 1 , borderRightColor: "#E7F0F2" }}>
                                    <Link to="/" style={{ textDecoration: 'none'}}>
                                        <p className="go" style={{color: 'black'}} >GO BACK</p>  
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="color">Color</p>
                                    <p className="item">Item Type / Name</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <p className="price">${products[productIndex].productPrice}</p>
                                    <p className="normal-price">$39.99</p>
                                    <p className="content">Kacamata tampan dan berani</p>
                                    <p className="desc">{products[productIndex].productDesc}</p>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <p className="size">Size: </p>
                                        </div>
                                        <div className="col-md-3">
                                            {/* <div className="form-group"> */}
                                                <select className="form-control" id="size">
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                </select>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    
                                    <p className="size" style={{ textAlign: 'right' , marginBottom: 0 , paddingRight : 0 }}>Mens</p>
                                    <p className="size" style={{ textAlign: 'right' , marginBottom: 0 , paddingRight : 0 }}>100% Cotton</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <button className="btn-shop" style={{paddingTop: 14 , paddingBottom : 14, paddingLeft : 33, paddingRight : 33 }} onClick={() => addItem()}>ADD TO CART</button>
                                    <p>{count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container-fluid" style={{ marginTop : 0 }}>
                <div className="row">
                    <div className="footer">
                        <img src={footer} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (props) => {
    console.log('tes', props)
    return {
      count: props.add.counter,
      products: props.product.products
    }
  }
  
  // adalah membuat sebuah function untuk memanggil redux action
  const mapDispatchtoProps = (dispatch) => {
    return {
      addItem: () => dispatch({
        type: 'ADD'
      }),
      minItem: (value) => dispatch({
        type: 'MIN',
        value,
      }),
      getItem: (value) => dispatch({
        type: 'GET_ITEM',
        value,
      })
    }
  }
  
  // connect = menghubungkan & inisialisasi props store dan function redux
export default connect(mapStateToProps, mapDispatchtoProps)(Product);
//   export {Product}