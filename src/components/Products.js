const Products = (props) => {
  return (
    <div className="productcard">
      <img src={props.img} alt="Product" />
      <p>{props.text}</p>
      <p>{props.price}</p>
      <button className="button">Buy Now</button>
    </div>
  );
};

export default Products;
