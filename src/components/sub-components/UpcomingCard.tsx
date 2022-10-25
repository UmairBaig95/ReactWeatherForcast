import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons"
library.add(fas)

export default class UpcomingCard extends React.Component<{}, { dataweather: any}>  {
  constructor(props:any){
    super(props); 
    this.state={
      dataweather : props
    }

  }
  render() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    const model = this.state.dataweather;
    var tifOptions : any = [];
    Object.keys(model).forEach(function(key) {
    tifOptions.push(model[key]);
}); 
console.log(tifOptions[1]);

    return <div className="upcomingContainer flex">
     {tifOptions.map((e:any)=> {return (  <div className="upcoming-card"><h3>{}</h3>
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>19&#176;</span>
      </div>)})}
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
  }
}
