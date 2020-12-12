import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "@material-ui/core/Container";

import Nav from "../../components/Nav";
import Product from "../../components/Product";
import { getAllProducts } from "../../store/actions/products";
import "./Products.css";

function Products(props) {
  useEffect(() => {
    document.title = "RN | Produits";

    props.getAllProducts();
  }, []);

  return (
    <div className="Products">
      <Nav />
      <h2 className="subtitle">Produits</h2>
      <Container maxWidth="xl">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {props.products.map((product, index) => (
            <Product product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.all,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Products);
