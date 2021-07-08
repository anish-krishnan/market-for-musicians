import { Image, Card, Accordion } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import uparrow from '../styles/images/uparrow.png';
import downarrow from '../styles/images/downarrow.png';
import '../styles/Dropdown.css';

var toggleOn = false;

function Toggle({ content, eventKey }) {
    const toggleArrow = useAccordionToggle(eventKey, () =>
      toggleOn = !toggleOn,
    );
  
    return (
        <button className="info-dropdown-header" type="button" onClick={toggleArrow}>
            {content}
            <Image className="info-dropdown-header-icon" src={toggleOn ? downarrow : uparrow}/>
        </button>
    );
  }

function Dropdown(props) {
    return (
        <Accordion className="info-dropdown" defaultActiveKey="0">
            <Card className="info-dropdown-content">
                <Toggle content={props.content.header} eventKey="0" />
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="info-dropdown-body">{props.content.body}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Dropdown;