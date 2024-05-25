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
  try {
    await deletePersonData(id);
    toast.success("Person deleted successfully");
  } catch (error) {
    toast.error(`Error deleting person: ${error.message}`);
  }
};

export const addPerson = async (personData) => {
  try {
    await createPersonData(personData);
    toast.success("Person created successfully");
    return true;
  } catch (error) {
    toast.error(error.message || "Unknown error occurred");
    return false;
  }
};

export const updatePerson = async (personData) => {
  try {
    await updatePersonData(personData.cedula, personData);
    toast.success("Person updated successfully");
    return true;
  } catch (error) {
    toast.error(error.message || "Unknown error occurred");
    return false;
  }
};
