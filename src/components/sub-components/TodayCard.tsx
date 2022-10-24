import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons"
library.add(fas)
export default class TodayCard extends React.Component {
  render() {
    return <div className="todayContainer">
        <h3>Today</h3>
        <div className="todayContent">
            <div className="img-holder">
              <FontAwesomeIcon className="hover-animation" icon={["fas", "cloud-sun"]} />
            </div>
            <div className="text-container hover-animation">
                <span className="bold">19&#176;</span>
                <span className="weather-text">Cloudy</span>
            </div>
        </div>
    </div>;
  }
}
