import React, { Component } from "react";


class Header extends Component {
  constructor(props) {
    super(props);

   
  }
  
  render() {
    return (
      <div>
       
          <div>
            <Navbar expand="lg" dark bg="dark" fixed="top" className="navbar">
              <Navbar.Brand href="#">
                {" "}
                <div className="navbar-logo">
                  {/* <img className="logo-image" src={im} /> */}
                  <h3 className="logo-image" style={{ color: "white" }}>
                    {" "}
                    <span style={{ color: "#0059ff" }}>Find</span>Home{" "}
                  </h3>
                </div>
              </Navbar.Brand>
              <Navbar.Toggler target="#navbarSupportedContent" />
              <Collapse navbar id="navbarSupportedContent">
                <Navbar.Nav ml="auto">
                  <Nav.Item active>
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active>
                    <Nav.Link href="/explore">Explore</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item active>
                    <Nav.Link href="/about">About</Nav.Link>
                  </Nav.Item>
                </Navbar.Nav>
                <Button
                  className="profile-button"
                  mr="sm-4"
                  data-toggle="modal"
                  data-target="#Modal"
                >
                  Create Profile
                </Button>
                <Logout />
              </Collapse>
            </Navbar>
            <Modal id="Modal" fade>
              <Modal.Dialog centered>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>
                      Register here (except class 2,3,4 all mandatory)
                    </Modal.Title>
                    <Modal.Close>
                      <span aria-hidden="true">&times;</span>
                    </Modal.Close>
                  </Modal.Header>
                 
                </Modal.Content>
              </Modal.Dialog>
            </Modal>
          </div> 
      </div>
    );
  }
}

export default Header;
