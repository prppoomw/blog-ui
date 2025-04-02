import {IKImage} from "imagekitio-react";

const Image = ({src, className, alt, w, h}) => {
    return (
        <div>
            <IKImage
                urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                path={src}
                className={className}
                loading="lazy"
                lqip={{ active: true, quality: 20 }}
                alt={alt}
                width={w}
                height={h}
                transformation={[{width: w, height: h}]}
            />
        </div>
    );
};

export default Image;