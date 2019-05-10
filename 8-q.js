document.querySelector('.button-8').addEventListener('click',calcQueen);

function setBanLocation(tableLocationArray, currentLocationRaw, currentLocationColumn, lengthArray) {
//setCurrnetLcation
    tableLocationArray[currentLocationRaw][currentLocationColumn] = "HER";
    // console.log(currentLocationColumn);
    // console.log(currentLocationRaw);

    for (let setBANrow = 0; setBANrow < lengthArray; setBANrow++) {
        if (tableLocationArray[currentLocationRaw][setBANrow] != "HER")
            tableLocationArray[currentLocationRaw][setBANrow] = "BAN";
    }
    for (let setBANcolumn = 0; setBANcolumn < lengthArray; setBANcolumn++) {
        if (tableLocationArray[setBANcolumn][currentLocationColumn] != "HER")
            tableLocationArray[setBANcolumn][currentLocationColumn] = "BAN";
    }

    for (let setBANindex = 1; setBANindex < lengthArray; setBANindex++) {
        let tmpRowPlus = currentLocationRaw + setBANindex;
        let tmpRowMinus = currentLocationRaw - setBANindex;
        let tmpColumnPlus = currentLocationColumn + setBANindex;
        let tmpColumnMinus = currentLocationColumn - setBANindex;
        if ((tmpRowPlus < lengthArray) && (tmpColumnPlus < lengthArray))
            tableLocationArray[tmpRowPlus][tmpColumnPlus] = "BAN";
        if ((tmpRowMinus >= 0) && (tmpColumnMinus >= 0))
            tableLocationArray[tmpRowMinus][tmpColumnMinus] = "BAN";
        if ((tmpRowMinus >= 0) && (tmpColumnPlus < lengthArray))
            tableLocationArray[tmpRowMinus][tmpColumnPlus] = "BAN";
        if ((tmpRowPlus < lengthArray) && (tmpColumnMinus >= 0))
            tableLocationArray[tmpRowPlus][tmpColumnMinus] = "BAN";
    }
}

function setPrimaryEMP(lengthArray, tableLocationArray) {
    for (let countNumRow = 0; countNumRow < lengthArray; countNumRow++) {
        tableLocationArray[countNumRow] = [];
        for (let countNumColumn = 0; countNumColumn < lengthArray; countNumColumn++) {
            tableLocationArray[countNumRow][countNumColumn] = "EMP";
        }
    }
}
function setEMP(lengthArray, tableLocationArray) {
    for (let countNumRow = 0; countNumRow < lengthArray; countNumRow++) {
        for (let countNumColumn = 0; countNumColumn < lengthArray; countNumColumn++) {
            tableLocationArray[countNumRow][countNumColumn] = "EMP";
        }
    }
    return tableLocationArray;
}

function calcQueen() {
    //define how large this board
    const rawRange = 8;
    // const columnRange = 8;
    //set Array
    let rawArray = new Array(rawRange);
    // let columnArray = new Array(columnRange);
    let tableLocationArray = [];

    //setPicenumber
    let pieceCount = 1;
    let setCounter=0;
    let setCounterForDebug=0;

    //setPrimaryvalue
    const lengthArray = rawArray.length;
    setPrimaryEMP(lengthArray, tableLocationArray);
    
    //setFirstLocation
    let currentLocationRaw = 0;
    let currentLocationColumn = 0;
    
    //繰り返して、１マスずつ試していく。
    //EMP:空。何もない。
    //BAN:禁止
    //HER:ここにいるよ。
    for (currentLocationRaw;currentLocationRaw<lengthArray;currentLocationRaw++){
        for (currentLocationColumn;currentLocationColumn<lengthArray;currentLocationColumn++) {
            //初期化
            tableLocationArray = setEMP(lengthArray, tableLocationArray);
            console.log("EMP?");
            console.log(tableLocationArray);
            console.log(currentLocationRaw);
            console.log(currentLocationColumn);

            let tableLocationArrayElementFirst = tableLocationArray[currentLocationRaw][currentLocationColumn];
            if ((tableLocationArrayElementFirst !== "HER") && (tableLocationArrayElementFirst !== "BAN"))
                setBanLocation(tableLocationArray, currentLocationRaw, currentLocationColumn, lengthArray);

            for (let pieceIndex = 1; pieceIndex <= pieceCount; pieceIndex++) {
                for (let localIndexRow = 0; localIndexRow < lengthArray; localIndexRow++) {
                    for (let localIndexColumn = 0; localIndexColumn < lengthArray; localIndexColumn++) {
                        let tableLocationArrayElement = tableLocationArray[localIndexRow][localIndexColumn];
                        if ((tableLocationArrayElement !== "HER") && (tableLocationArrayElement !== "BAN")) {
                            setBanLocation(tableLocationArray, localIndexRow, localIndexColumn, lengthArray);
                            console.log(tableLocationArray);
                            setCounterForDebug++;
                            console.log(setCounterForDebug);
                            if (pieceIndex == lengthArray) {
                                setCounter++;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(tableLocationArray);
    console.log(setCounter);
    console.log(setCounterForDebug);

}
