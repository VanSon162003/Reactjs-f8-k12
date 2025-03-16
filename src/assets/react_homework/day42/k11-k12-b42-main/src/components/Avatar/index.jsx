import PropTypes from "prop-types";

const Avatar = ({ src, alt = "Avatar", size = 50, isRounded = true }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            style={{
                borderRadius: isRounded ? "50%" : "0",
                objectFit: "cover",
            }}
        />
    );
};

Avatar.prototype = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.number,
    isRounded: PropTypes.bool,
};

export default Avatar;
