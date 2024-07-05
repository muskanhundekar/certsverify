import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Get_All_Certificate from "../Api/Get_All_Certificate";
import TableViewer from "react-js-table-with-csv-dl";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Operations",
    dataIndex: "",
    key: "operations",
    render: () => <a href="#">Delete</a>,
  },
];

const data = [
  { name: "Jack", age: 28, address: "some where", key: "1" },
  { name: "Rose", age: 36, address: "some where", key: "2" },
];

export default function AllCertificates() {
  const { csv_id } = useParams();
  const [certificates, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await Get_All_Certificate.getAllCerticate(csv_id);
      const response = data.data;
      const newData = response.map((ele) => {
        return {
          first_name: ele.fields.first_name,
          last_name: ele.fields.last_name,
          email: ele.fields.email,
          u_id: ele.fields.U_ID,
        };
      });
      setData(newData);
    };
    getData();
  }, []);
  console.log(csv_id);
  return (
    <div>
      <TableViewer
        content={certificates}
        headers={["first_name", "last_name", "email", "u_id"]}
        minHeight={0}
        maxHeight={400}
        activateDownloadButton={true}
        bodyCss={{ backgroundColor: "#333232" }}
        pagination={20}
      />
    </div>
  );
}
