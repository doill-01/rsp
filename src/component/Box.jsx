import React from 'react'

const Box = (props) => {
	let result;
	if(
		props.title === "computer" &&
		props.result !== "draw" &&
		props.result !== ""
	){
		result = props.result == "win" ? "lose" : "win"
	}else {
		result = props.result
	}
	
  return (
	<div className={`box ${result}`}>
	<div>{props.title}</div>
	<img className="item-img" src={props.item && props.item.img}/>
	<h2>{result}</h2>
	</div>
  )
}

export default Box
