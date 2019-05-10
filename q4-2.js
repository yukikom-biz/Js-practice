document.querySelector('.button-4').addEventListener('click',calcQueen);

function setBanLocation(tableLocationArray, currentLocationRaw, currentLocationColumn, lengthArray) {
//setCurrnetLcation
    tableLocationArray[currentLocationRaw][currentLocationColumn] = "HER";

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
    // tableLocationArray.fill("EMP");
    // tableLocationArray.length=0;
    for (let countNumRow = 0; countNumRow < lengthArray; countNumRow++) {
        tableLocationArray[countNumRow] = [];
        tableLocationArray[countNumRow].fill("EMP");
        // for (let countNumColumn = 0; countNumColumn < lengthArray; countNumColumn++) {
        //     tableLocationArray[countNumRow][countNumColumn] = "EMP";
        // }
    }
    return tableLocationArray;
}

function calcQueen() {
    //define how large this board
    const rawRange = 4;
    //set Array
    let rawArray = new Array(rawRange);
    let tableLocationArrayPrimary = [];

    //setPicenumber
    let pieceCount = 2;
    let setCounter=0;
    let setCounterForDebug=0;

    //setPrimaryvalue
    const lengthArray = rawArray.length;
    setPrimaryEMP(lengthArray, tableLocationArrayPrimary);

    //setFirstLocation
    let currentLocationRaw = 0;
    let currentLocationColumn = 0;

    //繰り返して、１マスずつ試していく。
    //EMP:空。何もない。
    //BAN:禁止
    //HER:ここにいるよ。
    // for (currentLocationRaw;currentLocationRaw<lengthArray;currentLocationRaw++){
    currentLocationRaw = 0 ;
        for (currentLocationColumn;currentLocationColumn<lengthArray;currentLocationColumn++) {
            let tmpArray = tableLocationArrayPrimary.slice();

            // console.log("SET FIRST");
            let tableLocationArrayElementFirst = tmpArray[currentLocationRaw][currentLocationColumn];
            if ((tableLocationArrayElementFirst !== "HER") && (tableLocationArrayElementFirst !== "BAN"))
                setBanLocation(tmpArray, currentLocationRaw, currentLocationColumn, lengthArray);

            // console.log("SEARCH");
            for (let pieceIndex = 1; pieceIndex <= pieceCount; pieceIndex++) {
                let localIndexRow = pieceIndex;
                for (let localIndexColumn = 0; localIndexColumn < lengthArray; localIndexColumn++) {
                        let tableLocationArrayElement = tmpArray[localIndexRow][localIndexColumn];
                        if ((tableLocationArrayElement !== "HER") && (tableLocationArrayElement !== "BAN")) {
                            setBanLocation(tmpArray, localIndexRow, localIndexColumn, lengthArray);
                            console.log(tmpArray);
                            console.log(tableLocationArrayPrimary);
                            setCounterForDebug++;
                            console.log(setCounterForDebug);
                            if (pieceIndex == lengthArray) {
                                setCounter++;
                            }
                        }

                }
            }
        }
    // }
    console.log(setCounter);
}
