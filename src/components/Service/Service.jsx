import "./Cards.css";
import Card from "./Card";
import Title from "./Title";

function Cards() {
  const big_title = `Our 
  SERVICES`;
  const smaill_title = `SPUTNIK identifies and invests in unique,
   early stage businesses that requires corporate finance expertise,
    or equity capital to support the development and growth of their assets and reaching their goals.`;
  const second_title_text = `SPUTNIK works closely with teams to provide the financial,
     operational and strategic support required to bring businesses from concept to market deployment,
    commercialisation and beyond.`;
  return (
    <div className="service">
      <img className="service__bg-moon" src="./moon.png"></img>
      <div className="service__main">
        <div className="service__title">
          <Title titleClassName={"service__title-big"} titleText={big_title} />
          <Title
            titleClassName={"service__title-small-gold"}
            titleText={smaill_title}
          />
        </div>
        <img
          className="service__title-img"
          src="./money.png"
        ></img>
      </div>
      <div className="menu_header_elipse"></div>
      <div className="service__card">
        <Card className="service__card-padding service__card-brown-light">
          <Title titleClassName={"service__card-number"} titleText={"01"} />
          <Title
            titleClassName={"service__card-title-big"}
            titleText={`Corporate 
            Advisory`}
          />
          <Title
            titleClassName={"service__card-title-small"}
            titleText={second_title_text}
          />
        </Card>
        <Card className={"service__card-padding service__card-brown-medium"}>
          <Title titleClassName={"service__card-number"} titleText={"02"} />
          <Title
            titleClassName={"service__card-title-big"}
            titleText={`Venture     Capital`}
          />
          <Title
            titleClassName={"service__card-title-small"}
            titleText={second_title_text}
          />
        </Card>
        <Card className="service__card-padding service__card-brown-dark">
          <Title titleClassName={"service__card-number"} titleText={"03"} />
          <Title
            titleClassName={"service__card-title-big"}
            titleText={"Investment & Distribution"}
          />
          <Title
            titleClassName={"service__card-title-small"}
            titleText={second_title_text}
          />
        </Card>
      </div>
      <img
        className="service__img-sputnik"
        src="./sputnik.png"
      ></img>
    </div>
  );
}

export default Cards;
