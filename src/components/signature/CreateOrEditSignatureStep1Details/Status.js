import React from 'react';

export default class Status extends React.Component {
  render() {
    const status = ['Choose...', 'In process', 'In QA', 'In test', 'Published', 'Suspended'];

    return (
      <div className="col-lg-5 col-md-5 col-sm-10 col-xs-8">
        <h5>Status:</h5>
        <select className="form-control">
          {
            status.map((s, index) => {
              return <option key={index}>{s}</option>
            })
          }
        </select>

      </div>);
  }
}
