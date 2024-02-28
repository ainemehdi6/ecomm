export async function getAll() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFpbmVtZWhkaTZAZ21haWwuY29tIiwiaWQiOiI2NWM2M2E5ODZhYjgyMzAyOWRkZGI4ZjEiLCJpYXQiOjE3MDc0OTE3ODd9.ncRlgiInpGQ_GOJKxMI-XD3Ku7DF0pC-PfFbNGuByP0";

    let result = await fetch("http://localhost:3000/Product", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    let data = await result.json();
    return data;
}
