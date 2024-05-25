import { Table, Button } from "flowbite-react";

const PersonTable = ({ persons, handleEditPerson, handleDeletePerson }) => (
  <div className="mt-4 mb-8 overflow-x-auto flex justify-center">
    {persons.length === 0 ? (
      <div className="text-center ">No hay datos registrados</div>
    ) : (
      <Table hoverable className="w-full max-w-4x">
        <Table.Head>
          <Table.HeadCell className="text-center">Nombre</Table.HeadCell>
          <Table.HeadCell className="text-center">Cédula</Table.HeadCell>
          <Table.HeadCell className="text-center">Email</Table.HeadCell>
          <Table.HeadCell className="text-center">Teléfono</Table.HeadCell>
          <Table.HeadCell className="text-center">Fecha de Nacimiento</Table.HeadCell>
          <Table.HeadCell className="text-center">Dirección</Table.HeadCell>
          <Table.HeadCell className="text-center">Rol</Table.HeadCell>
          <Table.HeadCell className="text-center">Nombre de Usuario</Table.HeadCell>
          <Table.HeadCell className="text-center">Acciones</Table.HeadCell>
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
              <Table.Cell className="text-center">{person.phoneNumber}</Table.Cell>
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
    )}
  </div>
);

export default PersonTable;
