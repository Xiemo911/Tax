import React from "react";
import SingleCard from "./SingleCard";

const image = [
  "matt",
  "elliot",
  "jenny",
  "joe",
  "stevie",
  "tom",
  "steve",
  "christian",
];
const names = [
  "Matt",
  "Elliot",
  "Jenny",
  "Joe",
  "Jtevie",
  "Tom",
  "Steve",
  "Christian",
];
const check = (str) =>
  localStorage.getItem(str) === null
    ? []
    : JSON.parse(localStorage.getItem(str));

class Uzduotis extends React.Component {
  state = {
    accepted: check("accepted"),
    notAccepted: check("notAccepted"),
    nothing: check("nothing"),
  };
  rdm = (arr) => Math.floor(Math.random() * arr.length);

  lcc = (item) => {
    if (localStorage.getItem(item) === null) {
      return false;
    }
  };

  createCard = () => {
    const obj = {
      date: Date().toLocaleString("en-US"),
      name: names[this.rdm(names)],
      imag: image[this.rdm(image)],
      id: Math.random(),
    };
    this.setState({
      nothing: [...this.state.nothing, obj],
    });
    localStorage.setItem(
      "nothing",
      JSON.stringify([...this.state.nothing, obj])
    );
    console.log(obj);
  };




  move = (state, id) => {
    const index = this.state.nothing.map((e) => e.id).indexOf(id);
    let array = [...this.state.nothing];
    const item = this.state.nothing[index];
    if (state === true) {
      this.setState({ accepted: [...this.state.accepted, item] }, () => {
        localStorage.setItem("accepted", JSON.stringify(this.state.accepted));
      });
    } else {
      this.setState({ notAccepted: [...this.state.notAccepted, item] }, () => {
        localStorage.setItem(
          "notAccepted",
          JSON.stringify([...this.state.notAccepted, item])
        );
      });
    }

    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ nothing: array }, () => {
        localStorage.setItem("nothing", JSON.stringify(this.state.nothing));
      });
    }
  };


  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "auto", width: "100%" }}>
            <button onClick={() => this.createCard()} class="ui button">
              Generate card
            </button>
            <div class="ui cards">
              {this.state.nothing.map((i) => (
                <SingleCard
                  move={this.move}
                  name={i.name}
                  date={i.date}
                  imag={i.imag}
                  id={i.id}
                />
              ))}
              {/* /*<SingleCard name={this.state.not} date={this.obj.date} imag={this.obj.imag} />*/}
            </div>
          </div>
          <div style={{ margin: "auto", width: "100%" }}>
            <div class="ui cards">
              {this.state.accepted.map((i) => (
                <SingleCard
                  name={i.name}
                  date={i.date}
                  imag={i.imag}
                  id={i.id}
                />
              ))}
            </div>
          </div>
          <div style={{ margin: "auto", width: "100%" }}>
            <div class="ui cards">
              {this.state.notAccepted.map((i) => (
                <SingleCard
                  name={i.name}
                  date={i.date}
                  imag={i.imag}
                  id={i.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Uzduotis;





// decideIcon = async () => {
//   const icon = this.state.data.weather[0].id.toString();
//   if (icon.charAt(0) == 2) {
//     this.setState({
//       ico: "http://openweathermap.org/img/wn/11d@2x.png",
//       bg: "https://nwafoundation.org/wp-content/uploads/2020/12/Lightning-1024x682-1.jpg",
//     });
//   } else if (icon.charAt(0) == 3) {
//     this.setState({
//       ico: "http://openweathermap.org/img/wn/09d@2x.png",
//       bg: "https://as1.ftcdn.net/v2/jpg/02/99/07/08/1000_F_299070812_UomjROdeqrASEiCWsAlSG7ygqiYXH78b.jpg",
//     });
//   } else if (icon.charAt(0) == 5) {
//     this.setState({
//       ico: "http://openweathermap.org/img/wn/09d@2x.png",
//       bg: "https://as1.ftcdn.net/v2/jpg/02/99/07/08/1000_F_299070812_UomjROdeqrASEiCWsAlSG7ygqiYXH78b.jpg",
//     });
//   } else if (icon.charAt(0) == 6) {
//     this.setState({
//       ico: "http://openweathermap.org/img/wn/13d@2x.png",
//       bg: "https://img.freepik.com/premium-vector/christmas-snow-falling-snowflakes-transparent-background-snowfall_302982-345.jpg?w=2000",
//     });
//   } else if (icon == "800") {
//     this.setState({
//       ico: "http://openweathermap.org/img/wn/01n@2x.png",
//       bg: "https://images.freeimages.com/images/large-previews/e62/clear-sky-1363026.jpg",
//     });
//   } else {
//     this.setState({
//       ico: "http://openweathermap.org/img/wn/04d@2x.png",
//       bg: "http://static1.squarespace.com/static/5ac3533bb27e39f181f34a32/t/60a67a9324c06f7ab8f7ea2e/1621523101366/unsplash-image-8iZG31eXkks.jpg?format=1500w",
//     });
//   }
// };
