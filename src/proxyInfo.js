import React from "react";

export default class proxyInfo extends React.Component {
  render() {
    return (
      <div>
        <h1 className="ml-3"> Project: Orca</h1>
        <div className="alert alert-success" role="alert" id="alert-result" />

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text ml-2" id="basic-addon1">
              AWS
            </span>
          </div>
          <input
            id="key-id"
            type="text"
            className="col-md-4 ml-1 mr-1"
            placeholder="Access Key ID"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <input
            id="secret-access-key"
            type="text"
            className="col-md-4 ml-1 mr-1"
            placeholder="Secret Access Key"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button id="aws-key-save" type="button" className="btn btn-primary">
            Save
          </button>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text ml-2" id="basic-addon1">
              Google Cloud
            </span>
          </div>
          <input
            type="file"
            className="col-md-5 ml-1 mr-1"
            id="gc-secrets-file"
            accept=".json"
          />
          <button
            id="google-cloud-key-save"
            type="button"
            className="btn btn-primary ml-3"
          >
            Save
          </button>

          <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text ml-2" id="basic-addon1">
              Linode
            </span>
          </div>
          <input
            id="key-id"
            type="text"
            className="col-md-4 ml-1 mr-1"
            placeholder="Personal Access Token"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button id="aws-key-save" type="button" className="btn btn-primary">
            Save
          </button>
        </div>


        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text ml-2" id="basic-addon1">
              Upcloud
            </span>
          </div>
          <input
            id="key-id"
            type="text"
            className="col-md-4 ml-1 mr-1"
            placeholder="API KEY (user:pass)"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <button id="aws-key-save" type="button" className="btn btn-primary">
            Save
          </button>
        </div>



        </div>
        <div className="fixed-bottom mb-1 ml-2" />
        <div className="fixed-bottom mb-1 ml-2" id="version-number" />
      </div>
    );
  }
}
