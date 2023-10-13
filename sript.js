
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const generateBtn = document.querySelector("#generate");
const result = document.querySelector("#result");

function generateNum(){
    let minVal = Number(min.value);
    let maxVal = Number(max.value);

    if( minVal > maxVal ){
        // swap
        minVal = maxVal^minVal;
        maxVal = maxVal^minVal;
        minVal = maxVal^minVal;

        min.value = minVal;
        max.value = maxVal;
    }

    const randomNum = minVal + Math.floor(Math.random() * (maxVal - minVal+1));

    result.innerText = randomNum;
}

generateNum();

generateBtn.addEventListener("click", generateNum);