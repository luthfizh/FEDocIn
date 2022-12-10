import callAPI from "../config/api";

export async function setSignUpUser(data) {
  const url = "https://bedocin.vercel.app/users/signup";

  return callAPI({
    url,
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://bedocin.vercel.app/"
    },
  });
}

export async function setLoginUser(data) {
  const url = "https://bedocin.vercel.app/users/login";

  return callAPI({
    url,
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://bedocin.vercel.app/"
    },
  });
}

export async function setSignUpDoctor(data) {
  const url = "https://bedocin.vercel.app/doctors/signup";

  return callAPI({
    url,
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://bedocin.vercel.app/"
    },
  });
}

export async function setLoginDoctor(data) {
  const url = "https://bedocin.vercel.app/doctors/login";

  return callAPI({
    url,
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://bedocin.vercel.app/"
    },
  });
}
