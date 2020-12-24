import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import Container from "@material-ui/core/Container";

import { getSingleProduct } from "../../store/actions/products";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Nav from "../../components/Nav";
import Product from "../../components/Product";
import "./Product.css";

function SingleProduct(props) {
  const {
    getSingleProduct,
    error,
    loadingSingleProduct,
    singleProduct,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    document.title = `RN | ${singleProduct?.title}`;

    getSingleProduct(id);
  }, []);

  useEffect(() => {
    console.log("singleProduct ", singleProduct);
  }, [singleProduct]);

  return (
    <div className="Product">
      <Nav />
      <h2 className="subtitle">{singleProduct.title}</h2>
      <Container maxWidth="xl">
        {loadingSingleProduct ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <Error message="Le produit n'a pas pu être chargé. Veuillez réeesayer ultérieurement !" />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Product product={singleProduct} singleProduct={true} />
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
  loadingSingleProduct: state.products.loadingSingleProduct,
  singleProduct: state.products.singleProduct,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getSingleProduct,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
