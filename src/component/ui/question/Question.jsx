import React from 'react';
import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

const Question = ({ game }) => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const { question01, question02, question03, answer01, answer02, answer03 } = game;

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">{question01}</AccordionHeader>
          <AccordionBody accordionId="1">{answer01}</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">{question02}</AccordionHeader>
          <AccordionBody accordionId="2">{answer02}</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">{question03}</AccordionHeader>
          <AccordionBody accordionId="3">{answer03}</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
