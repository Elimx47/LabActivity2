import { Form, Dropdown } from "react-bootstrap";

function Filter() {
  return (
    <div
      style={{
        backgroundColor: "#444444",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "90px",
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <p className="mb-3" style={{ color: "white", marginRight: "20px" }}>
        Courses:
      </p>
      <Form style={{ display: "flex", alignItems: "center" }}>
        <div key="inline-checkbox" className="mb-3">
          <Form.Check
            inline
            label="Instructor Led"
            name="Instructor Led"
            type="checkbox"
            id="inline-checkbox-1"
            style={{ color: "white" }}
          />
          <Form.Check
            inline
            label="Online Self-Paced"
            name="Online Self-Paced"
            type="checkbox"
            id="inline-checkbox-2"
            style={{ color: "white", marginLeft: "10px" }}
          />
        </div>
      </Form>
      <Dropdown inline style={{ marginLeft: "20px" }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Skill Level - All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Skill Level - All</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Beginning</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Intermediate</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Advanced</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown inline style={{ marginLeft: "10px" }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Language - All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Filipino</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Chinese</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown inline style={{ marginLeft: "10px" }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Topic - All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Networking</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cybersecurity</Dropdown.Item>
          <Dropdown.Item href="#/action-3">IOT</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filter;
