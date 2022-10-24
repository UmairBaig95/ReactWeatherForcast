import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons"
library.add(fas)

export default class UpcomingCard extends React.Component {
  render() {
    return <div className="upcomingContainer flex">
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
      </div>
      <div className="upcoming-card"><h3>Wed</h3>
      <FontAwesomeIcon icon={["fas", "cloud"]} />
      <span>19&#176;</span>
      </div>
    </div>
  }
}
