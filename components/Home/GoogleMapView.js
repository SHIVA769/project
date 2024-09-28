import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext, useEffect } from 'react';

function OloMapView() {
  const { userLocation } = useContext(UserLocationContext);
  const containerStyle = {
    width: '100%',
    height: '500px',
  };

  useEffect(() => {
    const initOloMap = () => {
      const map = new window.OloMap.Map('mapContainer', {
        center: userLocation || { lat: 30.7209, lng: 76.7765 }, // fallback coordinates
        zoom: 12,
        mapId: '327f00d9bd231a33',
      });

      // Add user location marker
      new window.OloMap.Marker({
        position: userLocation,
        map,
        icon: {
          url: '/user-location.png',
          scaledSize: {
            width: 50,
            height: 50,
          },
        },
      });
    };

    if (window.OloMap) {
      initOloMap();
    } else {
      console.error('OloMap API is not loaded');
    }
  }, [userLocation]);

  return (
    <div style={containerStyle}>
      <div id="mapContainer" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}

export default OloMapView;
