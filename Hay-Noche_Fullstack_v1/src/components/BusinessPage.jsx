import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Heading2 from './Heading2';
import MapButton from './MapButton';
import './BusinessPage.css';
import axios from 'axios';

//axios is in BusinessPageContainer

const Heading1 = styled(Heading2)(({ theme }) => ({
  width: `428px`,
  height: `82px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Rectangle1 = styled('div')({
    backgroundColor: `rgba(13, 12, 19, 0.8)`,
    width: `428px`,
    height: `926px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Square1 = styled('div')({
    backgroundColor: 'white',
    backgroundImage: `url('/assets/images/Flyer5.jpg')`,
    backgroundSize: 'cover',
    width: `428px`,
    height: `486px`,
    position: `absolute`,
    left: `0px`,
    top: `82px`,
  });


  const Name = styled('h1')({
    position: 'absolute',
    left: '20px',
    top: '580px',
    fontSize: '24px',
    margin: '0',
    padding: '0',
    color: 'white',
  });
  
  const Location = styled('h5')({
    position: 'absolute',
    right: '20px',
    top: '580px',
    fontSize: '16px',
    margin: '0',
    padding: '0',
    color: 'white',
  });
  
  const DaysOpen = styled('h5')({
    position: 'absolute',
    left: '20px',
    top: '610px',
    fontSize: '16px',
    margin: '0',
    padding: '0',
    color: 'white',
  });
  
  const Description = styled('div')({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '690px',
    width: '80%',
    fontSize: '16px',
    lineHeight: '1.5',
    textAlign: 'center',
    color: 'white',
  });
  

  const PricesImage = styled('img')({
    position: 'absolute',
    left: '15px',
    top: '630px',
    width: '50px',
  });

  const ButtonImage = styled('div') ({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '800px',
    width: '250px',
});
  
  

/*  const priceImages = {
    '1': '/assets/images/PriceCheap.png',
    '2': '/assets/images/PriceStandard.png',
    '3': '/assets/images/PriceHigh.png',
    '4': '/assets/images/PriceExtreme.png'
  };*/

  const BusinessPage = () => {
    const [barresProfiles, setBarresProfile] = useState([]);
  
    const fetchBarresProfile = () => {
      axios.get('http://localhost:5000/api/barres')
      .then(response => {
        setBarresProfile(response.data);
      });
    };
  
    useEffect(() => {
      fetchBarresProfile();
    }, []); // this [] is for if any changesa rise, it will update
  
    return barresProfiles.map((barresProfile, index) => {
      return (
        <div key= {index}>
        <Helmet>
          <title>Hay Noche</title>
        </Helmet>
        <Rectangle1>
          <Heading1 />
          <Square1 />
       <Name className='nombre'>{barresProfile.barResName}</Name>
        <Location className='subheading'>{barresProfile.barResLocation}</Location>
        <PricesImage src={'/assets/images/PriceCheap.png'} alt={'Price'} />
        <DaysOpen className='subheading'>{barresProfile.barResDayOpens} - {barresProfile.barResDayCloses}</DaysOpen>
        <Description className='cuerpo'>This is a description of this business</Description>
        <ButtonImage>
          <MapButton />
        </ButtonImage>
      </Rectangle1>
      </div>
      );
    });
  };

/*
function BusinessPage(props, idx) {

  const { business } = props;
  //const priceImage = priceImages[business.price];
    return (
      <div key= {idx}>
        <Helmet>
          <title>Hay Noche</title>
        </Helmet>
        <Rectangle1>
          <Heading1 />
          <Square1 />
       <Name className='nombre'>{props.barResName}</Name>
        <Location className='subheading'>Barrio</Location>
        <PricesImage src={'/assets/images/PriceCheap.png'} alt={'Price'} />
        <DaysOpen className='subheading'>Lunes a Viernes 19 - 03</DaysOpen>
        <Description className='cuerpo'>This is a description of this business</Description>
        <ButtonImage>
          <MapButton />
        </ButtonImage>
      </Rectangle1>
      </div>
    );
  }
  */
  export default BusinessPage;