const startBtn = document.getElementById("start");
const boxes = document.querySelectorAll(".box");
let levelInfo = document.getElementById("levelInfo");
let totalCoins = document.getElementById("totalCoins");
let currentCoins = document.getElementById("currentCoins");
let currentLevelWin = 0;
let gameInfo = document.getElementById("gameInfo");
let nextLevelBtn = document.getElementById("nextLevel");
let levelTracker = 0;


gameInfo.style.display = "none";
nextLevelBtn.disabled = true;


function startGame() {
  
  levelTracker += 1;
  boxes.forEach((el) => el.disabled = false); //removes disabled flag on reset
  currentCoins.innerText = "";
  levelInfo.innerText = levelTracker;
  pointsVal.length = 0;
  currentLevelWin = 0;
  let alertNotice = false;
  startBtn.disabled = true;
  nextLevelBtn.disabled = true;
  
  
  
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove(".boom");
    boxes[i].innerText = "";
    let boxArr = [];
    boxArr.push(boxes);
    boxArr.forEach(function(nodelist) {     //assigning id's to each box instead of having to manually type and organise each time
      for (const nodeList in boxes) {
        !document.getElementById("1") ? boxes[0].setAttribute("id", "1")
          : !document.getElementById("2") ? boxes[1].setAttribute("id", "2")
          : !document.getElementById("3") ? boxes[2].setAttribute("id", "3")
          : !document.getElementById("4") ? boxes[3].setAttribute("id", "4")
          : !document.getElementById("5") ? boxes[4].setAttribute("id", "5")
          : !document.getElementById("6") ? boxes[5].setAttribute("id", "6")
          : !document.getElementById("7") ? boxes[6].setAttribute("id", "7")
          : !document.getElementById("8") ? boxes[7].setAttribute("id", "8")
          : !document.getElementById("9") ? boxes[8].setAttribute("id", "9")
          : !document.getElementById("10") ? boxes[9].setAttribute("id", "10")
          : !document.getElementById("11") ? boxes[10].setAttribute("id", "11")
          : !document.getElementById("12") ? boxes[11].setAttribute("id", "12")
          : !document.getElementById("13") ? boxes[12].setAttribute("id", "13")
          : !document.getElementById("14") ? boxes[13].setAttribute("id", "14")
          : !document.getElementById("15") ? boxes[14].setAttribute("id", "15")
          : !document.getElementById("16") ? boxes[15].setAttribute("id", "16")
          : !document.getElementById("17") ? boxes[16].setAttribute("id", "17")
          : !document.getElementById("18") ? boxes[17].setAttribute("id", "18")
          : !document.getElementById("19") ? boxes[18].setAttribute("id", "19")
          : !document.getElementById("20") ? boxes[19].setAttribute("id", "20")
          : !document.getElementById("21") ? boxes[20].setAttribute("id", "21")
          : !document.getElementById("22") ? boxes[21].setAttribute("id", "22")
          : !document.getElementById("23") ? boxes[22].setAttribute("id", "23")
          : !document.getElementById("24") ? boxes[23].setAttribute("id", "24")
          : !document.getElementById("25") ? boxes[24].setAttribute("id", "25") : "";
      }     //sets individual "id"'s for every box so it doesnt have to be done manually
    })
  }
 
  //Sets each box up so a value can be added later on. boxes go from top left to bottom right in order...
  let box1 = document.getElementById("1");
  let box2 = document.getElementById("2");
  let box3 = document.getElementById("3");
  let box4 = document.getElementById("4");
  let box5 = document.getElementById("5");
  let box6 = document.getElementById("6");
  let box7 = document.getElementById("7");
  let box8 = document.getElementById("8");
  let box9 = document.getElementById("9");
  let box10 = document.getElementById("10");
  let box11 = document.getElementById("11");
  let box12 = document.getElementById("12");
  let box13 = document.getElementById("13");
  let box14 = document.getElementById("14");
  let box15 = document.getElementById("15");
  let box16 = document.getElementById("16");
  let box17 = document.getElementById("17");
  let box18 = document.getElementById("18");
  let box19 = document.getElementById("19");
  let box20 = document.getElementById("20");
  let box21 = document.getElementById("21");
  let box22 = document.getElementById("22");
  let box23 = document.getElementById("23");
  let box24 = document.getElementById("24");
  let box25 = document.getElementById("25");

  
  //Assigning the max available scores for each row and column below so the player can see where and how to avoid Voltorb booms
  //Rows
 const redRowInfo = document.getElementById("maxScore1");
 const greenRowInfo = document.getElementById("maxScore2");
 const yellowRowInfo = document.getElementById("maxScore3");
 const blueRowInfo = document.getElementById("maxScore4");
 const purpleRowInfo = document.getElementById("maxScore5");
 //Columns
 const redColumnInfo = document.getElementById("maxScore6");
 const greenColumnInfo = document.getElementById("maxScore7");
 const yellowColumnInfo = document.getElementById("maxScore8");
 const blueColumnInfo = document.getElementById("maxScore9");
 const purpleColumnInfo = document.getElementById("maxScore10");
 //Voltorb row number info
 const redRowVoltorb = document.getElementById("voltorb1");
 const greenRowVoltorb = document.getElementById("voltorb2");
 const yellowRowVoltorb = document.getElementById("voltorb3");
 const blueRowVoltorb = document.getElementById("voltorb4");
 const purpleRowVoltorb = document.getElementById("voltorb5");
 //Voltorb column number info
 const redColumnVoltorb = document.getElementById("voltorb6");
 const greenColumnVoltorb = document.getElementById("voltorb7");
 const yellowColumnVoltorb = document.getElementById("voltorb8");
 const blueColumnVoltorb = document.getElementById("voltorb9");
 const purpleColumnVoltorb = document.getElementById("voltorb10");
//Bomb options below, 0 represents bomb to allow to math algorithms to work
const options = [0, 1, 2, 3];
const bombShelter = []; //not currently in use
  
function getRandomResult() {
  return options[Math.floor(Math.random() * options.length)];
  //grabs a random number between 0 - 3
}
  
  //assigns each box a random value from 0 -3... 0 represents a bomb.
  box1.value = getRandomResult();
  box2.value = getRandomResult();
  box3.value = getRandomResult();
  box4.value = getRandomResult();
  box5.value = getRandomResult();
  box6.value = getRandomResult();
  box7.value = getRandomResult();
  box8.value = getRandomResult();
  box9.value = getRandomResult();
  box10.value = getRandomResult();
  box11.value = getRandomResult();
  box12.value = getRandomResult();
  box13.value = getRandomResult();
  box14.value = getRandomResult();
  box15.value = getRandomResult();
  box16.value = getRandomResult();
  box17.value = getRandomResult();
  box18.value = getRandomResult();
  box19.value = getRandomResult();
  box20.value = getRandomResult();
  box21.value = getRandomResult();
  box22.value = getRandomResult();
  box23.value = getRandomResult();
  box24.value = getRandomResult();
  box25.value = getRandomResult();
  
    

      //assigns the correct total value to each row and column so the player can see how many points are available.

  //Score row numbers generated below --------------------------
  for (let i = 0 ; i < boxes.length; i++) {

    let redRow = [Number(box1.value), Number(box2.value), Number(box3.value), Number(box4.value), Number(box5.value)];
        let redRowTotal = redRow.reduce((acc, el) => acc + el, 0);
        redRowInfo.innerText = redRowTotal;
    
    let greenRow = [Number(box6.value), Number(box7.value), Number(box8.value), Number(box9.value), Number(box10.value)];
        let greenRowTotal = greenRow.reduce((acc, el) => acc + el, 0);
        greenRowInfo.innerText = greenRowTotal;
    
    let yellowRow = [Number(box11.value), Number(box12.value), Number(box13.value), Number(box14.value), Number(box15.value)];
        let yellowRowTotal = yellowRow.reduce((acc, el) => acc + el, 0);
        yellowRowInfo.innerText = yellowRowTotal;
    
    let blueRow = [Number(box16.value), Number(box17.value), Number(box18.value), Number(box19.value), Number(box20.value)];
        let blueRowTotal = blueRow.reduce((acc, el) => acc + el, 0);
        blueRowInfo.innerText = blueRowTotal;
    
    let purpleRow = [Number(box21.value), Number(box22.value), Number(box23.value), Number(box24.value), Number(box25.value)];
        let purpleRowTotal = purpleRow.reduce((acc, el) => acc + el, 0);
        purpleRowInfo.innerText = purpleRowTotal;
    
    //Score column numbers generated below ----------------------------
    
    let redColumn = [Number(box1.value), Number(box6.value), Number(box11.value), Number(box16.value), Number(box21.value)];
        let redColumnTotal = redColumn.reduce((acc, el) => acc + el, 0);
        redColumnInfo.innerText = redColumnTotal;
    
    let greenColumn = [Number(box2.value), Number(box7.value), Number(box12.value), Number(box17.value), Number(box22.value)];
        let greenColumnTotal = greenColumn.reduce((acc, el) => acc + el, 0);
        greenColumnInfo.innerText = greenColumnTotal;
    
    let yellowColumn = [Number(box3.value), Number(box8.value), Number(box13.value), Number(box18.value), Number(box23.value)];
        let yellowColumnTotal = yellowColumn.reduce((acc, el) => acc + el, 0);
        yellowColumnInfo.innerText = yellowColumnTotal;
    
    let blueColumn = [Number(box4.value), Number(box9.value), Number(box14.value), Number(box19.value), Number(box24.value)];
        let blueColumnTotal = blueColumn.reduce((acc, el) => acc + el, 0);
        blueColumnInfo.innerText = blueColumnTotal;
    
    let purpleColumn = [Number(box5.value), Number(box10.value), Number(box15.value), Number(box20.value), Number(box25.value)];
        let purpleColumnTotal = purpleColumn.reduce((acc, el) => acc + el, 0);
        purpleColumnInfo.innerText = purpleColumnTotal;
    
    
    //Total number of points available to win generated below ----------------------------
    
    
    let currentLevelCoins = [...redRow, ...greenRow, ...yellowRow, ...blueRow, ...purpleRow];
    let currentLevelTotal = currentLevelCoins.reduce((acc, el) => acc + el, 0);
    currentLevelWin = currentLevelTotal;

    
    //Voltorb row number information generated below -------------------
    
   
    let row1Voltorb = [...redRow];
         let row1VoltorbTotal = row1Voltorb.filter(el => el === 0).length;
             //filter finds every instance of the number 0 which represents a bomb and returns that number using (acc, el) method
         redRowVoltorb.innerText = row1VoltorbTotal;
    
    let row2Voltorb = [...greenRow];
         let row2VoltorbTotal = row2Voltorb.filter(el => el === 0).length;
         greenRowVoltorb.innerText = row2VoltorbTotal;
    
    let row3Voltorb = [...yellowRow];
         let row3VoltorbTotal = row3Voltorb.filter(el => el === 0).length;
         yellowRowVoltorb.innerText = row3VoltorbTotal;
    
    let row4Voltorb = [...blueRow];
         let row4VoltorbTotal = row4Voltorb.filter(el => el === 0).length;
         blueRowVoltorb.innerText = row4VoltorbTotal;
    
    let row5Voltorb = [...purpleRow];
         let row5VoltorbTotal = row5Voltorb.filter(el => el === 0).length;
         purpleRowVoltorb.innerText = row5VoltorbTotal;

    //Voltorb column numbers generated below -------------------
    
    
    let column1Voltorb = [...redColumn];
         let column1VoltorbTotal = column1Voltorb.filter(el => el === 0).length;
         redColumnVoltorb.innerText = column1VoltorbTotal;
    
    let column2Voltorb = [...greenColumn];
         let column2VoltorbTotal = column2Voltorb.filter(el => el === 0).length;
         greenColumnVoltorb.innerText = column2VoltorbTotal;
    
    let column3Voltorb = [...yellowColumn];
         let column3VoltorbTotal = column3Voltorb.filter(el => el === 0).length;
         yellowColumnVoltorb.innerText = column3VoltorbTotal;
    
    let column4Voltorb = [...blueColumn];
         let column4VoltorbTotal = column4Voltorb.filter(el => el === 0).length;
         blueColumnVoltorb.innerText = column4VoltorbTotal;
    
    let column5Voltorb = [...purpleColumn];
         let column5VoltorbTotal = column5Voltorb.filter(el => el === 0).length;
         purpleColumnVoltorb.innerText = column5VoltorbTotal;     
      }
};

//adds up points earned in the level
let pointsVal = [1,1];

for (let i = 0; i < boxes.length; i++) {

//Win or Lose condition checks below  
boxes[i].addEventListener("click", () => {
 
  let previousPoint = pointsVal[pointsVal.length - 1];
  
    if (boxes[i].value == 0) {
        alert("Game over!")
        alertNotice = true;   //stops alert spam
        startBtn.disabled = false;
        levelTracker = Math.max(0, levelTracker -2);    //prevents player going negative in levels
        currentCoins.innerText = "";      //resets possible coins earned on loss
        totalCoins.innerText = Math.floor(Number(totalCoins.innerText) / 2);    //punishes players total coins by half on loss
          let elem = document.createElement("img");
              elem.classList.add("voltorb");
              boxes[i].appendChild(elem);
              elem.src="https://img.itch.zone/aW1nLzEyOTA5NTUxLnBuZw==/315x250%23c/yslQia.png";   //adds a nice picture of voltorb to show a boom
                 boxes.forEach((el) => el.disabled = true); //works to disable game after boom.
        return;
      
    } else if (boxes[i].value == 1) {
        pointsVal.push(1);  //adds 1 point
        boxes[i].innerText = boxes[i].value;
      
      } else if (boxes[i].value == 2) {
          pointsVal.push(2);    //adds 2 points
          boxes[i].innerText = boxes[i].value;
      
        } else if (boxes[i].value == 3) {
            pointsVal.push(3);    //adds 3 points
            boxes[i].innerText = boxes[i].value;
      }
    const currentLevelCoins = pointsVal.reduce((acc, el) => acc + el, 0);
    currentCoins.innerText = currentLevelCoins;
  
      if (currentLevelCoins == currentLevelWin) {
        alert("You Win!")
        alertNotice = true;
        totalCoins.innerText = Number(totalCoins.innerText) + currentLevelCoins;
        boxes.forEach((el) => el.disabled = true);
        nextLevelBtn.disabled = false;
        
        //This will put a voltorb in each remaining slot to show how many the player successfully dodges on a win.
          boxes.forEach(box => {
            if (box.value == 0) {
                box.clicked = true;  
                let elem = document.createElement("img");
                    elem.classList.add("voltorb");
                    box.appendChild(elem);
                    elem.src="https://img.itch.zone/aW1nLzEyOTA5NTUxLnBuZw==/315x250%23c/yslQia.png";
            }
        })
      }
   });
}

function information() {
  let x = document.getElementById("gameInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
    info.innerText = "Click again to hide."
    document.getElementById("sig").style.display = "none";
  } else {
    x.style.display = "none";
    info.innerText = "Click for game info!";
    document.getElementById("sig").style.display = "block";
  } 
}
