import PropTypes from "prop-types";

const UserCard = ({ name, age = 18, isVerified }) => {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
            }}
        >
            <h3>{name}</h3>
            <p>Tuổi: {age}</p>
            <p>Trạng thái: {isVerified ? "Đã xác minh" : "Chưa xác minh"}</p>
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isVerified: PropTypes.bool.isRequired,
};

export default UserCard;
