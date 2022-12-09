import callAPI from "../config/api";

export async function getDoctor() {
  const url = "https://bedocin.vercel.app/doctors";

  return callAPI({
    url,
    method: "get",
  });
}
