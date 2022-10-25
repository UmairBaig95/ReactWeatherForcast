import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default class UpcomingCard extends React.Component<
  {},
  { dataweather: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataweather: props,
    };
  }
  render() {
    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const d = new Date();
    const model = this.state.dataweather;
    var tifOptions: any = [];
    Object.keys(model).forEach(function (key) {
      tifOptions.push(model[key]);
    });
    console.log(tifOptions);

    return (
      <div className="upcomingContainer flex">
        {tifOptions.map((e: any) => {
          const date = weekday[new Date(e.dt_txt).getDay()];
          return (
            <div className="upcoming-card">
              <h3>{date.toString()}</h3>
              <img src={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`} alt="" />
              
              <span>{e.main.temp}&#176;</span>
            </div>
          );
        })}
        {/* <div className="upcoming-card"><h3>Wed</h3>
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>19&#176;</span>
      </div>
      <div className="upcoming-card"><h3>Wed</h3>
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>19&#176;</span>
      </div>
      <div className="upcoming-card"><h3>Wed</h3>
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>19&#176;</span>
      </div>
      <div className="upcoming-card"><h3>Wed</h3>
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>19&#176;</span>
      </div> */}
      </div>
    );
  }
}
