import './Doctor.scss';
import './Hospitals.scss'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SearchDoctor from "../components/SearchDoctor"
import { Container, Row } from "react-bootstrap";


function Doctors(){
    return(
        <div>
            <Navigation />
            <main  className="doctor-section">
                <Container fluid>
                    <div className='title'>
                        <div className="title text-center">
                            <span className="text-uppercase">Find a Doctor</span>
                        </div>
                    </div>
                    <Row className="align-item-center justify-content-center">
                        <SearchDoctor />
                    </Row>
                </Container>
            </main>
            <Footer />
        </div>
    );
};

export default Doctors;