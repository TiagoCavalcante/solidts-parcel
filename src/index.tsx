import { render } from "solid-js/web";
import { createSignal, JSX } from "solid-js";

function Button(props: JSX.IntrinsicElements['button']) {
	return <button class="btn-primary" {...props} />;
}

function App() {
	const [count, setCount] = createSignal(0);
	const increment = () => setCount((c) => c + 1);

	return <Button type="button" onClick={increment}>{count}</Button>;
}

render(App, document.getElementById("app")!);
