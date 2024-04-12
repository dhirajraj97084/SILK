
import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { FaPlug, FaPlus } from "react-icons/fa";

function QuesFmaily() {
    const [open, setOpen] = React.useState(false); 
    const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <div className="box">
      <div className="container mx-auto pb-6">
        <div className="heading py-4">
          <h1 className="text-xl md:text-2xl text-black/90 text-center">
          FREQUENTLY ASKED QUESTIONS ON OUR FAMILY PORTRAIT PHOTOGRAPHY
          </h1>
        </div>
        {/* one */}
        <div className="box1">
        <div className="one pb-4">
          <Button className="ques01  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>How do I book a Family Portrait Photography session with you?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            Just get in touch and we'll find a suitable date. All I need then is a signed contract and the session fee paid in full. This payment is non-refundable.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
      {/* two */}
      <div className="box2">
      <div className="two pb-4">
          <Button className="ques01  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>What should we all wear?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            Wear what makes you feel like you. Simple clothes without big logos or stripes usually look best. Layering is great for trying different styles, and for little kids, changing their outfit a bit can be a fun idea.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
      {/* three */}
      <div className="box3">
      <div className="three pb-4">
          <Button className="ques01  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>Where does the photo session take place?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            We can hold sessions at your home, a nearby park, or any favorite spot in Goa. Whether it's a quiet place near or on the beach or a bustling city setting, both work perfectly fine.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
      {/* fouth */}
      <div className="box4">
      <div className="four pb-4">
          <Button className="ques01  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>When will we receive the images after we complete a portrait session?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            The final portrait images are typically delivered within 30 days. However, if you need them sooner, we offer a 'Quick Delivery' option for an extra fee. It's important to note that with a high volume of shoots each month, this timeframe allows me to ensure the quality of the images and provide you with a well-crafted set within the 30-day period.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
      </div>
      </div>
      </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default QuesFmaily

