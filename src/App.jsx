import React from "react";
import dataModified from "./dataModified"
import "react-rangeslider/lib/index.css";
import "./App.css";
import "react-input-range/lib/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import InputRange from "react-input-range";

import { MDBTable, MDBTableBody, MDBBtn } from "mdbreact";

class App extends React.Component {
  state = {
    data: null,
    fields: null,
    search0: "",
    search: "",
    search2: "",
    search4: "",
    search3: { min: 0, max: 0 },
    search5: "",
    search6: "",
    search7: "",
    search8: "",
    search9: "",
    search10: "",
    search11: "",
    search12: "",
    search13: "",
    search14: "",
    search15: "",
    showFilter: true
  };

  componentDidMount() {
    this.setState({ data: dataModified });
  }

  getColData = (data) => {
    console.log(data)
    alert(JSON.stringify(data))
  }

  render() {

    let tablePropertyNames = null
    let max1 = 100;
    let filteredData = null;
    let filtForMax1 = [];
    
    if (this.state.data !== null) {
      const { data } = this.state;
      tablePropertyNames = Object.keys(this.state.data[0]);
      
      // FILTERING FOR EACH ROW ITEM
      filteredData = data.filter(item => {
        if (
          item.instanceType.toLowerCase().includes(this.state.search0) ||
          item.instanceType.toUpperCase().includes(this.state.search0)
        ) {
          return item;
        }
      });

      filteredData = filteredData.filter(item => {
        if (
          item.family.toLowerCase().includes(this.state.search) ||
          item.family.toUpperCase().includes(this.state.search)
        ) {
          return item;
        }
      });

      filteredData = filteredData.filter(item => {
        if (
          item.ecu.toLowerCase().includes(this.state.search2) ||
          item.ecu.toUpperCase().includes(this.state.search2)
        ) {
          return item;
        }
      });

      if (this.state.search3.max > 0) {
        filteredData = filteredData.filter(item => {
          if (
            Number(item.vcpu) >= this.state.search3.min &&
            Number(item.vcpu) <= this.state.search3.max
          ) {
            return item;
          }
        });
      }
      filteredData = filteredData.filter(item => {
        if (
          item.physicalProcessor.toLowerCase().includes(this.state.search4) ||
          item.physicalProcessor.toUpperCase().includes(this.state.search4)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item.memory.toLowerCase().includes(this.state.search5) ||
          item.memory.toUpperCase().includes(this.state.search5)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item.instanceStorage.toLowerCase().includes(this.state.search6) ||
          item.instanceStorage.toUpperCase().includes(this.state.search6)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item.networkPerformance.toLowerCase().includes(this.state.search7) ||
          item.networkPerformance.toUpperCase().includes(this.state.search7)
        ) {
          return item;
        }
      });
            filteredData = filteredData.filter(item => {
        if (
          item.processorArchitecture.toLowerCase().includes(this.state.search8) ||
          item.processorArchitecture.toUpperCase().includes(this.state.search8)
        ) {
          return item;
        }
      });
        filteredData = filteredData.filter(item => {
        if (
          (item.onDemandHourlyPrice.currency || item.onDemandHourlyPrice.value).toLowerCase().includes(this.state.search9) ||
          (item.onDemandHourlyPrice.currency+" "+ item.onDemandHourlyPrice.value).toLowerCase().includes(this.state.search9) ||
          (item.onDemandHourlyPrice.currency+" "+ item.onDemandHourlyPrice.value).toUpperCase().includes(this.state.search9) ||
          (item.onDemandHourlyPrice.currency || item.onDemandHourlyPrice.value).toUpperCase().includes(this.state.search9)
        ) {
          return item;
        }
      });

      // // GETTING LARGEST VALUES FOR SLIERS HERE
      filtForMax1 = data.map(a => {
        return a.vcpu;
      });

      max1 = filtForMax1.reduce((a, b) => {
        return Math.max(a, b);
      });

    }
    var re = /[\s_]+|([a-z0-9])(?=[A-Z])/g; 


    return (
      <div>
      <div>
      <MDBBtn
      color="primary"
      onClick={() => {
        this.setState({ showFilter: !this.state.showFilter });
      }}
      >
      {this.state.showFilter ? "Hide Filters" : "Show Filters"}
      </MDBBtn>
      </div>
      <div className="App">
        <div>
        <MDBTable bordered striped className="table-1">
            {filteredData ? (
              <div
                style={{
                  display: "flex"
                }}
              >
                <MDBTableBody>
                <tr>
                    <span className="main-flex" onClick={()=>{}}>
                      <span className="field-names">
                        {tablePropertyNames[0].replace(re, "$1 ").toLowerCase()}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search0: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[1]}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[2]}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search2: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[3]}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                           <InputRange
                          maxValue={max1}
                          minValue={0}
                          value={this.state.search3}
                          onChange={search3 => this.setState({ search3 })}
                        />

                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[4].replace(re, "$1 ").toLowerCase()}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                    <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search4: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[5]}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search5: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[6].replace(re, "$1 ").toLowerCase()}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search6: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[7].replace(re, "$1 ").toLowerCase()}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                     <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search7: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[8].replace(re, "$1 ").toLowerCase()}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search8: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names">
                        {tablePropertyNames[9].replace(re, "$1 ").toLowerCase()}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search9: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex" onClick={()=>{}}>
                      <span className="field-names">
                        {tablePropertyNames[10]}
                      </span>
                      <span
                        className={
                          this.state.showFilter ? "field-inputs" : "hide"
                        }
                      >
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search10: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                 
                </MDBTableBody>
              </div>
            ) : null}
          </MDBTable>
        </div>

        <div className="div-2">
          <MDBTable
            style={{ overflow: "scroll" }}
            bordered
            striped
            className="table-2"
          >
            {filteredData ? (
              <div>
                <MDBTableBody
                  style={{
                    position: "relative",
                    left: "250px"
                  }}
                >
                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td style={{cursor:"pointer"}} key={ind} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.instanceType.length > 18
                            ? val.instanceType.slice(0, 18) + "..."
                            : val.instanceType}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.family.length > 18
                            ? val.family.slice(0, 18) + "..."
                            : val.family}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.ecu.length > 18
                            ? val.ecu.slice(0, 18) + "..."
                            : val.ecu}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.vcpu.length > 18
                            ? val.vcpu.slice(0, 18) + "..."
                            : val.vcpu}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.physicalProcessor.length > 18
                            ? val.physicalProcessor.slice(0, 18) + "..."
                            : val.physicalProcessor}
                        </td>
                      );
                    })}
                  </tr>


                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.memory.length > 18
                            ? val.memory.slice(0, 18) + "..."
                            : val.memory}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.instanceStorage.length > 18
                            ? val.instanceStorage.slice(0, 18) + "..."
                            : val.instanceStorage}
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.networkPerformance.length > 18
                            ? val.networkPerformance.slice(0, 18) + "..."
                            : val.networkPerformance}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.processorArchitecture.length > 18
                            ? val.processorArchitecture.slice(0, 18) + "..."
                            : val.processorArchitecture}
                        </td>
                      );
                    })}
                  </tr>
                 
                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                          {val.onDemandHourlyPrice.currency} {val.onDemandHourlyPrice.value}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} style={{cursor:"pointer"}} onClick={()=>this.getColData(filteredData[ind])}>
                        {val.select.length > 18
                          ? val.processelectsorArchitecture.slice(0, 18) + "..."
                          : val.select}
                      </td>
                      );
                    })}
                  </tr>

                </MDBTableBody>
              </div>
            ) : null}
          </MDBTable>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

