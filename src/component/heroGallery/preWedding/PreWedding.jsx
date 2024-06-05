



import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
 
export default function PreWedding() {
  const [open, setOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
 
  return (
    <>
      <div className="boxes ">
      
      <Card 
        className="p-4 shadow-md  m-3 lg:w-96  w-full hover:bg-gray-100 cursor-pointer overflow-hidden "
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <h1 className=" text-center py-2">PRE WEDDING SHOOT</h1>
      </Card>

      </div>
       <Dialog size="xl" open={open} handler={handleOpen}>        
        <DialogBody>
          <img
            alt="nature"
            className="h-[44rem] w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </DialogBody> 
                
      </Dialog>
      
      
     
    </>
  );
}
