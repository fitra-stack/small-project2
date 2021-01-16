const productLists = [{
    productId : 1,
    productDesc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit Tenetur dolor saepe, blanditiis modi perferendis reiciendis ", 
    productPrice : 20,
  },
  {
    productId : 2,
    productDesc : "Casual",
    productPrice : 21,

  },
  {
    productId : 3,
    productDesc : "Jeansssss",
    productPrice : 22,

  }]

const initialState = {
    products: productLists,
    product:[{
        productId : 0,
        productDesc : "",
        productPrice : "",
    }]
  }

const productReducer = (state = initialState, action) => {
    if (action.type === 'GET_ITEM') 
    {
        return {
            ...state,
            products: state.products,
        }
    }
    return state;
}
  
export default productReducer;