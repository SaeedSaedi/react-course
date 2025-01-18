const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  return (
    <div className="col-3">
      <img src={productImage} className="w-100" alt=""></img>
      <h5>{productName}</h5>
      <p>price : {price}Rial</p>
      <button className="btn btn-info btn-sm">+</button>
      <span className="mx-1">0</span>
      <button className="btn btn-info btn-sm">-</button>
    </div>
  );
};
export default Product;
