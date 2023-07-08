import React, { useEffect, useState } from "react";

import ImageStyles from "./Images.module.scss";
import Svg from "../svg";
import { attachments } from "trender-client/Managers/Interfaces/Global";

type sectionProps = {
    pictures: attachments[];
    post_id: string;
    user_id: string;
}

const ImageCarroussel = ({ pictures, post_id, user_id }: sectionProps) => {

    const [img, setImg] = useState({
        src: pictures[0],
        position: 0
    });

    useEffect(() => {
        setImg({ ...img, src: pictures[0] })
    }, [pictures])

    var moveRight = () => {
        if (img.position >= pictures.length - 1) {
            setImg({ src: pictures[0], position: 0 })
            return;
        }
        setImg({ src: pictures[img.position + 1], position: img.position + 1 })
    }

    var moveLeft = () => {
        if(img.position < 1) {
            setImg({ src: pictures[pictures.length - 1], position: pictures.length - 1 })
            return;
        }
        setImg({ src: pictures[img.position - 1], position: img.position - 1 })
    }

  return (
    <section className={ImageStyles.container}>
        <div className={ImageStyles.layout}>
            <div className={ImageStyles.image_layout}>
                { pictures.length > 1 &&  <div onClick={() => moveLeft()} className={ImageStyles.icon}><Svg name="chevron-left" size={25} /></div> }
                { pictures.length > 1 &&  <div onClick={() => moveRight()} className={`${ImageStyles.icon} ${ImageStyles.rotate}`}><Svg name="chevron-left" size={25} /></div> }
            </div>
            { pictures.length > 1 && <div className={ImageStyles.dots}>{pictures.map((e, index) => <span key={index} onClick={() => setImg({ src: pictures[index], position: index })} className={`${ImageStyles.dot} ${img.position === index && ImageStyles.active}`}></span>)}</div> }
        </div>
    </section>
  );
};

export default ImageCarroussel;
