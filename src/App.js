import React from "react";
import data from "./data";

import "react-rangeslider/lib/index.css";
import "./App.css";
import "react-input-range/lib/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import InputRange from "react-input-range";

import { MDBTable, MDBTableBody } from "mdbreact";

class App extends React.Component {
  state = {
    data: null,
    fields: null,
    search0: "",
    search: "",
    search2: "",
    search3: "",
    search4: { min: 0, max: 0 },
    search5: "",
    search6: "",
    search7: { min: 0, max: 0 },
    search8: "",
    search9: "",
    search10: "",
    search11: "",
    search12: "",
    search13: "",
    search14: "",
    search15: ""
  };

  componentDidMount() {
    this.setState({ fields: data.fields, data: data.data });
  }

  handleOnChangeSlider1 = value => {
    this.setState({
      search4: value
    });
  };

  handleOnChangeSlider2 = value => {
    this.setState({
      search7: value
    });
  };
  render() {
    let filteredData = null;
    let max1 = 100;
    let max2 = 100;
    let filtForMax1 = [];
    let filtForMax2 = [];

    if (this.state.data !== null) {
      const { data } = this.state;

      // FILTERING FOR EACH ROW ITEM
      filteredData = data.filter(item => {
        if (
          item[0].toLowerCase().includes(this.state.search0) ||
          item[0].toUpperCase().includes(this.state.search0)
        ) {
          return item;
        }
      });

      filteredData = data.filter(item => {
        if (
          item[1].toLowerCase().includes(this.state.search) ||
          item[1].toUpperCase().includes(this.state.search)
        ) {
          return item;
        }
      });

      filteredData = filteredData.filter(item => {
        if (
          item[2].toLowerCase().includes(this.state.search2) ||
          item[2].toUpperCase().includes(this.state.search2)
        ) {
          return item;
        }
      });

      filteredData = filteredData.filter(item => {
        if (
          item[3].toLowerCase().includes(this.state.search3) ||
          item[3].toUpperCase().includes(this.state.search3)
        ) {
          return item;
        }
      });
      if (this.state.search4.max > 0) {
        filteredData = filteredData.filter(item => {
          if (
            Number(item[4]) >= this.state.search4.min &&
            Number(item[4]) <= this.state.search4.max
          ) {
            return item;
          }
        });
      }
      filteredData = filteredData.filter(item => {
        if (
          item[5].toLowerCase().includes(this.state.search5) ||
          item[5].toUpperCase().includes(this.state.search5)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[6].toLowerCase().includes(this.state.search6) ||
          item[6].toUpperCase().includes(this.state.search6)
        ) {
          return item;
        }
      });
      if (this.state.search7.max > 0) {
        filteredData = filteredData.filter(item => {
          if (
            Number(item[7]) >= this.state.search7.min &&
            Number(item[7]) <= this.state.search7.max
          ) {
            return item;
          }
        });
      }
      filteredData = filteredData.filter(item => {
        if (
          item[8].toLowerCase().includes(this.state.search8) ||
          item[8].toUpperCase().includes(this.state.search8)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[9].toLowerCase().includes(this.state.search9) ||
          item[9].toUpperCase().includes(this.state.search9)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[10].toLowerCase().includes(this.state.search10) ||
          item[10].toUpperCase().includes(this.state.search10)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[11].toLowerCase().includes(this.state.search11) ||
          item[11].toUpperCase().includes(this.state.search11)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[12].toLowerCase().includes(this.state.search12) ||
          item[12].toUpperCase().includes(this.state.search12)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[13].toLowerCase().includes(this.state.search13) ||
          item[13].toUpperCase().includes(this.state.search13)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[14].toLowerCase().includes(this.state.search14) ||
          item[14].toUpperCase().includes(this.state.search14)
        ) {
          return item;
        }
      });
      filteredData = filteredData.filter(item => {
        if (
          item[15].toLowerCase().includes(this.state.search15) ||
          item[15].toUpperCase().includes(this.state.search15)
        ) {
          return item;
        }
      });

      // GETTING LARGEST VALUES FOR SLIERS HERE
      filtForMax1 = this.state.data.map(a => {
        return a[4];
      });

      filtForMax2 = this.state.data.map(a => {
        return a[7];
      });

      max1 = filtForMax1.reduce((a, b) => {
        return Math.max(a, b);
      });
      max2 = filtForMax2.reduce((a, b) => {
        return Math.max(a, b);
      });
    }
    return (
      <div className="App">
        <div>
          <MDBTable bordered striped className="table-1">
            {filteredData ? (
              <div
                style={{
                  display: "flex"
                  // padding-top: 10%;
                }}
              >
                <MDBTableBody>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[1]}
                      </span>
                      <span className="field-inputs">
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
                      <span className="field-names" scope="col">
                        {this.state.fields[2]}
                      </span>
                      <span className="field-inputs">
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
                      <span className="field-names" scope="col">
                        {this.state.fields[3]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search3: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[4]}
                      </span>
                      <span className="field-inputs">
                        <InputRange
                          maxValue={max1}
                          minValue={0}
                          value={this.state.search4}
                          onChange={search4 => this.setState({ search4 })}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[5]}
                      </span>
                      <span className="field-inputs">
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
                      <span className="field-names" scope="col">
                        {this.state.fields[6]}
                      </span>
                      <span className="field-inputs">
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
                      <span className="field-names" scope="col">
                        {this.state.fields[7]}
                      </span>
                      <span className="field-inputs">
                        <InputRange
                          maxValue={max2}
                          minValue={0}
                          value={this.state.search7}
                          onChange={search7 => this.setState({ search7 })}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[8]}
                      </span>
                      <span className="field-inputs">
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
                      <span className="field-names" scope="col">
                        {this.state.fields[9]}
                      </span>
                      <span className="field-inputs">
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
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[10]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search10: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>
                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[11]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search11: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[12]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search12: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[13]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search13: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[14]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search14: val.target.value });
                          }}
                        />
                      </span>
                    </span>
                  </tr>

                  <tr>
                    <span className="main-flex">
                      <span className="field-names" scope="col">
                        {this.state.fields[15]}
                      </span>
                      <span className="field-inputs">
                        <input
                          className="inputs"
                          onChange={val => {
                            this.setState({ search15: val.target.value });
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
                        <td key={ind} scope="col">
                        {val[1].length > 14 ? val[1].slice(0, 14)+"..." : val[1]}

                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[2].length > 14 ? val[2].slice(0, 14)+"..." : val[2]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[3]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[4]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[5].length > 14 ? val[5].slice(0, 14)+"..." : val[5]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[6]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[7]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[8]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[9]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[10]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[11]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[12]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[13]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[14]}
                        </td>
                      );
                    })}
                  </tr>

                  <tr>
                    {filteredData.map((val, ind) => {
                      return (
                        <td key={ind} scope="col">
                          {val[15]}
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
    );
  }
}

export default App;

// {val[5].length >14 ? val[5].slice(0,14):val[5]}

// <MDBTable bordered striped>
//   <MDBTableBody
//     style={{
//       position: "relative",
//       left: "250px"
//     }}
//   >
//     <tr>
//       {filteredData.map((val, ind) => {
//         return (
//           <td key={ind} scope="col">
//             {val[1]}
//           </td>
//         );
//       })}
//     </tr>
//     {filteredData.map((val, ind) => {
//       return (
//         <td key={ind} scope="col">
//           {val[2]}
//         </td>
//       );
//     })}
//   </MDBTableBody>
// </MDBTable>

// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[2]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search2: val.target.value });
//         }}
//       />
//     </span>
//   </span>

//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[2]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[3]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search3: val.target.value });
//         }}
//       />
//     </span>
//   </span>

//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[3]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[4]}
//     </span>
//     <span className="field-inputs">
//       <InputRange
//         maxValue={max1}
//         minValue={0}
//         value={this.state.search4}
//         onChange={search4 => this.setState({ search4 })}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[4]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[5]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search5: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[5]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[6]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search6: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[6]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[7]}
//     </span>
//     <span className="field-inputs">
//       <InputRange
//         maxValue={max2}
//         minValue={0}
//         value={this.state.search7}
//         onChange={search7 => this.setState({ search7 })}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[7]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[8]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search8: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[8]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[9]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search9: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[9]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[10]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search10: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[10]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[11]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search11: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[11]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[12]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search12: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[12]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[13]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search13: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[13]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[14]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search14: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[14]}
//       </td>
//     );
//   })}
// </tr>

// <tr>
//   <span className="main-flex">
//     <span className="field-names" scope="col">
//       {this.state.fields[15]}
//     </span>
//     <span className="field-inputs">
//       <input
//         className="inputs"
//         onChange={val => {
//           this.setState({ search15: val.target.value });
//         }}
//       />
//     </span>
//   </span>
//   {filteredData.map((val, ind) => {
//     return (
//       <td key={ind} scope="col">
//         {val[15]}
//       </td>
//     );
//   })}
// </tr>
