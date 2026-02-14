import scss from "./Union_Profil.module.scss";
import Arrow from "../../assets/arrow-back-outline.svg";
import Person from "../../assets/person-outline.svg";
import Call from "../../assets/call-outline.svg";
import { Link } from "react-router-dom";
import document from "../../assets/documents-outline.svg";
import Vector from "../../assets/Vector.svg";
import Vector_top from "../../assets/Vector 7.svg";
import { useState } from "react";
import iconamoon from "../../assets/iconamoon.svg";
import iconamoon_exit from "../../assets/iconamoon_exit.svg";
import iconamoon_exit_red from "../../assets/iconamoon_exit_red.svg";
import calendar_outline from "../../assets/calendar-outline.svg";

function Union_Profil() {
  const [icon, setIcon] = useState(iconamoon_exit);
  const [comment, setComment] = useState("");
  const [comment_meneger, setComment_meneger] = useState("");
  const [meneger, setMeneger] = useState("");
  const [number_meneg, setNumber_meneg] = useState("");
  const [pro_montag, setPro_montag] = useState("");
  const [pro_number, setPro_number] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [vreme, setVreme] = useState("");

  return (
    <section className={scss.Union_Profil}>
      <div className={scss.container}>
        <Link to="/Home_Date/Union">
          <img src={Arrow} alt="" width={20} />К заявкам
        </Link>
        <div className={scss.contai_top}>
          <div className={scss.title}>
            <div className={scss.top_title}>
              <h1>
                АД00521250<span>Информация о заказе</span>
              </h1>
              <div className={scss.contai_p}>
                <p>
                  <img src={Person} alt="" />
                  Иванович Иван Иванов
                </p>
                <p>
                  <img src={Call} alt="" />
                  +7 (999) 999 99-99
                </p>
              </div>
            </div>
            <div className={scss.contai_dan}>
              <h2 className={scss.montag}>
                Тип заявки<span>Монтаж</span>
              </h2>
              <h2>
                Город<span>Г. Москва</span>
              </h2>
              <h2>
                Улица<span>ул. Спиридоновка</span>
              </h2>
              <h2>
                Дом<span>25/20с1</span>
              </h2>
            </div>
          </div>
          <div className={scss.title_rght}>
            <div className={scss.top_right}>
              <div className={scss.left}>
                <h3>Комментарий к заказу</h3>
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Вы можете оставить комментарий к заказу, кликнув на поле"
                />
              </div>
              <div className={scss.Status}>
                <h3>Статус заявки</h3>
                <span>
                  Ожидает звонок <img src={Vector_top} alt="" />
                </span>
              </div>
              <div className={scss.delete}>
                <img
                  onClick={() =>
                    setIcon(
                      icon === iconamoon_exit
                        ? iconamoon_exit_red
                        : iconamoon_exit,
                    )
                  }
                  src={icon}
                  alt=""
                />
                <img src={iconamoon} alt="" />
              </div>
            </div>
            <div className={scss.top_dan}>
              <div className={scss.contai_mes}>
                <div className={scss.contai_dan}>
                  <h2>Менеджер</h2>
                  <div className={scss.contai_p}>
                    <p>
                      <img src={Person} alt="" />
                      <input
                        value={meneger}
                        onChange={(e) => setMeneger(e.target.value)}
                        type="text"
                      />
                      <img src={Vector} alt="" />
                    </p>
                    <p>
                      <img src={Call} alt="" />
                      <input
                        value={number_meneg}
                        onChange={(e) => setNumber_meneg(e.target.value)}
                        type="text"
                      />
                      <img src={Vector} alt="" />
                    </p>
                  </div>
                </div>
                <div className={scss.contai_dan}>
                  <h2>
                    Специалист <br /> по монтажу
                  </h2>
                  <div className={scss.contai_p}>
                    <p>
                      <img src={Person} alt="" />
                      <input
                        value={pro_montag}
                        onChange={(e) => setPro_montag(e.target.value)}
                        type="text"
                      />
                      <img src={Vector} alt="" />
                    </p>
                    <p>
                      <img src={Call} alt="" />
                      <input
                        value={pro_number}
                        onChange={(e) => setPro_number(e.target.value)}
                        type="text"
                      />
                      <img src={Vector} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <div className={scss.contai_date}>
                <div className={scss.top_price}>
                  <h3>Стоимость</h3>
                  <div className={scss.input_price}>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                    />
                    <p>₽</p>
                    <img src={Vector} alt="" />
                  </div>
                </div>
                <div className={scss.contai_data}>
                  <div className={scss.application_date}>
                    <h3>Дата заявки</h3>
                    <span>25.12.2025</span>
                  </div>
                  <div className={scss.Date_and_time_of_work}>
                    <h3>Дата и время работ</h3>
                    <div className={scss.calendar}>
                      <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="text"
                        placeholder="__.__.____"
                      />
                      <input
                        value={vreme}
                        onChange={(e) => setVreme(e.target.value)}
                        type="text"
                        placeholder="__:__"
                      />
                      <img src={calendar_outline} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.bottom_input}>
              <h1>Комментарий менеджера магазина</h1>
              <input
                value={comment_meneger}
                onChange={(e) => setComment_meneger(e.target.value)}
                type="text"
                placeholder="Изначальный комментарий, который оставил магазин при создании заявки"
              />
            </div>
          </div>
        </div>
        <div className={scss.contai_buttom}>
          <div className={scss.bottom_left}>
            <h1>Файлы, прикрепленные магазином</h1>
            <a href="">
              <img src={document} alt="" />
              Скачать все файлы
            </a>
            <div className={scss.contai_fail}>
              <a href="">Замеры.docx</a>
              <a href="">Замеры1.docx</a>
              <a href="">Замеры2.docx</a>
            </div>
            <h1>Файлы, прикрепленные менеджером</h1>
            <a href="">
              <img src={document} alt="" />
              Скачать все файлы
            </a>
            <div className={scss.contai_fail}>
              <a href="">Прайс.docx</a>
              <a href="">Прайс1.docx</a>
              <a href="">Прайс2.docx</a>
            </div>
          </div>
          <div className={scss.bottom_rght}>
            <h1>Добавьте файл загрузив по клику или перетащив его в область</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Union_Profil;
