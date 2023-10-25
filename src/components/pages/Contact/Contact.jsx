import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const navigate = useNavigate();
  //enviar form
  const onSubmit = (e) => {
    e.preventDefault();
    const mailInput = document.getElementById("mail");
    const descriptionInput = document.getElementById("description");

    // Check if some input is empty
    if (!mailInput.value || !descriptionInput.value) {
      Swal.fire("Error", "Por favor rellena todos los campos", "error");
      return;
    }

    console.log("submit");
    Swal.fire("Gracias!", "Hemos recibido tu solicitud", "success");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center py-32 gap-8">
      <h1 className="text-4xl">Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-1/4 px-6 gap-6 items-center"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="mail">Correo:</label>
          <input
            className="rounded-lg border border-gray-300 text-gray-900 text-2xl focus:ring-red-500 block w-full p-2"
            type="email"
            name="mail"
            id="mail"
            placeholder="name@example.com"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="description">Descripción</label>
          <textarea
            className="rounded-lg border border-gray-300 text-gray-900 text-2xl focus:ring-red-500 block w-full p-2"
            type="text"
            name="description"
            id="description"
            rows={4}
          />
        </div>
        <div>
          <button
            className="bg-red-500 text-white rounded-lg text-xl px-6 py-2  w-fit"
            type="submit"
          >
            Enviar 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
