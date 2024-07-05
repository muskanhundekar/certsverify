import _default from "../utils/Config/default";

const upload_file = async (formData: FormData) => {
  const response = await fetch(`${_default.urlresource}upload/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });
  return response.json();
};

export default {
  upload_file,
};
