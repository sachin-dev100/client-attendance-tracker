import ModalContent from "./ModalContent";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

function SubjectModal(props) {
  const {
    openSubject,
    closeSubjectModal,
    actionStatus,
    onAddingSubject,
    onUpdateSubject,
    selectedSubject,
  } = props;
  return (
    <Dialog open={openSubject} onOpenChange={closeSubjectModal}>
      <DialogContent className="bg-modal w-[90%]">
        <DialogTitle className="text-lg text-white font-heading">
          Subject Details
        </DialogTitle>
        {/* content of Subject Header */}
        <ModalContent
          selectedSubject={selectedSubject}
          closeSubjectModal={closeSubjectModal}
          actionStatus={actionStatus}
          onAddingSubject={onAddingSubject}
          onUpdateSubject={onUpdateSubject}
        />
      </DialogContent>
    </Dialog>
  );
}

export default SubjectModal;
