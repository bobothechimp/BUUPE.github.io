import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { withStyles } from "@material-ui/styles";
import MemberCard from "./MemberCard.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { withFirebase } from "../../api/Firebase";
import { compose } from "recompose";

const styles = {
  listings: {
    paddingBottom: "100px",
  },
};

class MemberListEboardBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eboard: [],
      members: null,
    };
  }

  componentDidMount() {
    this.getEboard();
  }

  getEboard() {
    this.props.firebase
      .getEboard()
      .then((querySnapshot) => {
        const eboard = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ eboard });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }

  render() {
    const { classes } = this.props;

    const eboard = this.state.eboard.map((item, index) => (
      <MemberCard data={item} key={index} pos={true} />
    ));
	
    return (
      <div>
        <Container>
          <Row>
            <Col className="title text-center">
              <h1>Officers</h1>
            </Col>
          </Row>
          <Row className={classes.listings}>{eboard}</Row>
		</Container>
      </div>
    );
  }
}
const MemberListEboard = compose(withFirebase, withStyles(styles))(MemberListEboardBase);

export default MemberListEboard;
