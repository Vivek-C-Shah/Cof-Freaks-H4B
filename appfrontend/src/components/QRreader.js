import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Redirect = (url) => {
  window.location = `${url}`
}

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <div className='qrreader'>
      <QrReader 
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            Redirect(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '500px', height: '500px' }}
      />
      <p>{data}</p>
    </div>
  );
};

export default Test