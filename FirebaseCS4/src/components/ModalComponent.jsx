/* eslint-disable react/prop-types */
import Modal from "react-modal";
import PersonForm from "./PersonForm";

const ModalComponent = ({
  modalIsOpen,
  closeModal,
  isEditing,
  newPerson,
  handleInputChange,
  handleAddPerson,
  handleUpdatePerson,
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Agregar Persona"
    className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center"
    overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
  >
    <PersonForm
      isEditing={isEditing}
      newPerson={newPerson}
      handleInputChange={handleInputChange}
      handleAddPerson={handleAddPerson}
      handleUpdatePerson={handleUpdatePerson}
      closeModal={closeModal}
    />
  </Modal>
);

export default ModalComponent;
