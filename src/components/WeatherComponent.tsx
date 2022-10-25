import React from "react";
import TodayCard from "./sub-components/TodayCard";
import UpcomingCard from "./sub-components/UpcomingCard";
import axios from "axios";
interface locationSetter {
  name: string;
  lat: string;
  lon: string;
}
interface WeatherState {
  selectedLocation: locationSetter;
  locationList: locationSetter[];
  locationResult: any[];
}

class WeatherComponent extends React.Component {
  state: WeatherState = {
    selectedLocation: { name: "Ottawa", lat: "45.4215", lon: "-75.6972" },
    locationList: [
      { name: "Ottawa", lat: "45.4215", lon: "75.6972" },
      { name: "Moscow", lat: "55.7558", lon: "37.6173" },
      { name: "Tokyo", lat: "35.6762", lon: "139.6503" },
    ],
    locationResult: [],
  };
  componentDidMount(): void {
    this.getApiData();
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.selectedLocation !== this.state.selectedLocation) {
      this.getApiData();
    }
  }
  getApiData = async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.selectedLocation.lat}&lon=${this.state.selectedLocation.lon}&appid=d31f3093c99470ccd7b38f3e28bbe8bb&&units=metric`
      )
      .then((res) => {
        let dateList: any[] = [];
        let itemList: any[] = [];
        res.data.list.forEach((x: any) => {
          let date = x.dt_txt.split(" ")[0];
          if (!dateList.includes(date)) {
            dateList.push(date);
            itemList.push(x);
          }
        });
        this.setLocationResult(itemList);
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  };

  setLocationResult = (payload: any[]) => {
    this.setState({
      locationResult: payload,
    });
  };
  changeLocation = (payload: locationSetter) => {
    this.setState((prev) => {
      return { ...prev, selectedLocation: payload, locationResult: [] };
    });
  };

  render() {
    return (
      <div className="container center">
        <div className="linkContainer flex justify-evenly uppercase">
          {this.state.locationList.map((location, index: number) => {
            return (
              <div key={index}>
                <span
                  onClick={() => {
                    this.changeLocation(location);
                  }}
                  className={
                    this.state.selectedLocation.name === location.name
                      ? "link selected"
                      : "link"
                  }
                >
                  {}
                  {location.name}
                </span>
              </div>
            );
          })}
        </div>
        {this.state.locationResult.length === 0 ? (
          <div className="test image">
            <div className="smt-spinner-circle">
              <div className="smt-spinner"></div>
            </div>
          </div>
        ) : (
          <div className="card weatherContent">
            {this.state.locationResult.length > 0 && (
              <TodayCard {...this.state.locationResult} />
            )}
            {this.state.locationResult.length > 0 && (
              <UpcomingCard {...this.state.locationResult} />
            )}
          </div>
        )}
      </div>
    );
  }
}
export default WeatherComponent;
