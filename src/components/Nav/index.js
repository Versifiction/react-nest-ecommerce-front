import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from "@material-ui/icons/List";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MoreIcon from "@material-ui/icons/MoreVert";
import Delete from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import Popover from "@material-ui/core/Popover";

import {
  addProductToCart,
  changeCartProductQuantity,
  removeProductOfCart,
} from "../../store/actions/products";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

function PrimarySearchAppBar(props) {
  const { cart, changeCartProductQuantity, removeProductOfCart } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElPopover, setAnchorElPopover] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">RN</Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Produits" aria-label="produits">
              <IconButton aria-label="show products" color="inherit">
                <Badge color="secondary">
                  <Link to="/products">
                    <ListIcon />
                  </Link>
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton aria-label="show cart products number" color="inherit">
              <Badge badgeContent={props.products.length} color="secondary">
                <ShoppingBasketIcon
                  aria-describedby={id}
                  onClick={handleClick}
                />
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorElPopover}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Typography
                    className={classes.typography}
                    style={{ fontSize: "18px" }}
                  >
                    <h2 style={{ textAlign: "center" }}>Mon panier</h2>
                    {cart.length === 0 && (
                      <p>
                        Vous n'avez pas encore de produits dans votre panier !
                      </p>
                    )}
                    {cart &&
                      cart.map((product) => (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src={product.image}
                            alt="Produit"
                            style={{
                              height: "50px",
                              width: "50px",
                              margin: "0 8px",
                            }}
                          />
                          <div
                            style={{
                              margin: "0 8px",
                              width: "300px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                            }}
                          >
                            {product.title}
                          </div>
                          <div style={{ fontWeight: "bold", margin: "0 8px" }}>
                            {product.price}€
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                              <TextField
                                id="standard-number"
                                type="number"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                style={{ width: "25px" }}
                                onChange={(e) =>
                                  changeCartProductQuantity(
                                    e.target.value,
                                    product.id
                                  )
                                }
                                value={product.quantity}
                              />
                            </div>
                            <Delete
                              onClick={() => removeProductOfCart(product)}
                            />
                          </div>
                        </div>
                      ))}
                    {cart.length > 0 && (
                      <p style={{ textAlign: "right" }}>
                        Total:&nbsp;
                        {cart.reduce(
                          (accum, item) => accum + item.price * item.quantity,
                          0
                        )}
                        €
                      </p>
                    )}
                    <br />
                    <Link to="/cart" style={{ color: "blue" }}>
                      <p style={{ textAlign: "center" }}>
                        Aller sur la page du panier
                      </p>
                    </Link>
                  </Typography>
                </Popover>
              </Badge>
            </IconButton>
            <Tooltip
              title={props.isConnected ? "Mon compte" : "Me connecter"}
              aria-label={props.isConnected ? "compte" : "connexion"}
            >
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Link to="/login">
                  <AccountCircle />
                </Link>
              </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.products.cart,
  current: state.user.current,
  isConnected: state.user.isConnected,
  products: state.products.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addProductToCart,
      changeCartProductQuantity,
      removeProductOfCart,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);
