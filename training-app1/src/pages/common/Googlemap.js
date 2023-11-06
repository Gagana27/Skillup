import React from 'react';
import GoogleMapReact from 'google-map-react';


const ContactMap = () => {
  const defaultProps = {
    center: {
      lat: 37.7749, // Replace with your desired latitude
      lng: -122.4194, // Replace with your desired longitude
    },
    zoom: 14, // Adjust the zoom level as needed
  };

  return (
    
    <div >
        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124461.06842450322!2d77.48426584190662!3d12.881440922570695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae3ffcc3cb3149%3A0xe208e403035e51f6!2sNo.%207%2C%201st%20Cross%2C%20Chunchanakatte%2C%20New%20Bank%20Colony%2C%20PNB%20Layout%2C%20Konanakunte%2C%20Bengaluru%2C%20Karnataka%20560062!3m2!1d12.8814538!2d77.5666677!5e0!3m2!1sen!2sin!4v1699268366670!5m2!1sen!2sin"
             width="100%" height="450" 
            //  style="border:0;" 
             allowfullscreen="" 
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">

            </iframe>
      </div>
    </div>
  );
};

export default ContactMap;
