import { useState, useEffect } from "react"; 
import { Col, Container, Row } from "react-bootstrap";
import {RiFacebookCircleLine} from 'react-icons/ri';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineYoutube} from 'react-icons/ai';
import pic1 from "../assets/img/pic1.jpg";
import '../css/About.css';

export const About = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Đẹp Trai ", " Tài Lăng ", " Lãnh Đạo "];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta )

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(preDelta => preDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="about" id="home">
            <Container>
                <Row>
                    <span className="tagline">Chào mừng đến với trang About</span>
                    <div className="about-content">
                        <Col>
                            
                            <h1>{`Xin chào! Tôi là Trần Công Bình`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " Đẹp Trai ", " Tài Năng ", " Lãnh Đạo " ]'><span className="wrap">{text}</span></span></h1>
                            <p>Tôi hiện là sinh viên của trường Đại Học Sư Phạm Thành phố Hố Chí Minh. Tôi học khoa Công nghệ thông tin, thuộc lớp CNTTA, chuyên ngành của tôi là công nghệ phần mềm.
                                <br></br>
                                TODO-app là dự án đầu tiên tôi tạo ra bằng ngôn ngữ reactjs. Đây là trang web gồm phần chính TODO giúp quản lý giờ giấc sinh hoạt hằng ngày, ngoài ra còn có trang Login giúp đăng nhập tài khoản người dùng, trang About để giới thiệu bản thân và trang Home để thông báo
                            </p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/profile.php?id=100043750991700" className="fb-icon"><RiFacebookCircleLine/></a>
                                <a href="https://www.instagram.com/" className="insta-icon"><BsInstagram/></a>
                                <a href="https://www.youtube.com/channel/UCfTP2f9W7L9I9OLphvlZTmQ" className="yt-icon"><AiOutlineYoutube/></a>
                            </div>
                        </Col>
                        <Col>
                            <img src={pic1} alt="Header Img"></img>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}