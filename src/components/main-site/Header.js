import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import * as ROUTES from "../../constants/routes";

import img from "../../assets/img/header.jpg";
import logo from "../../assets/img/new-logo-to-be-replaced.png";

const styles = {
  mainNav: {
    paddingTop: "10px",
    paddingBottom: "10px",
    fontfamily: "Andale Mono, monospace",
    borderTop: "3px solid #f21131",
    backgroundColor: "#333",
  },
  mainNavBrand: {
    paddingLeft: "10px",
    "& span": {
      fontFamily: "Verdana",
      fontSize: "36px",
      fontStyle: "semibold",
      fontWeight: "600",
      margin: 0,
      lineHeight: 1,
      fontWeight: 800,
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#f21131",
      transition: "all .3s",
      "@media only screen and (max-width:992px)": {
        paddingLeft: "20px",
      },
      "@media only screen and (min-width:992px)": {
        paddingLeft: "50px",
      },
      "&:hover": {
        color: "#C30000",
        textDecoration: "none",
      },
    },
  },
  mainNavLinks: {
    fontSize: "18px",
    paddingRight: "20px",
  },
  mainNavLinksLink: {
    fontFamily: "Verdana",
    paddingTop: "2px",
    paddingLeft: "20px",
    color: "#fff",
    "&:hover": {
      color: "#f21131",
      textDecoration: "none",
    },
    "& span": {
      paddingLeft: "30px",
      color: "#fff",
      "&:hover": {
        color: "#f21131",
        textDecoration: "none",
      },
    },
  },
  mainNavLinksDropDowns: {
    paddingLeft: "30px",
    "& p": {
      textAlign: "center",
    },
  },
  mainNavLinksDropDownsSubLink: {
    fontFamily: "Verdana",
    fontWeight: "600",
    color: "#333",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: "#f21131",
    },
  },
  masthead: {
    marginBottom: "50px",
    background: "no-repeat center center",
    backgroundColor: "#868e96",
    backgroundAttachment: "scroll",
    position: "relative",
    backgroundSize: "cover",
    backgroundImage: `url(${img})`,
  },
  mastheadSiteHeading: {
    padding: "200px 0 150px",
    color: "#fff",
    "@media only screen and (min-width:768px)": {
      padding: "200px 0!important",
    },
  },
  loginIcon: {
    color: "white",
    fontSize: "30px",
    transition: "all .3s linear",
    "&:hover": {
      color: "#f21131",
      "-webkit-transform": "translateY(-2px)",
      transform: "translateY(-2px)",
      transition: "all .3s linear",
    },
  },
};

const Header = ({ classes }) => (
  <div>
    <div>
      <Navbar collapseOnSelect className={classes.mainNav} expand="lg">
        <Link to={ROUTES.LANDING}>
          <Navbar.Brand className={classes.mainNavBrand}>
            <img src={logo} alt="UPE Logo" width="50" height="auto"/>
            {/* <span>UPE</span> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarResponsive" className="ml-auto">
          <div className="ml-auto">
            <Nav className={classes.mainNavLinks}>
              <Link className={classes.mainNavLinksLink} to={ROUTES.LANDING}>
                <span>Home</span>
              </Link>
              {/* <Link className={classes.mainNavLinksLink} to={ROUTES.ABOUT}>
                <span>About</span>
              </Link> */}
              <Link className={classes.mainNavLinksLink} to={ROUTES.MEMBERS}>
                <span>Members</span>
              </Link>
              <Link className={classes.mainNavLinksLink} to={ROUTES.PROJECTS}>
                <span>Projects</span>
              </Link>
              <Link className={classes.mainNavLinksLink} to={ROUTES.CONTACT}>
                <span>Contact</span>
              </Link>
              {/* <Link className={classes.mainNavLinksLink} to={ROUTES.EVENTS}>
                <span>Events</span>
              </Link> */}
              {/* <Link className={classes.mainNavLinksLink} to={ROUTES.LOGIN}>
                <span>
                  <FontAwesomeIcon
                    className={classes.loginIcon}
                    icon={faUserCircle}
                  />
                </span>
              </Link> */}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>

    <div className={classes.masthead}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className={classes.mastheadSiteHeading} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withStyles(styles)(Header);
