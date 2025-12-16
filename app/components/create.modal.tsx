"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (value: boolean) => void;
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;

  const [title, setTittle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleCloseModal = () => {
    setAuthor("");
    setTittle("");
    setContent("");
    setShowModalCreate(false);
  };

  const handleSubmit = async () => {
    if (!title || !author || !content) return;

    await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, content }),
    });

    handleCloseModal();
  };

  return (
    <Modal show={showModalCreate} onHide={handleCloseModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Add new blog</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTittle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={content}
            onChange={(e) => setContent(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal;
