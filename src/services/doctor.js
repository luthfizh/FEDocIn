import callAPI from "../config/api";

export async function getDoctor() {
  const url = "http://localhost:5000/doctors";

  return callAPI({
    url,
    method: "get",
  });
}
