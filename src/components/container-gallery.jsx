import React from 'react';
import "../styles/container-gallery.css";

function ContainerGallery({gallery}){
    return (
        <div className="container-gallery">
            {gallery}
        </div>

    );
}

export default ContainerGallery;
