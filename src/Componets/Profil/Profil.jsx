import scss from "./Profil.module.scss";
import Frame from "../../assets/Frame 1.svg";
import Vector from "../../assets/Vector.svg";
import { useState } from "react";

function Profil() {
  const initialInputs = [
    { label: "ФИО менеджера", type: "text", value: "Петрова Мария Петровна" },
    { label: "Контактный телефон", type: "text", value: "+7 (999) 999 99-99" },
    { label: "Email", type: "text", value: "ivan@gmail.com" },
    { label: "Пароль", type: "email", value: "qwerty123" },
  ];


  const [inputs, setInputs] = useState(initialInputs);

  const handleInputChange = (index, e, isAdres = false) => {
    if (isAdres) {
      const newAdres = [...adres];
      newAdres[index].value = e.target.value;
      setAdres(newAdres);
    } else {
      const newInputs = [...inputs];
      newInputs[index].value = e.target.value;
      setInputs(newInputs);
    }
  };

  return (
    <section className={scss.Profil}>
      <div className={scss.top}>
        <h1>Менеджер</h1>
      </div>

      <div className={scss.contai_input}>
        {inputs.map((item, index) => (
          <div className={scss.cart} key={index}>
            <div className={scss.title}>
              <p>{item.label}</p>
              <img src={Vector} alt="" />
            </div>
            <input
              type={item.type}
              value={item.value}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profil;
