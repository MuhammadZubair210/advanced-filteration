import React from "react";
import data from "./data";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./App.css";

class App extends React.Component {
  state = {
    data: null,
    fields: null,
    search0: "",
    search: "",
    search2: "",
    search3: "",
    search4: 0,
    search5: "",
    search6: "",
    search7: 0,
    search8: "",
    search9: "",
    search10: "",
    search11: "",
    search12: "",
    search13: "",
    search14: ""
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
      if (this.state.search4 > 0) {
        filteredData = filteredData.filter(item => {
          if (Number(item[4]) < this.state.search4) {
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
      if (this.state.search7 > 0) {
        filteredData = filteredData.filter(item => {
          if (Number(item[7]) < this.state.search7) {
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
        <table className="table">
          {filteredData ? (
            <tbody>
              <tr>
                <th scope="col">{this.state.fields[0]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search0: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[0]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[1]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[1]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[2]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search2: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[2]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[3]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search3: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[3]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[4]}</th>
                <td>
                  <Slider
                    value={this.state.search4}
                    orientation="horizontal"
                    onChange={this.handleOnChangeSlider1}
                    max={max1}
                    min={0}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[4]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[5]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search5: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[5]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[6]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search6: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[6]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[7]}</th>
                <td>
                  <Slider
                    value={this.state.search7}
                    orientation="horizontal"
                    onChange={v => {
                      this.handleOnChangeSlider2(v);
                    }}
                    max={max2}
                    min={0}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[7]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[8]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search8: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[8]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[9]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search9: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[9]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[10]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search10: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[10]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[11]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search11: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[11]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[12]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search12: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[12]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[13]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search13: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[13]}
                    </th>
                  );
                })}
              </tr>

              <tr>
                <th scope="col">{this.state.fields[14]}</th>
                <td>
                  <input
                    onChange={val => {
                      this.setState({ search14: val.target.value });
                    }}
                  />
                </td>
                {filteredData.map((val, ind) => {
                  return (
                    <th key={ind} scope="col">
                      {val[14]}
                    </th>
                  );
                })}
              </tr>
            </tbody>
          ) : null}
        </table>
      </div>
    );
  }
}

export default App;
