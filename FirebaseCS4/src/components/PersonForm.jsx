import { Button, Label, TextInput, Card } from "flowbite-react";

const PersonForm = ({ isEditing, newPerson, handleInputChange, handleAddPerson, handleUpdatePerson, closeModal }) => (
  <Card className="max-w-3xl w-full p-8">
    <h2 className="mb-4">{isEditing ? "Editar Persona" : "Agregar Persona"}</h2>
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
        <Button type="button" onClick={isEditing ? handleUpdatePerson : handleAddPerson}>
          {isEditing ? "Actualizar" : "Agregar"}
        </Button>
        <Button type="button" color="failure" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </form>
  </Card>
);

export default PersonForm;
