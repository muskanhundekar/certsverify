import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Get_All_Certificate from "../Api/Get_All_Certificate";
import TableViewer from "react-js-table-with-csv-dl";

export interface certificateType {
  model: string;
  pk: number;
  fields: Fields;
}

export interface Fields {
  first_name: string;
  last_name: string;
  city: any;
  state: any;
  country: any;
  address: any;
  mobile: any;
  email: string;
  university_name: any;
  degree: any;
  event_name: any;
  event_date: any;
  U_ID: string;
  csv_file_id: string;
}

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
  const [certificates, setData] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await Get_All_Certificate.getAllCerticate(csv_id as string);
      const response = data.data as certificateType[];
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
