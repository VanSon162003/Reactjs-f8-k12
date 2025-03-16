import useToggle from "../../hook/useToggle";

function Exercise3() {
    const [isOpen, toggleOpen] = useToggle();

    return (
        <div>
            <button onClick={toggleOpen}>Toggle</button>
            <p>{isOpen ? "Đã bật!" : "Đã tắt!"}</p>
        </div>
    );
}

export default Exercise3;
