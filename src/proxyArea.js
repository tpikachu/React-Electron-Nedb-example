import React from "react";

export default class proxyArea extends React.Component {
  render() {
    return (
      <div>
        <div className="modal-body">
          <textarea
            className="form-control w-50 p-3 ml-3"
            rows="12"
            id="proxy-area"
          >
          </textarea>
        </div>
        <div
          className="fixed-bottom mb-1 ml-2 navbar-fixed-bottom"
          id="version-number"
        />
      </div>
    );
  }
}
