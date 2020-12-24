import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "@material-ui/core/Container";

import { getAllProducts } from "../../store/actions/products";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Nav from "../../components/Nav";
import Product from "../../components/Product";
import "./Products.css";

function Products(props) {
  const { getAllProducts, error, loadingAllProducts, products } = props;
  useEffect(() => {
    document.title = "RN | Produits";

    getAllProducts();
  }, []);

  return (
    <div className="Products">
      <Nav />
      <h2 className="subtitle">Produits</h2>
      <Container maxWidth="xl">
        {loadingAllProducts ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <Error message="Les produits n'ont pas pu être chargés. Veuillez réeesayer ultérieurement !" />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {products.map((product, index) => (
                  <Product product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.products.error,
  loadingAllProducts: state.products.loadingAllProducts,
  products: state.products.allProducts,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getAllProducts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Products);
