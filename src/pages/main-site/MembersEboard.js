import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/main-site/Header";
import Footer from "../../components/main-site/Footer";
import MemberListEboard from "../../components/main-site/MemberListEboard";

import "../../styles/main-site/main.css";

const MembersEboard = () => {
  return (
    <div className="landing">
      <Header />

      <MemberListEboard />

      <Footer />
    </div>
  );
};

export default withRouter(MembersEboard);