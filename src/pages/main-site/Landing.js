import React, { Component }from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Header from "../../components/main-site/Header";
import Footer from "../../components/main-site/Footer";
// import projectsIMG from "../../assets/img/projects.jpg";
import aboutFiller from "../../assets/img/homepage-about-filler.png";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../../api/Firebase";
import "../../styles/main-site/main.css";
import { compose } from "recompose";
import { withStyles } from "@material-ui/styles";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const styles = {
	bobble: {
		backgroundColor: "#e8e88c",
		fontWeight: "600",
		fontSize: "20px",
		borderRadius: "10px",
		textAlign: "center",
		paddingBottom: "1px",
		paddingTop: "15px",
	},
	testimonialCard: {
		fontFamily: 'Verdana',
		fontWeight: "500",
	}
};

class MainLandingBase extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			displayApplyPage: false,
			displayInterestForm: false,
		}
	}
	
  getData = () => {
		this.props.firebase.generalSettings().get().then((querySnapshot) => {
			const data = querySnapshot.data();
			
			this.setState({displayApplyPage: data.displayApplyPage, displayInterestForm: data.displayInterestForm});
		}).catch((err) => {
			console.log(err);
		});
  }
  
  componentDidMount() {
    this.getData();
  }
	
	render() {
		const { classes } = this.props;
		const { displayApplyPage, displayInterestForm } = this.state;
	
		const BobbleForm = () => {
			return (
				<Container className={classes.bobble}>
					<p> Interested in joining UPE? Click <a href="https://upe.bu.edu/inquisitor/interest-form">here</a>. </p>
				</Container>
			);
		};
	
		const BobbleApply = () => {
			return (
				<Container className={classes.bobble}>
					<p> We are now accepting applications! Click <a href="https://upe.bu.edu/inquisitor/apply">here</a> to apply. </p>
				</Container>
			);
		};
	
		const DisplayBobble = () => {
			if (displayApplyPage) {
				return (
					<Row>
						<Col md={5} />
						<Col md={7}>
							<BobbleApply />
						</Col>
					</Row>
				);
			} else if (displayInterestForm) {
				return (
					<Row>
						<Col md={6} />
						<Col md={6}>
							<BobbleForm />
						</Col>
					</Row>
				);
			} else {
				return (<> </>);
			}
		};
		
		return (
			<div className="landing">
				<Header />

				<Container>
					
					<DisplayBobble />
					
					<Row>
						<Col md={12}>
							<div className="title text-center">
								<h1>Who Are We?</h1>
							</div>
						</Col>
					</Row>

					<Row>
						<Col md={1} />

						<Col md={5}>
							<img src={aboutFiller} alt="UPE Projects" width="400" />
						</Col>

						<Col md={6}>
							<div className="bodyText text-justify">
								<p>
									Upsilon Pi Epsilon (UPE) at BU is an honor society
									dedicated to promoting excellence in technical and
									computing disciplines. UPE at BU will help prepare
									members for the industry through professional de-
									velopment, meaningful and interesting projects,
									and a supportive professional network.
								</p>
								<p>
									UPE BU members are both undergraduate and gra-
									duate students from BU who are either actively
									studying information techniologies and computing
									disciplines or have shown exceptional interest or
									talent in them.
								</p>
							</div>

							<div className="buttonBlock text-center">
								<Button className="btn btn-about">
								<Link className="white-text" to={ROUTES.MEMBERS}>
									Meet Us
								</Link>
								</Button>
							</div>
						</Col>

						<Col md={2} />
					</Row>

					<Row>
						<Col md={1} />

						<Col md={12}>
							<div className="title text-center">
								<h1>Our Organization</h1>
							</div>
						</Col>

						<Col md={12}>
							<div className="bodyText text-justify">

							<p>
								Our main objective is to bridge the gap betweentheoretical
								and practical experience at Boston University. We
								will provide career advice on how to get useful internships
								and jobs, give a sense of community, develop a
								professional network, and provide opportunities for
								relevant and practical experience.
							</p>

							</div>
						</Col>
					</Row>
					<Row>

						<Col md={12}>
							<div className="bodyText text-justify">
							<p>
								We will adhere to the following core values to maintain an
								inclusive and innovative environment to achieve our goals.
							</p>
							<ul>
								<li>
								<strong>Make Computer Science Fun</strong> by fostering a
								cooperative and productive environment.
								</li>
								<li>
								<strong>Innovate Across Technical Sectors</strong> while
								utilizing and contributing to new emerging technologies. We
								will mentor one another and create impactful and relevant
								projects.
								</li>
								<li>
								<strong>Ensure Diversity of Thought</strong> for successful
								and consistent innovation by modeling real work environ- ments
								with various people.
								</li>
								<li>
								<strong>Utilize and Provide New Resources</strong> by
								cooperating with existing groups on campus and contributing
								free and highly relevant public events in addition to
								forming mutually beneficial relationships with companies.
								</li>
								<li>
								<strong>Transparency</strong> in how we evaluate applicants to
								create an aura of trust and inclusivity while learning from
								any mistakes we make.
								</li>
							</ul>
							</div>
						</Col>

						<Col md={1} />
					</Row>
					<Row>
						<Col md={1} />

						<Col md={12}>
							<div className="title text-center">
								<h1>Hear from Our Members</h1>
							</div>
						</Col>

						<div class="card-deck">
							
						<div class="card">
							<div class="card-body">
								<blockquote class="blockquote mb-0" className={classes.testimonialCard}>
								<p>
									Collaboration with members in UPE has allowed me to
									learn what it takes to land an internship or get a
									job in the computer science field. It has also
									empowered me to grow academically as well through
									help and tips from my fellow UPE members.
								</p>
								<footer class="blockquote-footer">Matt Henriksen, Class of 2024</footer>
								</blockquote>
							</div>
						</div>
						
						<div class="card">
							<div class="card-body">
								<blockquote class="blockquote mb-0" className={classes.testimonialCard}>
								<p>
									UPE has provided me with a great community of CS
									students at BU! It's so nice to have a group of people
									that I can talk to about anything CS related, whether
									it be classwork, tips for getting internships, courses
									to take in the future, or anything else.
								</p>
								<footer class="blockquote-footer">Grace Elias, Class of 2025</footer>
								</blockquote>
							</div>
						</div>
						
						<div class="card">
							<div class="card-body">
								<blockquote class="blockquote mb-0" className={classes.testimonialCard}>
								<p>
									Lorem ipsum whatsa hoosie filler filler UPE is great
									filler filler lorem filler BU is indeed in boston filler
									filler still need some more testimonials to put here filler
									filler ipsum filler filler house 0 is the best filler
									filler filler
								</p>
								<footer class="blockquote-footer">John Smith, Class of 1892</footer>
								</blockquote>
							</div>
						</div>
						
						</div>
					</Row>
				</Container>

				{/* <Container>
					<Row>
						<Col md={12}>
							<div className="title text-center">
								<h1>Our Projects</h1>
							</div>
						</Col>
					</Row>

					<Row>
						<Col md={1} />

						<Col md={4}>
							<img src={projectsIMG} alt="UPE Projects" width="400" />
						</Col>

						<Col md={5}>
							<div className="bodyText text-justify">
								<p>
									Both UPE as an organization and each of our dedicated members
									are constantly working on amazing projects both related to the
									organization or otherwise!
								</p>
							</div>

							<div className="buttonBlock text-center">
								<Button className="btn btn-about">
								<Link className="white-text" to={ROUTES.PROJECTS}>
									See Projects
								</Link>
								</Button>
							</div>
						</Col>

						<Col md={2} />
					</Row>
				</Container> */}

				<Footer />
			</div>
		);
	}
};

const MainLanding = compose(
	withFirebase, 
	withStyles(styles),
	withRouter
)(MainLandingBase);

export default MainLanding;
