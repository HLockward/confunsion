import React from 'react';
import { Media } from 'reactstrap';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { baseUrl } from '../shared/baseUrl';
 
const LeaderAccordion = ({leaders}) => {
    return (
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            {leaders.map((leader) => 
                <AccordionItem key={leader._id}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {leader.designation}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="row">
                            <div className="col-12 col-md-2">
                                <Media object src={baseUrl + leader.image} alt={leader.name} height="130" width="130" />
                            </div>
                            <div className="col-12 col-md-9">
                                <Media className="mb-2" heading>{leader.name}</Media>
                                <p>{leader.description}</p>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            )}
        </Accordion>
    );
}

export default LeaderAccordion;