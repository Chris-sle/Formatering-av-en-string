//M
const app = document.getElementById('app')
let startscreen = true
let string1 = 'Dette er string 1'
let string2 = 'Og dette er string 2'

//V
updateView()
function updateView() {
    if(startscreen === true) {
        app.innerHTML = /*HTML*/`
            <div class="startscreen">
                <h1 class='WelcomeText'>Modifisering av en string</h1>
                <button class="startBtm" onclick="startApp()">Start App<a id="blinkingEffect">_</a></button>
            </div>
        `;
    } 
    else {
        app.innerHTML = /*HTML*/`
            <button class='BackButton' onclick='backToMain()'>Back to start</button>
            <div class="Container">
                <h2> Dette er stringene: </h2>
                <div class="stringContainer">
                    <div class="string">let string1 = ${string1}</div>
                    <div class="string">let string2 = ${string2}</div>
                </div>
                <h2> Explanation: </h2>
                <div id="explanation" class="textBox"> her kommer forklaring<a id="blinkingEffect">_</a></div>
                <h2> Results: </h2> 
                <div id="results" class="textBox">her kommer resultatet<a id="blinkingEffect">_</a></div>
                <span class="buttonPanel">
                    <button class='commandBtm' onclick="changeStringConcat()">concat()</button>
                    <button class='commandBtm' onclick="changeStringSlice()">slice()</button>
                    <button class='commandBtm' onclick="changeStringSubstring()">substring()</button>
                    <button class='commandBtm' onclick="changeStringSubstr()">substr()</button>
                    <button class='commandBtm' onclick="changeStringIndexOf()">indexOf()</button>
                    <button class='commandBtm' onclick="changeStringReplace()">replace()</button>
                    <button class='commandBtm' onclick="changeStringToLowerCase()">toLowerCase()</button>
                    <button class='commandBtm' onclick="changeStringToUpperCase()">toUpperCase()</button>
                    <button class='commandBtm' onclick="changeStringCharAt()">charAt()</button>
                    <button class='commandBtm' onclick="changeStringTrim()">trim()</button>
                    <button class='commandBtm' onclick="changeStringSplit()">Split()</button>
                    <button class='commandBtm' onclick="changeStringCharCodeAt()">charCodeAt()</button>
                    <button class='commandBtm' onclick="changeStringFromCharCode()">fromCharCode()</button>
                </span>
            </div>
            
        `;
    }
}

//C
function updateResultAndExplanation(result, explanation) {
    let resultsField = document.getElementById('results');
    let explanationField = document.getElementById('explanation');
    resultsField.innerText = result;
    explanationField.innerText = explanation;
}

function changeStringConcat() {
    let result = string1.concat(' ', string2);
    let explanation = "concat()-metoden slår sammen, eller legger til, en eller flere strenger til den opprinnelige strengen og returnerer en ny streng som inneholder alle de sammenføyde strengene.";
    updateResultAndExplanation(result, explanation);
}

function changeStringSlice() {
    let result = string1.slice(9);
    let explanation = "string1.slice(9) -  Her kutter vi stringer fra possisjon 9 og utover, noe som gir 'string 1' ifra stringen 'Dette er string 1'";
    updateResultAndExplanation(result, explanation);
}

function changeStringSubstring() {
    let result = string1.substring(6, 9);
    let explanation = "string1.substring(6, 9) - Returnerer delen av strengen mellom start- og sluttindeksene, eller til slutten av strengen.";
    updateResultAndExplanation(result, explanation);
}

function changeStringSubstr() {
    let result = string1.substr(6, 2);
    let explanation = "string1.substr(6, 2) - Returnerer tegn i en streng som starter på det angitte stedet og fortsetter et angitt antall tegn.";
    updateResultAndExplanation(result, explanation);
}

function changeStringIndexOf() {
    let result = string1.indexOf('er');
    let explanation = "indexOf('er') - Returnerer posisjonen til den første forekomsten av en spesifisert verdi i en streng.";
    updateResultAndExplanation(result, explanation);
}

function changeStringReplace() {
    let result = string1.replace('er', 'var');
    let explanation = "replace('er', 'var') - endrer 'er' i 'Dette er string 1' til 'var'";
    updateResultAndExplanation(result, explanation);
}

function changeStringToLowerCase() {
    let result = string1.toLowerCase();
    let explanation = "string1.toLowerCase() - Konverterer en streng til små bokstaver.";
    updateResultAndExplanation(result, explanation);
}

function changeStringToUpperCase() {
    let result = string1.toUpperCase();
    let explanation = "string1.toUpperCase() - Konverterer en streng til store bokstaver.";
    updateResultAndExplanation(result, explanation);
}
function changeStringCharAt() {
    let result = string1.charAt(7);
    let explanation = "charAt(7) - Returnerer tegnet på den angitte indeksen i en streng.";
    updateResultAndExplanation(result, explanation);
}
function changeStringTrim() {
    let result = string1.trim();
    let explanation = "Fjerner mellomrom fra begge ender av en streng.";
    updateResultAndExplanation(result, explanation);
}
function changeStringSplit() {
    let result = string1.split(' ');
    let explanation = "string1.split(' ') - Deler en streng inn i et array av delstrenger basert på en angitt separator.";
    updateResultAndExplanation(result, explanation);
}

function changeStringCharCodeAt() {
    let explanation = 'her bruker vi string1.charCodeAt() og legger på et mellomrom, charCodeAt tar vært tegn i string1 og gjør det om til nummer indeksen til det tegnet.';
    let result = '';

    for (let i = 0; i < string1.length; i++) {
        result += string1.charCodeAt(i) + ' ';
    }
    
    updateResultAndExplanation(result, explanation);
}

function changeStringFromCharCode() {
    const numberCode = document.getElementById('results').innerText.split(' ');
    let explanation = 'Med fromCharCode() så tar vi ut numerical Unicode verdien og gjør den tilbake til det symbolet verien står for.';
    let result = '';
    
    if (numberCode.every(num => /^\d+$/.test(num.trim()))) {
        for (let num of numberCode) {
            if (num.trim() !== '') {
                result += String.fromCharCode(parseInt(num));
            }
        }
        updateResultAndExplanation(result, explanation);
    } else {
        result = 'Error, kan bare bli brukt etter charCodeAt()'
        updateResultAndExplanation(result, explanation);
    }
}

function startApp() {
    startscreen = false;
    updateView()
}

function backToMain() {
    startscreen = true;
    updateView()
}


