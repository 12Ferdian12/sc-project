import React from "react";
import { useSelector, useDispatch } from "@/hooks";
import { ModalState, closeModal } from "@/redux/reducer/ModalReducer";
import cn from "classnames";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modals() {
  const modal = useSelector((state) => state.Modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal show={modal.isOpen} onHide={handleClose} animation={true}>
      {/* <Modal.Header closeButton> */}
      {/* <Modal.Title>Modal heading</Modal.Title> */}
      {/* </Modal.Header> */}
      <Modal.Body className={cn("rounded-lg")}>{modal.content}</Modal.Body>
      {/* <Modal.Footer> */}
      {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
      {/* </Modal.Footer> */}
    </Modal>
  );
}

export default Modals;
