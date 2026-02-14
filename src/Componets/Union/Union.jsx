import scss from "./Union.module.scss";
import { Link } from "react-router-dom";
import Person from "../../assets/person-outline.svg";
import Call from "../../assets/call-outline.svg";

function Union() {
  return (
    <section className={scss.Union}>
      <Link to="/Home_Date/Union_Profil">
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
      </Link>
    </section>
  );
}

export default Union;
