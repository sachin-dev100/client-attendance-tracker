import {Children} from "react";
import {Dialog, Button} from "@chakra-ui/react";

// if we use different html component then we can differential them
// like header , main, footer

const Modal = (props) => {
  const {children, trigger} = props;

  const items = Children.toArray(children);

  const title = items.find((item) => item.type === Modal.title); // it store title function
  const body = items.find((item) => item.type === Modal.body); // it store body function
  const footer = items.find((item) => item.type === Modal.footer); // it store footer function

  return (
    <Dialog.Root size="xs">
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content bg="var(--blue-lg)">
          <Dialog.CloseTrigger />
          <Dialog.Header>
            <Dialog.Title color="#fff" fontSize="2xl">
              {title}
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>{body}</Dialog.Body>
          <Dialog.Footer>{footer}</Dialog.Footer>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

Modal.title = (props) => {
  const {children} = props;
  return <>{children}</>;
};

Modal.body = (props) => {
  const {children} = props;
  return <>{children}</>;
};

Modal.footer = (props) => {
  const {children} = props;
  return <>{children}</>;
};

export default Modal;
