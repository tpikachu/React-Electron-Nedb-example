import React from "react";
import {connect} from 'react-redux';

class ProxyHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Idle",
      options: [], 
      workers: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeOptions = this.changeOptions.bind(this);
  }
  componentDidMount()
  {
    
  }
  changeOptions = (e) => { 
    let vps = e.target.value;
    if (vps === "google-cloud") {
      let googleCloudZones = ["us-east1-b (SOUTH CAROLINA)", "us-east1-c (SOUTH CAROLINA)", "us-east1-d (SOUTH CAROLINA)",
      "us-east4-a (NORTH VIRGINIA)", "us-east4-b (NORTH VIRGINIA)", "us-east4-c (NORTH VIRGINIA)",
      "us-central1-a (IOWA)", "us-central1-b (IOWA)", "us-central1-c (IOWA)", "us-central1-d (IOWA)",
      "us-west1-a (OREGAN)", "us-west1-b (OREGAN)", "us-west1-c (OREGAN)", "us-west2-a (LOS ANGELES", 
      "us-west2-b (LOS ANGELES", "us-west2-c (LOS ANGELES)", "europe-north1-a (FINLAND)", "europe-north1-b (FINLAND)", 
      "europe-north1-c (FINLAND)", "europe-west1-b (BELGIUM)", "europe-west1-d (BELGIUM)", "europe-west1-c (BELGIUM)", 
      "europe-west2-a (LONDON)", "europe-west2-b (LONDON)", "europe-west2-c (LONDON)", "europe-west3-a (FRANKFURT)", 
      "europe-west3-b (FRANKFURT)", "europe-west3-c (FRANKFURT)", "europe-west4-a (NETHERLANDS)", "europe-west4-b (NETHERLANDS)", 
      "europe-west4-c (NETHERLANDS)", "northamerica-northeast1-a (MONTREAL)", "northamerica-northeast1-b (MONTREAL)", 
      "northamerica-northeast1-c (MONTREAL)"]
      this.setState({options: googleCloudZones})
    } else if (vps === "aws") {
      let awsZones = ["us-east-1 (N. Virginia)", "us-east-2 (Ohio)", "us-west-1 (N. California)", 
      "us-west-2 (Oregon)", "eu-central-1 (Frankfurt)", 
      "eu-west-1 (Ireland)", "eu-west-2 (London)", "eu-west-3 (Paris)", "eu-north-1 (Stockholm)",
      "ca-central-1 (Canada)"]
      this.setState({options: awsZones})
    }
  }
  // workerNumber,
  // vps,
  // proxiesReq,
  // zone,
  // user,
  // pass,
  // callback
  handleChange = param => e => {
    let newtask={
      VPS: this.selectVps.value,
      Instance_Name: "dfdf",
      Zone: this.zone.value,
      Proxy: this.numProxies.value,
      User: this.username.value,
      Password:this.password.value,
      Status: 0,
      Speed: 0
    }

    console.log(newtask);
    // proxyHomeModel.addWorkerToDB('1', selectVps, numProxies, zone, username, password, (result) => {
    //   console.log(result)

    // })
    this.props.dispatch({ type: 'ADD_TASK', data: newtask});
    this.inputElement.click();
    this.setState({status:"created"});
  };
  render() {
    console.log("asdf");
    return (
      <div>
        <h1 className="ml-3"> Project: Orca</h1>
        <button
          type="button"
          className="btn btn-primary ml-3 mb-3"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Start New Worker
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Proxies
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group ml-2">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                          >
                            VPS
                          </label>
                        </div>
                        <select onChange={this.changeOptions} className="custom-select" id="vps-type" ref={input => (this.selectVps = input)}>
                          {/* <!-- <option value="aws">AWS</option> --> */}
                          <option value="">Choose Zone</option>
                          <option value="google-cloud">Google Cloud</option>
                          <option value="aws">AWS</option>

                          {/* <!-- <option value="upcloud">Upcloud</option> --> */}
                        </select>
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Num Proxies</span>
                        </div>
                        <input
                          ref={input => (this.numProxies = input)}
                          id="number-of-proxies"
                          type="text"
                          className="form-control"
                          placeholder="1"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">User</span>
                        </div>
                        <input
                          ref={input => (this.username = input)}
                          id="proxy-user"
                          type="text"
                          className="form-control"
                          placeholder="username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Pass</span>
                        </div>
                        <input
                          ref={input => (this.password = input)}
                          id="proxy-pass"
                          type="text"
                          className="form-control"
                          placeholder="password"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">Zone </span>
                        </div>
                        <select id="proxy-zone" name="proxy-zone">
                          {this.state.options.map(zone => (
                            <option key={zone} value={zone} ref={input => (this.zone = input)}>
                              {zone}
                            </option>
                          ))}                        
                          </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  id="close-modal"
                  ref={input => (this.inputElement = input)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-2 mr-2"
                  id="submit-btn"
                  onClick={this.handleChange()}
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* alert banner */}
        <div className="alert alert-success" role="alert" id="alert-result">
          {this.state.status}
        </div>
        <table id="task-list" className="table">
          <thead>
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
          </thead>
          <tbody>
            {
              this.props.tasks.map(taskinfo => {
                return(
                  <tr key={taskinfo.VPS}>
                    <td>{taskinfo.VPS}</td>
                    <td>{taskinfo.Instance_Name}</td>
                    <td>{taskinfo.Zone}</td>
                    <td>{taskinfo.Proxy}</td>
                    <td>{taskinfo.User}</td>
                    <td>{taskinfo.Password}</td>
                    <td>{taskinfo.Status}</td>
                    <td>{taskinfo.Speed}</td>
                  </tr>
                );
              })
            }
          </tbody>
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

const mapStateToProps = (state) => {
  return {
      tasks: state.tasks
  }
}
export default connect(mapStateToProps)(ProxyHome);