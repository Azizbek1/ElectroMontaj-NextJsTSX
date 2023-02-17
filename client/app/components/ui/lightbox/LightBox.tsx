import React, { ReactElement, useState } from "react";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
interface Props {}
const images = [
  "https://i.imgur.com/fsyrScY.jpg",
  "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
];
export default function LightBox({}: Props): ReactElement {
  const [toggler, setToggler] = useState<boolean>(false);
  const [photoIndex, photoIndexToggler] = useState({ photoIndex: 0 });
  const [isOpen, setOpen] = useState({ isOpen: false });

  return (
    <div>
      <button type="button" onClick={() => setOpen({ isOpen: true })}>
        Open Lightbox
      </button>
      {isOpen.isOpen && (
        <Lightbox
          mainSrc={images[photoIndex.photoIndex]}
          nextSrc={images[(photoIndex.photoIndex + 1) % images.length]}
          prevSrc={
            images[(photoIndex.photoIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => setOpen({ isOpen: false })}
          onMovePrevRequest={() =>
            photoIndexToggler({
              photoIndex:
                (photoIndex.photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            photoIndexToggler({
              photoIndex: (photoIndex.photoIndex + 1) % images.length,
            })
          }
        />
      )}
    </div>
  );
}
