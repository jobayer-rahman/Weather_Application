import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="container">
          <div className="row">
            <form className="col" id="search-form">
              <input
                type="text"
                id="search-input"
                aria-describedby="searchCity"
                placeholder="Search city..."
                className="search-form"
                autoComplete="off"
              />
              <button type="submit">Search</button>
            </form>
            <h1
              className="col d-flex justify-content-center align-items-center city-title"
              id="searched-city"
            >
              Bristol
            </h1>
          </div>
          <span className="measurements">
            <a href="#" id="celcius-link">
              C°
            </a>
            |
            <a href="#" id="fahrenheit-link">
              F°
            </a>
          </span>
        </section>

        <section className="current-weather">
          <div className="container">
            <div className="row">
              <h1 className="col temp-title" id="current-temperature">
                4°
              </h1>
              <div className="col todays-info">
                <p id="current-time">11:00</p>
                <h2 id="current-day">Today</h2>
                <p id="weather-type">Cloudy</p>
              </div>
              <div className="col d-flex align-items-center side-info">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>
                  </li>
                  <li>
                    Wind: <span id="wind"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </section>

        <section className="container">
          <div className="row week-forecast">
            <div className="col">
              <h3>Fri</h3>
              <br />
              <img src="https://img.icons8.com/color-glass/42/000000/rain.png" />
              <br />
              <p className="weather">Rain</p>
              <span>2°</span>
            </div>
            <div className="col">
              <h3>Sat</h3>
              <br />
              <img src="https://img.icons8.com/color-glass/42/000000/cloud.png" />
              <br />
              <p className="weather">Cloudy</p>
              <span>4°</span>
            </div>
            <div className="col">
              <h3>Sun</h3>
              <br />
              <img src="https://img.icons8.com/color-glass/42/000000/partly-cloudy-day.png" />
              <br />
              <p className="weather">Partly cloudy</p>
              <span>6°</span>
            </div>
            <div className="col">
              <h3>Mon</h3>
              <br />
              <img src="https://img.icons8.com/color-glass/42/000000/sun.png" />
              <br />
              <p className="weather">Sunny</p>
              <span>8°</span>
            </div>
            <div className="col">
              <h3>Tues</h3>
              <br />
              <img src="https://img.icons8.com/color-glass/42/000000/wind.png" />
              <br />
              <p className="weather">Windy</p>
              <span>5°</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
