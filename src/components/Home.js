import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      
        <Section
          title="Model S"
          description="Order Online For Touchless Delibery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model Y"
          description="Order Online For Touchless Delibery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order Online For Touchless Delibery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order Online For Touchless Delibery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels In America"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section
          title="Acessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        />
     
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
