import "./CorporateManagment.css";
import Card from "../Service/Card";
import Title from "../Service/Title";
import city from "../../assets/img/Managment/city.png";
function CorporateManagment() {

  return (
    <div className="managment">
      <img
        className="managment__img-city"
        src={city}
      ></img>
      <div className="managment__card-block">
        <Card className="managment__card managment__card-gold">
          <Title
            titleClassName={"managment__card-title-big"}
            titleText={"corporate management"}
          />
        </Card>
        <Card className="managment__card managment__card-blue-light">
          <Title
            titleClassName={"managment__card-title"}
            titleText={"Reverse Takeovers"}
          />
        </Card>
        <Card className="managment__card managment__card-blue-medium">
          <Title
            titleClassName={"managment__card-title"}
            titleText={"Placement"}
          />
        </Card>
        <Card className="managment__card managment__card-blue-light">
          <Title
            titleClassName={"managment__card-title"}
            titleText={"Investor Relations"}
          />
        </Card>
        <Card className="managment__card managment__card-blue-medium">
          <Title
            titleClassName={"managment__card-title"}
            titleText={"Management & Board Composition"}
          />
        </Card>
        <Card className="managment__card managment__card-blue-dark">
          <Title
            titleClassName={"managment__card-title"}
            titleText={`Company Secretarial 
              & Financial Services`}
          />
        </Card>
      </div>
    </div>
  );
}

export default CorporateManagment;
