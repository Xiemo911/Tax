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
    deductionsForApi: ""
  };



  










  // addDataForApi = async (a, e) => {
  //   await this.setState({a: e.target.value})
  // }

  addDeductionsForApi = async (e) => {
    return await this.setState({ deductionsForApi: e.target.value }
    );
  };

  addStateForApi = async (e) => {
    return await this.setState({ stateForApi: e.target.value });
  };

  addStatusForApi = async (e) => {
    return await this.setState({ statusForApi: e.target.value });
  };

  addIncomeForApi = async (e) => {
    return await this.setState({ incomeForApi: e.target.value }
    );
  };

  onclickStateForApi = async (e) => {
     document.getElementById('selectState').value = e.target.id
    return await this.setState({ stateForApi: e.target.id });
  };

  checkAfterTax = async (a) => {
    await this.setState({ amount: "After Tax: $" + parseInt(a.toString()) });
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
        />
      </div>
    );
  }
}
export default App;
