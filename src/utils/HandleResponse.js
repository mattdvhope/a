export const HandleResponse = (res) => {
  if (!res.ok) {
    res.json().then(e => Promise.reject(e))
  } else {
    return res.json()
  }
}