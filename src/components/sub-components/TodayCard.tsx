import React from "react";

export default class TodayCard extends React.Component<
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
    const APIData = this.state.dataweather[0];
    var RunTimeTemperature: any = [];
    Object.keys(APIData).forEach(function (key) {
      RunTimeTemperature.push(APIData[key]);
    });
    return (
      <div className="todayContainer">
        <h3>Today </h3>
        <div className="todayContent">
          <div className="img-holder">
            <img
              src={`http://openweathermap.org/img/w/${RunTimeTemperature[2][0].icon}.png`}
              alt=""
            />
          </div>
          <div className="text-container hover-animation">
            <span className="bold">{RunTimeTemperature[1].temp}&#176;</span>
            <span className="weather-text">
              {RunTimeTemperature[2][0].main}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
