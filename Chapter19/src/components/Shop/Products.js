import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: `p1`,
    price: 6,
    title: `My First Book`,
    description: `dest`
  },
  {
    id: `p2`,
    price: 5,
    title: `My 2 Book`,
    description: `222dest`
  }
]


{/* <ul>
<ProductItem
  title='Test'
  price={6}
  description='This is a first product - amazing!'
/>
</ul> */}

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          console.log(product);
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
