// What will be the output of the below code if the button is clicked:
export default function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Component rendered successfully");
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <p>You clicked {count} times</p>
            </div>
        </div>
    )
}