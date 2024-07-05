import _default from "../utils/Config/default";

const getAllCerticate = async (id: string) => {
  const response = await fetch(
    `${_default.urlresource}getAllCertificates_csv_id/${id}`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export default {
  getAllCerticate,
};
