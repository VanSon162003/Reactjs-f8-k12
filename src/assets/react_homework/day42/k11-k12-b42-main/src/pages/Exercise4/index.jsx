import useClipboard from "../../hook/useClipboard";

function Exercise4() {
    const [clipboard, readClipboard] = useClipboard();

    return (
        <div>
            <p>
                Hãy copy một chuỗi gì đó, hoặc copy: 666888. Sau đó click button
                dưới đây:
            </p>
            <button onClick={readClipboard}>Dán từ Clipboard</button>
            <p>Nội dung clipboard: {clipboard}</p>
        </div>
    );
}

export default Exercise4;
