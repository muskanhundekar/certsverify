import { useNavigate } from "react-router-dom";
import Upload_fileApi from "../Api/Upload_file.api";

function DumpData() {
  const navigate = useNavigate();
  const formSubmitHandler = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    const res = await Upload_fileApi.upload_file(formData);
    navigate(`/certificates/${res.id}`);
  };
  return (
    <form onSubmit={formSubmitHandler} encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">
          Select Your Csv File
        </label>
        <input
          className="form-control form-control-sm"
          id="formFileSm"
          accept=".csv"
          name="csv_file"
          type="file"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default DumpData;
