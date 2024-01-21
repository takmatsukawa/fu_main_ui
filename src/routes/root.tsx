import React from "react";
import { decrement, increment } from "../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Root: React.FC = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<>
			<p>Logged in</p>
			<div>
				<div>
					<button
						type="button"
						aria-label="Increment value"
						onClick={() => dispatch(increment())}
					>
						Increment
					</button>
					<span>{count}</span>
					<button
						type="button"
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
					>
						Decrement
					</button>
				</div>
			</div>
		</>
	);
};

export default Root;
