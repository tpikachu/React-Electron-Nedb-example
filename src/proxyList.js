import React from "react";

export default class proxyList extends React.Component {
  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert" id="alert-result" />
        <table id="task-list" className="table">
          <tr>
            <th>VPS </th>
            <th>Instance Name</th>
            <th>Zone</th>
            <th>Proxy </th>
            <th>User </th>
            <th>Password </th>
            <th>Status </th>
            <th>Speed </th>
          </tr>
        </table>
        <div
          className="fixed-bottom mb-1 ml-2 navbar-fixed-bottom"
          id="version-number"
        />
        <button className="btn btn-primary ml-3" id="copy-all">
          Copy All{" "}
        </button>
        <button className="btn btn-warning ml-3" id="test-all">
          Test All{" "}
        </button>
      </div>
    );
  }
}
