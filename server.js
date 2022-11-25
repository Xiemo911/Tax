import express from "express";
import path from "path";
const port = process.env.PORT || 5000;
const app = express();
const API_KEY = "22a57af1d2347f83a9a3d2fa998e4a91"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("client/build")));
  app.get("*", (req, res) => {
    res.sendfile(path.join(("client/build/index.html")));
  });
}

const apiData = async () => {
  const getApiData = await axios.get(`${BASE_URL}/weather?lat=55.7348&lon=24.3575&units=metric&appid=${API_KEY}`, {
    headers: { "accept-encoding": "*" },
  });
  return await getApiData;
};

app.get("/", async(req, res) => {
  const k = await apiData()
  res.send(k);
});
app.listen(port, () => console.log("Example app is listening on port 5000."));
