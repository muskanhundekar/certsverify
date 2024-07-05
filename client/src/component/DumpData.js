import { useNavigate } from "react-router-dom";
import Upload_fileApi from "../Api/Upload_file.api";
import { useState } from "react";
export default function DumpData() {
    const navigate = useNavigate();
     const [files,setFiles]=useState();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('csv_file', files);
        const data = Object.fromEntries(formData);
        try {
            const res = await Upload_fileApi.upload_file(formData)
            if (res.id) {
                navigate(`/admin/certificates/${res.id}`)
            } else {
              console.log("something went wrong")
            }
        } catch (error) {
            console.log("error")
        }
    };
    return (
        <form encType="multipart/form-data">
            <div className="mb-3">
                <label htmlFor="formFileSm" className="form-label">
                    Select Your Csv File
                </label>
                <input
                    className="form-control form-control-sm"
                    id="formFileSm"
                    // accept=".csv"
                    name="csv_file"
                    type="file"
                    onChange={(e)=>{setFiles(e.target.files[0])}}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e)=>formSubmitHandler(e)}>
                Submit
            </button>
        </form>
    );
}
