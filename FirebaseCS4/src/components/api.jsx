/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import PersonTable from "./PersonTable";
import ModalComponent from "./ModalComponent";
import {
  loadpersonsData,
  addPerson,
  updatePerson,
  handleDelete,
} from "../services/personServices";
import Modal from "react-modal";
import { formatDate } from "../utils/formdate";

// Configura react-modal
Modal.setAppElement("#root");

export const Api = () => {
  const [persons, setPersons] = useState([]);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(null);

  const [newPerson, setNewPerson] = useState({
    name: "",
    cedula: "",
    email: "",
    phoneNumber: "",
    dateBirth: "",
    address: "",
    userName: "",
    password: "",
    rol: "",
  });

  const fetchPersonsData = () => {
    loadpersonsData(setPersons, setError);
  };

  useEffect(() => {
    fetchPersonsData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const handleAddPerson = async () => {
    const formattedPerson = {
      ...newPerson,
      dateBirth: formatDate(newPerson.dateBirth),
    };
    const success = await addPerson(formattedPerson);
    if (success) {
      closeModal();
    }
  };

  const handleEditPerson = (person) => {
    setIsEditing(true);
    setCurrentPerson(person);
    setNewPerson(person);
    openModal();
  };

  const handleUpdatePerson = async () => {
    const formattedPerson = {
      ...newPerson,
      dateBirth: formatDate(newPerson.dateBirth),
    };
    const success = await updatePerson(formattedPerson);
    if (success) {
      closeModal();
    }
  };

  const handleDeletePerson = async (cedula) => {
    try {
      await handleDelete(cedula);
      toast.success("Person deleted successfully");
      fetchPersonsData();
    } catch (error) {
      toast.error(`Error deleting person: ${error.message}`);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsEditing(false);
    setNewPerson({
      name: "",
      cedula: "",
      email: "",
      phoneNumber: "",
      dateBirth: "",
      address: "",
      userName: "",
      password: "",
      rol: "",
    });
    setCurrentPerson(null);
    fetchPersonsData();
  };

  return (
    <>
      <Toaster />
      <PersonTable
        persons={persons}
        handleEditPerson={handleEditPerson}
        handleDeletePerson={handleDeletePerson}
      />
      {error && (
        <div className="text-red-500 text-center">Error: {error.message}</div>
      )}
      <div className="flex justify-center mt-4 m-2">
        <Button onClick={openModal}>Agregar Persona</Button>
      </div>
      <ModalComponent
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        isEditing={isEditing}
        newPerson={newPerson}
        handleInputChange={handleInputChange}
        handleAddPerson={handleAddPerson}
        handleUpdatePerson={handleUpdatePerson}
      />
    </>
  );
};
