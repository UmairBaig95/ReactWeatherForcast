import React from "react";
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
  componentWillReceiveProps(props: any) {
    this.setState({ dataweather: props }); // This will update your component.
  }

  render() {
    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const APIData = this.state.dataweather;
    var RunTimeTemperature: any = [];
    Object.keys(APIData).forEach(function (key) {
      RunTimeTemperature.push(APIData[key]);
    });
    return (
      <div className="upcomingContainer flex">
        {RunTimeTemperature.map((e: any, i: any) => {
          const date = weekday[new Date(e.dt_txt).getDay()];
          return (
            <div key={i} className="upcoming-card">
              <h3>{date.toString()}</h3>
              <img
                style={{ width: "90%" }}
                src={`http://openweathermap.org/img/w/${e.weather[0].icon}.png`}
                alt=""
              />
              <span>{e.main.temp}&#176;</span>
            </div>
          );
        })}
      </div>
    );
  }
}
