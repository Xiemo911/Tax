import React from "react";
import Start from "../pages/Start";
class App extends React.Component {
  state = {
    usaState: "",
    marital: "",
    income: null,
    amount: "",
    stateForApi: "AL",
    statusForApi: "S",
    incomeForApi: "",
    deductionsForApi: 0,
  };

  // addDataForApi = (e, a) => {
  //   this.setState({a: e.target.value})
  // }

  addDeductionsForApi = (e) => {
    if (e.target.value.length === 0 || e.target.value === 0) {
      return this.setState({ deductionsForApi: 0 });
    } else {
      if (isNaN(e.target.value)) {
        return this.setState({ deductionsForApi: 0 });
      }

      return this.setState({ deductionsForApi: e.target.value });
    }
  };

  addStateForApi = (e) => {
    return this.setState({ stateForApi: e.target.value });
  };

  addStatusForApi = (e) => {
    return this.setState({ statusForApi: e.target.value });
  };

  addIncomeForApi = (e) => {
    return this.setState({ incomeForApi: e.target.value });
  };

  onclickStateForApi = (e) => {
    document.getElementById("selectState").value = e.target.id;
    return this.setState({ stateForApi: e.target.id });
  };

  checkAfterTax = (a) => {
    if (
      parseInt(this.state.deductionsForApi) + parseInt(a) >=
      parseInt(this.state.incomeForApi)
    ) {
      return this.setState({
        amount: `After Tax $: ${parseInt(
          this.state.incomeForApi
        ).toLocaleString()}` +'\n'+ `Available Deductions Next 3 Year: $${
          Math.abs(parseInt(this.state.incomeForApi)-
          (parseInt(this.state.deductionsForApi) + parseInt(a))).toLocaleString()
        }` ,
      });
    } else {
      return this.setState({
        amount:
          "After Tax: $" +
          (
            parseInt(a) + parseInt(this.state.deductionsForApi)
          ).toLocaleString(),
      });
    }
  };

  render() {
    const st = this.state;
    return (
      <div>
        <Start
          addStateForApi={this.addStateForApi}
          addStatusForApi={this.addStatusForApi}
          addIncomeForApi={this.addIncomeForApi}
          onclickStateForApi={this.onclickStateForApi}
          checkAfterTax={this.checkAfterTax}
          amount={st.amount}
          stateForApi={st.stateForApi}
          statusForApi={st.statusForApi}
          incomeForApi={st.incomeForApi}
          addDataForApi={this.addDataForApi}
          addDeductionsForApi={this.addDeductionsForApi}
        />
      </div>
    );
  }
}
export default App;
