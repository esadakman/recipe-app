import { useLocation } from "react-router-dom";
import {
  CardDiv,
  DetailsContainer,
  IMGDiv,
  LabelDiv,
  MealInfo,
  MealIngredients,
} from "./Details.styled";
import diet from "../../assets/diet.svg";
import { AboutTitle } from "../about/About.styled";
import { IMGContainer } from "../../components/header/Card.styled";

const Details = () => {
  const recipe = useLocation();
  const {
    label,
    calories,
    totalNutrients: { CA, CHOLE, CHOCDF, ENERC_KCAL, FAT, SUGAR, PROCNT },
    ingredientLines,
    image,
  } = recipe.state;
  console.log(ingredientLines);
  return (
    // {recipe?}
    <DetailsContainer>
      <LabelDiv>
        <AboutTitle>{label}</AboutTitle>
        <IMGContainer>
          <img style={{ border: "none" }} src={diet} alt="" />
        </IMGContainer>
      </LabelDiv>
      <CardDiv>
        <MealInfo>
          <p style={{ whiteSpace: "pre-wrap" }}>
            Nutrients:
            {"\n"}
            {CA.label}:
            <span>
              {Math.floor(CA.quantity)}
              {CA.unit}
            </span>
            {"\n"}
            {CHOCDF.label}:
            <span>
              {Math.floor(CHOCDF.quantity)}
              {CHOCDF.unit}
            </span>
            {"\n"}
            {CHOLE.label}:
            <span>
              {Math.floor(CHOLE.quantity)}
              {CHOLE.unit}
            </span>
            {"\n"}
            {ENERC_KCAL.label}:
            <span>
              {Math.floor(ENERC_KCAL.quantity)}
              {ENERC_KCAL.unit}
            </span>
            {"\n"}
            Calories:
            <span>{Math.floor(calories)}</span>
            {"\n"}
            {FAT.label}:
            <span>
              {Math.floor(FAT.quantity)}
              {FAT.unit}
            </span>
            {"\n"}
            {PROCNT.label}:
            <span>
              {Math.floor(PROCNT.quantity)}
              {PROCNT.unit}
            </span>
            {"\n"}
            {SUGAR.label}:
            <span>
              {Math.floor(SUGAR.quantity)}
              {SUGAR.unit}
            </span>
          </p>
        </MealInfo>
        <IMGDiv>
          <img src={image} alt={label} />
        </IMGDiv>
        <MealIngredients>
          {ingredientLines.map((ingr, index) => {
            return (
              <p key={index}>
                <span> {index + 1}</span> : {ingr}
              </p>
            );
          })}
        </MealIngredients>
      </CardDiv>
    </DetailsContainer>
  );
};

export default Details;
