import "./UpcomingOpportunities.css";
import { Button, Row, Col } from "react-bootstrap"
import Moment from "moment";
import {Link} from 'react-router-dom'

/* 
    props.opps: array of upcoming opportunities (i.e. ["Upcoming Opp 1", "Upcoming Opp 2", ...])
*/

function UpcomingOpportunities(props) {
    const upcomingOpportunities = props.opps;
    return (
        <div id="upOpps">
            <h4 id="upType">UPCOMING OPPORTUNTIES</h4>
            {upcomingOpportunities && upcomingOpportunities.map((opp, i) => (
                <Row key={i} className="upOpp">
                    <Col md="auto" className="col-6">
                        <Link to={'/opportunityDetail/' + opp.id} className="pastOppLink">
                            <p className="upOppTask">{opp.task}</p>
                            <p className="upOppDate">{Moment(opp.start).format('MMMM Do YYYY, h:mm a') + " to " + Moment(opp.end).format('MMMM Do YYYY, h:mm a')}</p>
                        </Link>
                    </Col>
                    <Col className="upOppCancel">
                        <Button variant="danger" onClick={() => props.handleCancel(opp)}>Cancel</Button>
                    </Col>
                </Row>
            ))}
        </div>
    );
}

export default UpcomingOpportunities;