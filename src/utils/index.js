import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval)
	});
}

// Action
export function clickOutside(node) {
	const handleClick = (event) => {
		// Check if node (class box) is inner event.target (class relative)
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('outclick'))
		}
	}

	document.addEventListener('click', handleClick, true)

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		}
	};
}

// Action
export function longpress(node, duration) {
	let timer;
	
	const handleMousedown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(
				new CustomEvent('longpress')
			);
		}, duration);
	};
	
	const handleMouseup = () => {
		clearTimeout(timer)
	};

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);

	return {
		update(newDuration) {
			duration = newDuration;
		},

		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
}