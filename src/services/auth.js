import callAPI from "../config/api";

export async function setSignUpUser(data) {
  const url = "https://paw-kelompok18.vercel.app/users/signup";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setLoginUser(data) {
  const url = "https://paw-kelompok18.vercel.app/users/login";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setSignUpDoctor(data) {
  const url = "https://paw-kelompok18.vercel.app/doctors/signup";

  return callAPI({
    url,
    method: "post",
    data,
  });
}

export async function setLoginDoctor(data) {
  const url = "https://paw-kelompok18.vercel.app/doctors/login";

  return callAPI({
    url,
    method: "post",
    data,
  });
}
