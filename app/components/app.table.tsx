"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "./create.modal";
import { useState } from "react";

interface IProps {
  blogs: IBlog[];
}

function Tables(props: IProps) {
  const { blogs } = props;

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setShowModalCreate(true)}>
          Add new
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>no</th>
            <th>Tittle</th>
            <th>author</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.author}</td>
                <td>{blog.title}</td>
                <td>
                  <Button>View</Button>
                  <Button variant="warning" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
    </>
  );
}
/*

flow render -> lý do tại sao ở lần render đầu blogs lại là undefined  
1️⃣ Home component render lần đầu
2️⃣ useSWR chạy
   → chưa fetch xong
   → data = undefined
   → isLoading = true
3️⃣ JSX render
   → <Tables blogs={data} />  // data = undefined
4️⃣ fetch xong
5️⃣ SWR set data
6️⃣ Home render lần 2
   → data = [...]
*/

export default Tables;
