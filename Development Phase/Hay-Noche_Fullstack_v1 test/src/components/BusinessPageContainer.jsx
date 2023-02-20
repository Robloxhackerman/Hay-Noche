import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BusinessPage from './BusinessPage.jsx';

/*
const BarresProfile = () => {
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
      <BusinessPage barresProfiles={barresProfiles[index]} index />
    );
  });
}; */

/*
function BusinessPageContainer() {
  const { businessId } = useParams();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/barres/${barresId}`)
      .then(response => setBusiness(response.data) )
      .catch(error => console.log(error));
  }, [businessId]);
////////////////
  return business ? <BusinessPage business={business} /> : <p>Loading...</p>;
}
*/
/*
export default BusinessPageContainer;
*/
