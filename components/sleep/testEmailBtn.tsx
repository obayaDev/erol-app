"use client"

export default function TestEmailBtn(){

  interface response {
    exist: boolean,
    error: Object,
  }

  return(
    <div><button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => {
      fetch("/api/email/emailExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "obaya27k@gmail.com",
        }),
      })
      .then(async (res) => res.json())
      .then((data) => {
        console.log(data);
      });
    }}>Enviar Email</button></div>
  )
}