import React from "react";
import {FaRegTrashAlt} from "react-icons/fa";

// send props like
// <button> Delete </button>
// description

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/shadcn/alert-dialog";
import {Button} from "@/components/ui/shadcn/button";

const DeleteAlertDialog = ({children, deleteHandler}) => {
  const childArray = React.Children.toArray(children);
  const trigger = childArray.find((child) => child.type === "button");
  const description = childArray.find((child) => child.type === "span");
  console.log(trigger);
  console.log(description);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent
        className="bg-dialog w-70"
        onInteractOutside={(e) => e.stopPropagation()}>
        <AlertDialogHeader className="flex flex-col items-center gap-2">
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <FaRegTrashAlt size={30} />
          </AlertDialogMedia>
          <AlertDialogTitle className="text-white text-lg">
            Delete Subject
          </AlertDialogTitle>
          <AlertDialogDescription className="text-danger font-semibold text-sm">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-end bg-dialog">
          <AlertDialogCancel
            onClick={(e) => e.stopPropagation()}
            variant="outline"
            className="bg-white w-20 h-9">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="!bg-danger cursor-pointer text-danger w-20 h-9"
            onClick={(e) => {
              (e.stopPropagation(), deleteHandler());
            }}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlertDialog;
