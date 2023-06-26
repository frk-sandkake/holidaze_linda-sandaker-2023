import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export interface UpdateAvatarForm {
    avatar: string;
}

interface UpdateAvatarFormProps {
    onSubmit: (data: UpdateAvatarForm) => void;
}

const UpdateAvatarForm = ({ onSubmit }: UpdateAvatarFormProps) => {
    const [formState, setFormState] = useState<UpdateAvatarForm>({
        avatar: "",
      });

    const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formState)
    setFormState({ avatar: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="avatar">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
         type="text"
         name="avatar"
         accept="http/https/*"
         value={formState.avatar}
         onChange={handleInputChange}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default UpdateAvatarForm;
