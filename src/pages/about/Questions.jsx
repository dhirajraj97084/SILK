import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { FaPlug, FaPlus } from "react-icons/fa";

function Questions() {

  const [open, setOpen] = React.useState(false); 
  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div>
      <div className="container mx-auto pb-6">
        <div className="heading pb-4">
          <h1 className="text-2xl md:text-3xl text-black/90 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div className="boxes px-4  ">
          {/* one */}
        <div className="one pb-4">
          <Button className="ques01  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>Do you travel?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            Yes, of course. I am based in Goa and have covered weddings all over India and Asia. We have already shot in Thailand, Sri Lanka, Maldives, Kenya, Tanzania, Uganda, Congo, Morocco, Israel and more. Don't let the distance bother you one bit.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
      {/* two */}
      <div className="two pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>Do you have any client's recommendations?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            Yes, I do. My client reviews are unsolicited and you can find some of them spread around this website.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
      {/* three */}
      <div className="three pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>How much do you charge?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            Every wedding is different and it is important for me to not only show who was at the wedding, but more than that when you look at the pictures I would like you to remember how you felt on this special day.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
       {/* four */}
       <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>What are your payment terms?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            A booking fee/retainer of 50% is due to reserve your date, with the final amount due two weeks before the wedding. If booking under thirty days before the wedding the entire contract amount is due at the time of signing.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
       {/* five */}
       <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>I know a photographer who charges less than you. Can you match that?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            A wise man once said that photography is not a commodity. Driving a Hyundai is not like driving a Lexus. I am proud of being able to give you the “Presidential Suite’ of service and quality of work. I believe in value for money and you have my assertions that the final images will stand above the competitors. However, if you have a smaller budget we will be happy to send one of the capable photographers working in my team to your event. Please contact us for more details.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
       {/* six */}
       <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>I also need video. Can you help me?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            We have an in-house fantastic cinematography team who are very experienced in Indian weddings. We will be happy to quote for videography if you feel you need and want a film of your wedding done.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
       {/* seven */}
       <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>Do you make wedding albums?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            I will be more than happy to help you create a truly stunning album of your wedding. Our wedding albums are produced to the highest standard in the industry. Each album is hand made and printed on the finest quality paper that is guaranteed to last through the ages. Faux-leather bound, the album comes in a custom album box to create an amazing keepsake to hold your wedding memories for generations to come. Please let me know and I will be happy to send you more information.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
         {/* 8 */}
         <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>What will I receive from you?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            My photography service always include photography service for up to 10 hours on the wedding day. You keep the final high resolution images for personal use. You will own “home use rights” to your images which means that you can do pretty much anything you want with them as long as it doesn’t generate any income for yourself or the people you give them to. Find out all the details in the contract. The images you receive are all colour corrected and optimised, print-ready high resolution files good enough for any high-end glossy magazine.  An average set will range from 180-250 images for a small wedding to 600-800 images for a large wedding. You will get a beautiful online gallery that you can easily share with your friends and family. You will be able to download all the images directly from this gallery. All the images I shoot at your wedding are backed up in the most reliable and sophisticated back-up system and will stay secure with me for a minimum of five (5) years.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
         {/* 9 */}
         <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-200 text-black outline-none justify-between " onClick={toggleOpen}>How long will it take to deliver my pictures?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            Time frames can range anywhere from two weeks to two months, depending on the time of the year and my schedule. The average delivery time for the photographs is usually two to four weeks but can sometime take more. In any case, delivery of the final gallery will be less than 60 days from the time of your wedding. Wedding films take a little longer to deliver. We will deliver the wedding trailer no later than 60 days from the day of the wedding, with the final long version within 120 days.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
         {/* 10 */}
         <div className="four pb-4">
      <Button className="ques02  w-full flex bg-gray-300 text-black outline-none justify-between " onClick={toggleOpen}>Which cameras do you use?
        <h1><FaPlus/></h1>
        </Button>
      <Collapse open={open}>
        <Card className="my-1 mx-auto bg-gray-100 ">
          <CardBody>
            <Typography>
            I am honoured to be a SONY Artisan and I currently use the latest a9 and a7Rlll cameras, with the top lenses that best suits my needs to create the magic that you expect me to create. However, it is really not the camera that creates the image but the person holding it. The famous American author and journalist Ernest Hemingway once met the legendary photographer Irving Penn at an event. Ernest Hemingway: “Good pictures, what camera do you use?” Irving Penn: “What typewriter do you use?” Please feel free to contact me for more information and I will be happy to answer.
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
      </div>
       
        </div>
      </div>
    </div>
  );
}

export default Questions;
