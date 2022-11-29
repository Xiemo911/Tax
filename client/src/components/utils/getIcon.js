export default function getIcon(id) {
  switch (id.charAt(0)) {
    case 2:
      return {
        ico: "http://openweathermap.org/img/wn/11d@2x.png",
        bg: "https://nwafoundation.org/wp-content/uploads/2020/12/Lightning-1024x682-1.jpg",
      };
    case 3:
      return {
        ico: "http://openweathermap.org/img/wn/09d@2x.png",
        bg: "https://as1.ftcdn.net/v2/jpg/02/99/07/08/1000_F_299070812_UomjROdeqrASEiCWsAlSG7ygqiYXH78b.jpg",
      };
    case 5:
      return {
        ico: "http://openweathermap.org/img/wn/09d@2x.png",
        bg: "https://as1.ftcdn.net/v2/jpg/02/99/07/08/1000_F_299070812_UomjROdeqrASEiCWsAlSG7ygqiYXH78b.jpg",
      };
    case 6:
      return {
        ico: "http://openweathermap.org/img/wn/13d@2x.png",
        bg: "https://img.freepik.com/premium-vector/christmas-snow-falling-snowflakes-transparent-background-snowfall_302982-345.jpg?w=2000",
      };
    case 800:
      return {
        ico: "http://openweathermap.org/img/wn/01n@2x.png",
        bg: "https://images.freeimages.com/images/large-previews/e62/clear-sky-1363026.jpg",
      };
    default:
      return {
        ico: "http://openweathermap.org/img/wn/04d@2x.png",
        bg: "http://static1.squarespace.com/static/5ac3533bb27e39f181f34a32/t/60a67a9324c06f7ab8f7ea2e/1621523101366/unsplash-image-8iZG31eXkks.jpg?format=1500w",
      };
  }
}
