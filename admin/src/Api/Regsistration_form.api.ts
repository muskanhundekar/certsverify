import _default from "../utils/Config/default";

const urlresource = "http://localhost:8000/certs/";

const createNewCertificate = async (data: any) => {
  const response = await fetch(`${_default.urlresource}data_entry/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default {
  createNewCertificate,
};
