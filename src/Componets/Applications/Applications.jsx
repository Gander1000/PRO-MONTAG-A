import scss from "./Applications.module.scss";
import Icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import Person from "../../assets/person-outline.svg";
import Call from "../../assets/call-outline.svg";

function Applications() {
  return (
    <section className={scss.Applications}>
      <div className={scss.contai_top}>
        <div className={scss.container}>
          <h2>Уведомления по заявкам</h2>
          <Link to="/Home_Date/Union_Profil">
            <div className={scss.cart}>
              <img src={Icon} alt="" />
              <div className={scss.title}>
                <div className={scss.red_title}>
                  <h3>
                    Поступила новая заявка №АД00521250 от магазина “Академия
                    дверей”{" "}
                  </h3>
                </div>
                <div className={scss.top}>
                  <h3>АД00521250</h3>
                  <h3>25.12.2025</h3>
                </div>
                <div className={scss.bottom}>
                  <h4>Монтаж дверей</h4>
                  <span>Ожидает услугу</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/Home_Date/Union">
          <button>Посмотреть все</button>
        </Link>
      </div>
      <div className={scss.contai_bottom}>
        <div className={scss.h3}>
          <h3>Активные заявки</h3>
        </div>
        <div className={scss.contai_cart}>
          <div className={scss.cart_bottom}>
            <button>Ожидает звонок</button>
            <div className={scss.title}>
              <h3>АД00521250</h3>
              <p>Монтаж дверей</p>
              <span>15.01.2026</span>
              <div className={scss.contai_don}>
                <p>
                  <img src={Person} alt="" />
                  Иванович Иван Иванов
                </p>
                <p>
                  <img src={Call} alt="" />
                  +7 (999) 999 99-99
                </p>
              </div>
              <div className={scss.price}>
                <p>Стоимость</p>
                <p>20 000 ₽</p>
              </div>
            </div>
          </div>
        </div>
        <Link to="/Home_Date/Union">
          <button>Посмотреть все</button>
        </Link>
      </div>
    </section>
  );
}

export default Applications;
