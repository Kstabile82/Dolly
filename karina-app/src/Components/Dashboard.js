import React, { Component } from "react";
import Modal from './Modal.js';

class Dashboard extends Component {
  constructor({ theText }) {
    super();
    this.state = {
      show: true,
      alert: theText
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1></h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>{this.state.alert}</p>
          </Modal>
        {/* <button type="button" onClick={this.showModal}>
          Open
        </button> */}
      </main>
    );
  }
}

export default Dashboard