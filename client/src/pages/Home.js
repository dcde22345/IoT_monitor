import React from 'react';
import { Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
    NavbarComponent,
    TemperatureChart,
    HumidityChart,
    Infomation,
    ABoxSwitch,
    Footer,
  } from "../component/components";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="App d-flex justify-content-center align-items-center">
        <Container>
          <Container className="wrap d-flex justify-content-center align-items-center w-100">
            <ABoxSwitch />
          </Container>
          <Infomation />
          <Footer />
          {/* <Row className='mt-5'>
          <Col xs='12' sm='6'>
            <h2 className='m-3 text-center display-6 fw-bold'>溫度</h2>
            <TemperatureChart data={data} />
          </Col>
          <Col xs='12' sm='6'>
            <h2 className='m-3 text-center display-6 fw-bold'>濕度</h2>
            <HumidityChart data={data} />
          </Col>
        </Row> */}
        </Container>
      </div>
    </>
  )
};

export default Home;