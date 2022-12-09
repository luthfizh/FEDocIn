import callAPI from "../config/api";

export async function setSignUpUser(data) {
  const url = "http://localhost:5000/users/signup";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setLoginUser(data) {
  const url = "http://localhost:5000/users/login";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setSignUpDoctor(data) {
  const url = "http://localhost:5000/doctors/signup";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setLoginDoctor(data) {
  const url = "http://localhost:5000/doctors/login";

  return callAPI({
    url,
    method: "post",
    data,
  });
}
