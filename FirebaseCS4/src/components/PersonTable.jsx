/* eslint-disable react/prop-types */
import { Table, Button } from "flowbite-react";

const PersonTable = ({ persons, handleEditPerson, handleDeletePerson }) => (
  <div className="mt-4 mb-8 overflow-x-auto flex justify-center">
    <Table hoverable className="w-full max-w-4x">
      <Table.Head>
        <Table.HeadCell className="text-center">Name</Table.HeadCell>
        <Table.HeadCell className="text-center">Cedula</Table.HeadCell>
        <Table.HeadCell className="text-center">Email</Table.HeadCell>
        <Table.HeadCell className="text-center">Phone Number</Table.HeadCell>
        <Table.HeadCell className="text-center">Date of Birth</Table.HeadCell>
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
            <Table.Cell className="text-center">{person.dateBirth}</Table.Cell>
            <Table.Cell className="text-center">{person.address}</Table.Cell>
            <Table.Cell className="text-center">{person.rol}</Table.Cell>
            <Table.Cell className="text-center">{person.userName}</Table.Cell>
            <Table.Cell className="text-center flex justify-center space-x-2">
              <Button onClick={() => handleEditPerson(person)}>Editar</Button>
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
);

export default PersonTable;
