// personServices.js
import {
  fetchPersonData,
  deletePersonData,
  createPersonData,
  updatePersonData,
} from "../api/person";
import { toast } from "react-hot-toast";

export const loadpersonsData = async (setPersonData, setError, id = null) => {
  try {
    const data = await fetchPersonData(id);
    setPersonData(data);
  } catch (error) {
    setError(error);
    toast.error(error.response.data.message);
  }
};

export const handleDelete = async (id) => {
  console.log("ID to delete:", id);
  try {
    await deletePersonData(id);
    toast.success("Transaction deleted successfully");
  } catch (error) {
    toast.error(`Error deleting transaction: ${error.message}`);
  }
};

export const addPerson = async (
  name,
  cedula,
  email,
  phoneNumber,
  dateBirth,
  address,
  userName,
  password,
  instraction
) => {
  if (
    !name ||
    !cedula ||
    !email ||
    !phoneNumber ||
    !dateBirth ||
    !address ||
    !userName ||
    !password
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  try {
    const formData = {
      name,
      cedula,
      email,
      phoneNumber,
      dateBirth,
      address,
      userName,
      password,
      rol: instraction.name,
    };

    console.log("Datos enviados en la solicitud POST:", formData);
    await createPersonData(formData);
    toast.success("Person created successfully");
    return true;
  } catch (error) {
    toast.error(error.message || "Unknown error occurred");
    console.error("Error creating person: ", error);
    return false;
  }
};

export const updatePerson = async (
  name,
  cedula,
  email,
  phoneNumber,
  dateBirth,
  address,
  userName,
  password,
  instraction
) => {
  if (
    !name ||
    !cedula ||
    !email ||
    !phoneNumber ||
    !dateBirth ||
    !address ||
    !userName ||
    !password
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  try {
    const updatedPersonData = {
      name,
      cedula,
      email,
      phoneNumber,
      dateBirth,
      address,
      userName,
      password,
      rol: instraction.name,
    };

    console.log("Datos enviados en la solicitud PUT:", updatedPersonData);
    await updatePersonData(cedula, updatedPersonData);
    toast.success("Person updated successfully");
    return true;
  } catch (error) {
    toast.error(error.message || "Unknown error occurred");
    console.error("Error updating person: ", error);
    return false;
  }
};
