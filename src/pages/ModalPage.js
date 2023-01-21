import Modal from "../componets/Modal";
import Button from "../componets/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModel] = useState(false);

  const handleClick = () => {
    setShowModel(true);
  };

  const handleClose = () => {
    setShowModel(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
