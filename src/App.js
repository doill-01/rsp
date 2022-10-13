import Box from "./component/Box";
import "./App.css";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfwCYFRl_6ibJyaFBkESLGH8YYfuRM50eJA&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper: {
    name: "paper",
    img: "https://blog.kakaocdn.net/dn/cD4Lwz/btqXOaxai6P/eiDV58H4USpQLNOE1NT7L1/img.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer draw
    // user == 바위, compuer== "가위" 유저 이김
    // user == 바위 compuer == 보 유저 짐
    // user == 가위 compuer == 보 유저 이김
    // user == 가위 compuer == 바위 유저짐
    // user == 보 compuer == 주먹 유저 이김
    // user == 보 compuer == 가위 유저 짐
    if (user.name === computer.name) {
      return "draw";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "paper" ? "win" : "lose";
    else if (user.name === "paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 배열로 만들어 주는 함수
    console.log("item Array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); //뒤 소수점 제거
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
<div className="main-title"> 
	<h2>가위바위보를 선택해주세요</h2>
</div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>

      <div className="button">
        <button onClick={() => play("scissors")} className="button1">가위</button>
        <button onClick={() => play("rock")} className="button1">바위</button>
        <button onClick={() => play("paper")} className="button1">보</button>
      </div>
    </div>
  );
}

export default App;
