import {PencilIcon, TrashIcon} from "lucide-react";

import {Button} from "@/components/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import DeleteAlertDialog from "@/components/ui/custom/DeleteAlertDialog";

const SubjectMenu = (props) => {
  const {
    children,
    openSubjectModal,
    subjectDetails,
    onHandleSelectedSubject,
    onDeleteSubject,
  } = props;

  const deleteSubject = () => {
    const subjectId = subjectDetails.id;
    onDeleteSubject(subjectId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              openSubjectModal();
              onHandleSelectedSubject(subjectDetails);
            }}>
            <PencilIcon />
            Edit
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">
            <DeleteAlertDialog deleteHandler={deleteSubject}>
              <button
                className="flex gap-2 items-center font-semibold"
                onClick={(e) => e.stopPropagation()}>
                <TrashIcon />
                Delete
              </button>
              <span> Confirm delete the subject </span>
            </DeleteAlertDialog>
            <button></button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SubjectMenu;
