import _default from "../utils/Config/default";

const login = async (data: any) => {
  const response = await fetch(`${_default.urlresource}login/`, {
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
  login,
};
