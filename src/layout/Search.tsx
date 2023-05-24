import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center py-2 w-75">
      <Form.Control
        type="text"
        placeholder="Search for a venue"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-pill mr-sm-2"
      />
      <Button className="btn-sm" variant="outline-secondary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
