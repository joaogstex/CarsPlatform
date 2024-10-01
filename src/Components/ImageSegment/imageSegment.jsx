import './imageSegment.css';
import styled from 'styled-components';

const Button = styled.button`
    display: ${({ show }) => (show ? 'block' : 'none')};
`;

function ImageSegment(props) {

    const { description, title, showButton = true } = props;

    return (
        <div className='container-car-segment'>
            <img src={props.imgSrc} id="car-segment-img" alt="Car Segment" />
            <div className='overlay'></div>
            <div className='text-content'>
                <h2 className='title-car-segment'>
                    {title.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}</h2>
                <p className='info-car-segment'>   
                    {description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}</p>
                <Button className='car-segment-find-cars-btn' show={showButton}>{props.button}</Button>
            </div>
        </div>
    );
}

export default ImageSegment;
