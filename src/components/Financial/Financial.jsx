import "../Service/Cards.css";
import "../Header/Header.css";
import "../Financial/Financial.css";
import Card from "../Service/Card";
import Title from "../Service/Title";
import img_1 from "../../assets/img/Financial/img_1/financial1.png";
import img_2 from "../../assets/img/Financial/img_2/financial2.png";
import img_3 from "../../assets/img/Financial/img_3/financial3.png";
import img_4 from "../../assets/img/Financial/img_4/financial4.png";

function Financial() {
  return (
    <div className="financial">
      <div className="financial__text">
        <Title
          titleClassName={"financial__text-big"}
          titleText={"financial advisory"}
        />
        <Title
          titleClassName={"financial__text-small"}
          titleText={`With decades of combined experience in finance, stockbroking,
            investment advisories and corporate finance, our team brings a
            superior level of financial expertise to each company in our
            portfolio.`}
        />
      </div>
      <div className="finanicial__card">
        <Card className="financial__card_advisory">
          <div className="card_number_with-image">
            <Title
              titleClassName={"card_number card_number_left"}
              titleText={"01"}
            />
            <img className="coin-img" src={img_1}></img>
          </div>
          <Title
            titleClassName={"financial__card-title"}
            titleText={"Private equity funding"}
          />
        </Card>
        <Card className="financial__card_advisory">
          <div className="card_number_with-image">
            <Title
              titleClassName={"card_number card_number_left"}
              titleText={"02"}
            />
            <img className="coin-img" src={img_2}></img>
          </div>
          <Title
            titleClassName={"financial__card-title"}
            titleText={`Seed Capital`}
          />
        </Card>
        <Card className="financial__card_advisory">
          <div className="card_number_with-image">
            <Title
              titleClassName={"card_number card_number_left"}
              titleText={"03"}
            />
            <img className="coin-img" src={img_3}></img>
          </div>
          <Title
            titleClassName={"financial__card-title"}
            titleText={"Pre-IPO Capital"}
          />
        </Card>
        <Card className="financial__card_advisory">
          <div className="card_number_with-image">
            <Title
              titleClassName={"card_number card_number_left"}
              titleText={"04"}
            />
            <img className="coin-img" src={img_4}></img>
          </div>
          <Title titleClassName={"financial__card-title"} titleText={"IPO’s"} />
        </Card>
      </div>
    </div>
  );
}

export default Financial;
