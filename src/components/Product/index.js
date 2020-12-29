import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {
  addProductToCart,
  removeProductOfCart,
} from "../../store/actions/products";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function ImgMediaCard(props) {
  const classes = useStyles();
  const { addProductToCart, cart, product, removeProductOfCart } = props;
  const [isProductInCart, setIsProductInCart] = useState();
  const { id } = useParams();

  useEffect(() => {
    setIsProductInCart(cart.find((cartItem) => cartItem.id === product.id));
  }, [props]);

  return (
    <Card className={classes.root} style={{ marginBottom: "20px" }}>
      <Link to={`/product/${product.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`${product.title}`}
            height="300"
            image={product.image}
            title={`${product.title}`}
          />
          <CardContent>
            {!id && (
              <Typography gutterBottom variant="h5" component="h2">
                {product?.title?.length > 20
                  ? product?.title?.substring(0, 20) + "..."
                  : product?.title}
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary" component="p">
              {product?.description?.length > 100
                ? product?.description?.substring(0, 100) + "..."
                : product?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          size="small"
          color={isProductInCart ? "secondary" : "primary"}
          onClick={
            isProductInCart
              ? () => removeProductOfCart(product)
              : () => addProductToCart(product)
          }
        >
          {isProductInCart ? "Retirer du panier" : "Ajouter au panier"}
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.all,
  cart: state.products.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProductToCart,
      removeProductOfCart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard);
