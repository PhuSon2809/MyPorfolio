import React from 'react';
import "./footer.scss"

function Footer(props) {
    return (
        <div className='footer'>
            <img
            src="https://firebasestorage.googleapis.com/v0/b/porfolio-d552f.appspot.com/o/Avatar%2FCV.JPG?alt=media&token=b919640f-3c43-4f62-acd1-3d4e799ead02"
            alt="avatar"
          />
          <h4>Trần Phú Sơn</h4>
          <p>Created by @tranphuson</p>
        </div>
    );
}

export default Footer;