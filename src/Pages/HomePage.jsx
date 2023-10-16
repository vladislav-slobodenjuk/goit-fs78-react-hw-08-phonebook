import React from 'react';
import { Image } from '@nextui-org/react';

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Image
        // width={300}
        // height={200}
        alt="phonebook"
        src="https://media.istockphoto.com/id/485946989/photo/customer-file-concept.jpg?s=612x612&w=0&k=20&c=mv_oQlmhh5zkO_CE-2DxyhU2o1nkqLC_vFST176_-ns="
      />
      {/* <img
        src="https://media.istockphoto.com/id/485946989/photo/customer-file-concept.jpg?s=612x612&w=0&k=20&c=mv_oQlmhh5zkO_CE-2DxyhU2o1nkqLC_vFST176_-ns="
        alt="phonebook"
      /> */}
    </div>
  );
};

export default HomePage;
