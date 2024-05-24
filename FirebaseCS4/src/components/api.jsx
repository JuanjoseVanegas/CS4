// api.jsx
import React, { useEffect, useState } from "react";
import { Table, Button, Label, TextInput, Card } from "flowbite-react";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import {
  loadpersonsData,
  addPerson,
  updatePerson,
  handleDelete,
} from "../services/personServices";

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
    const success = await addPerson(
      newPerson.name,
      newPerson.cedula,
      newPerson.email,
      newPerson.phoneNumber,
      newPerson.dateBirth,
      newPerson.address,
      newPerson.userName,
      newPerson.password,
      { name: newPerson.rol }
    );
    if (success) {
      closeModal();
    }
  };

  const handleEditPerson = (person) => {
    setIsEditing(true);
    setCurrentPerson(person);
    setNewPerson({
      name: person.name,
      cedula: person.cedula,
      email: person.email,
      phoneNumber: person.phoneNumber,
      dateBirth: person.dateBirth,
      address: person.address,
      userName: person.userName,
      password: person.password,
      rol: person.rol,
    });
    openModal();
  };

  const handleUpdatePerson = async () => {
    const success = await updatePerson(
      newPerson.name,
      newPerson.cedula,
      newPerson.email,
      newPerson.phoneNumber,
      newPerson.dateBirth,
      newPerson.address,
      newPerson.userName,
      newPerson.password,
      { name: newPerson.rol }
    );
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

  const formatDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    }
    return "Fecha no disponible";
  };

  return (
    <>
      <Toaster />
      <div className="mt-4 mb-8 overflow-x-auto flex justify-center">
        <Table hoverable className="w-full max-w-4x">
          <Table.Head>
            <Table.HeadCell className="text-center">Name</Table.HeadCell>
            <Table.HeadCell className="text-center">Cedula</Table.HeadCell>
            <Table.HeadCell className="text-center">Email</Table.HeadCell>
            <Table.HeadCell className="text-center">
              Phone Number
            </Table.HeadCell>
            <Table.HeadCell className="text-center">
              Date of Birth
            </Table.HeadCell>
            <Table.HeadCell className="text-center">Address</Table.HeadCell>
            <Table.HeadCell className="text-center">Role</Table.HeadCell>
            <Table.HeadCell className="text-center">Username</Table.HeadCell>
            <Table.HeadCell className="text-center">Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {persons.slice(0, 12).map((person) => (
              <Table.Row
                key={person.cedula}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {person.name}
                </Table.Cell>
                <Table.Cell className="text-center">{person.cedula}</Table.Cell>
                <Table.Cell className="text-center">{person.email}</Table.Cell>
                <Table.Cell className="text-center">
                  {person.phoneNumber}
                </Table.Cell>
                <Table.Cell className="text-center">
                  {formatDate(person.dateBirth)}
                </Table.Cell>
                <Table.Cell className="text-center">
                  {person.address}
                </Table.Cell>
                <Table.Cell className="text-center">{person.rol}</Table.Cell>
                <Table.Cell className="text-center">
                  {person.userName}
                </Table.Cell>
                <Table.Cell className="text-center flex justify-center space-x-2">
                  <Button onClick={() => handleEditPerson(person)}>
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleDeletePerson(person.cedula)}
                    color="failure"
                  >
                    Borrar
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      {error && (
        <div className="text-red-500 text-center">Error: {error.message}</div>
      )}
      <div className="flex justify-center mt-4">
        <Button onClick={openModal}>Agregar Persona</Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Persona"
        className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center"
        overlayClassName="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      >
        <Card className="max-w-3xl w-full p-8">
          <h2 className="mb-4">
            {isEditing ? "Editar Persona" : "Agregar Persona"}
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" value="Nombre" />
              <TextInput
                id="name"
                type="text"
                name="name"
                value={newPerson.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="cedula" value="Cédula" />
              <TextInput
                id="cedula"
                type="text"
                name="cedula"
                value={newPerson.cedula}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={newPerson.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber" value="Teléfono" />
              <TextInput
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={newPerson.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="dateBirth" value="Fecha de Nacimiento" />
              <TextInput
                id="dateBirth"
                type="date"
                name="dateBirth"
                value={newPerson.dateBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="address" value="Dirección" />
              <TextInput
                id="address"
                type="text"
                name="address"
                value={newPerson.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="rol" value="Rol" />
              <TextInput
                id="rol"
                type="text"
                name="rol"
                value={newPerson.rol}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="userName" value="Nombre de Usuario" />
              <TextInput
                id="userName"
                type="text"
                name="userName"
                value={newPerson.userName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Contraseña" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={newPerson.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
              <Button
                onClick={isEditing ? handleUpdatePerson : handleAddPerson}
              >
                {isEditing ? "Actualizar" : "Agregar"}
              </Button>
              <Button color="failure" onClick={closeModal}>
                Cancelar
              </Button>
            </div>
          </form>
        </Card>
      </Modal>
    </>
  );
};
