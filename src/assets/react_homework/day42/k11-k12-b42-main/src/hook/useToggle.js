import { useEffect, useState } from "react";

function useToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return [isOpen, toggleOpen];
}

export default useToggle;
