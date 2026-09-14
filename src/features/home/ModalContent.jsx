import {useModal} from "./useModal.js";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/shadcn/alert-dialog";
import {Button} from "@/components/ui/shadcn/button";
import {Input} from "@/components/ui/shadcn/input";

const ModalContent = (props) => {
  const {
    actionStatus,
    onAddingSubject,
    onUpdateSubject,
    closeSubjectModal,
    selectedSubject,
  } = props;
  console.log(selectedSubject);
  const {subjectName, onChangeSubjectName} = useModal(selectedSubject);

  const addingSubject = () => {
    const subjectDetails = {subjectName};
    onAddingSubject(subjectDetails);
  };

  const updateSubject = () => {
    const updatedDetails = {...selectedSubject, subjectName};
    onUpdateSubject(updatedDetails); // id , subjectName
  };

  const {isSubmitting, actionError} = actionStatus;
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col">
        <Input
          className="w-full"
          type="text"
          value={subjectName}
          onChange={onChangeSubjectName}
          placeholder="Subject Name"
        />
      </section>
      <footer className="flex flex-col justify-center items-end gap-4">
        {!selectedSubject && (
          <Button
            disabled={isSubmitting}
            className="bg-primary px-3 py-5 text-md font-400"
            onClick={addingSubject}>
            {isSubmitting ? "Adding..." : "Add Subject"}
          </Button>
        )}
        {selectedSubject && (
          <Button
            disabled={isSubmitting}
            className="bg-primary px-3 py-5 text-md font-400"
            onClick={updateSubject}>
            {isSubmitting ? "Updating..." : "Update"}
          </Button>
        )}

        {actionError && (
          <p className="text-danger text-lg self-center bg-white px-4 py-1 rounded">
            {actionError}
          </p>
        )}
      </footer>
    </main>
  );
};

export default ModalContent;
