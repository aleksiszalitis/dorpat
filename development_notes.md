For later use
```css
header::before {
	content: '';
	position: absolute;
	background: url(/BW.jpg) no-repeat fixed;
	background-size: cover;	
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	filter: blur(40px);
	z-index: -1;
	display: block;
	opacity: 1;
	transition: .4s ease-in-out;
}
```