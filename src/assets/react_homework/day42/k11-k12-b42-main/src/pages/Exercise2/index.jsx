import useLocalStorage from "../../hook/useLocalStorage";

function Exercise2() {
    const [name, setName] = useLocalStorage("name", "F8 User");
    const [name2, setName2] = useLocalStorage("name2", "F8 User2");
    const [name3, setName3] = useLocalStorage("name3", "F8 User3");

    return (
        <>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Xin chào, {name}!</p>
            </div>

            <div>
                <input
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                />
                <p>Xin chào, {name2}!</p>
            </div>
            <div>
                <input
                    value={name3}
                    onChange={(e) => setName3(e.target.value)}
                />
                <p>Xin chào, {name3}!</p>
            </div>
        </>
    );
}

export default Exercise2;
