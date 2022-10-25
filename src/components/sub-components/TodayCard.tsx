import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons"
library.add(fas)
interface temp {
  name: string;
  lat: number;
  lon: number;
}
export default class TodayCard extends React.Component<{}, { dataweather: any}>  {

constructor(props:any){
  super(props); 
  this.state={
  
    dataweather : props

  }
}

  render() {
    const model = this.state.dataweather[0];
    var temp : any = [];

Object.keys(model).forEach(function(key) {
    temp.push(model[key]);
}); 
    return <div className="todayContainer">
        <h3>Today </h3>
        <div className="todayContent">
            <div className="img-holder">
              <img src={`http://openweathermap.org/img/w/${temp[2][0].icon}.png`} alt="" />
              {/* <FontAwesomeIcon className="hover-animation" icon={["fas", "cloud-sun"]} /> */}
            </div>
            <div className="text-container hover-animation">
                <span className="bold">{temp[1].temp}</span>
                <span className="weather-text">{temp[2][0].main}</span>
            </div>
        </div>
    </div>;
  }
}
