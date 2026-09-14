import {useModal} from "../../features/subjectStatus/useModal.js";

import {RadioGroup, RadioGroupItem} from "@/components/ui/shadcn/radio-group";
import {Button} from "@/components/ui/shadcn/button";
import {Label} from "@/components/ui/shadcn/label";
import {CiLocationArrow1} from "react-icons/ci";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

const StatusModel = (props) => {
  const {attendenceStatus, onChangeAttendenceStatus} = useModal();
  const {statusOpen, closeStatusModel, onMarkAttendence, actionStatus} = props;
  const {isSubmitting, actionSuccess, actionError} = actionStatus;

  const markAttendence = () => {
    onMarkAttendence(attendenceStatus);
  };

  return (
    <Dialog open={statusOpen} onOpenChange={closeStatusModel}>
      <DialogContent className="py-7 flex flex-col w-[70%] max-w-400 bg-modal">
        <DialogTitle className="text-xl text-white font-heading font-semibold">
          Mark Attendence
        </DialogTitle>

        <RadioGroup
          value={attendenceStatus}
          onValueChange={onChangeAttendenceStatus}
          className="w-fit">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="present" id="r1" />
            <Label htmlFor="r1" className="text-base text-white">
              Present
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="absent" id="r2" />
            <Label htmlFor="r2" className="text-base text-white">
              Absent
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="noClass" id="r3" />
            <Label htmlFor="r3" className="text-base text-white">
              No class
            </Label>
          </div>
        </RadioGroup>

        <footer className="flex justify-end gap-2">
          <Button
            size="lg"
            disabled={isSubmitting}
            className="bg-primary font-semibold"
            onClick={markAttendence}>
            {isSubmitting ? "Marking..." : "Mark"}
            <CiLocationArrow1 size={17} />
          </Button>
        </footer>

        {actionError && (
          <p className="text-md text-danger bg-white/70 text-center rounded py-1">
            {actionError}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StatusModel;
