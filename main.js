// Create the bar with SVG icon


var barElement = document.createElement("div");
barElement.style.position = "fixed";
barElement.style.width = "100%";
barElement.style.height = "50px"; // Adjust the height as needed
barElement.style.bottom = "0";
barElement.style.backgroundColor = "#333"; // Dark background color
barElement.style.zIndex = 999999;
barElement.style.display = "flex";
barElement.style.justifyContent = "center";
barElement.style.alignItems = "center";
barElement.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)"; // Add shadow

// Create the SVG icon element
var svgIcon = document.createElement("span");
svgIcon.innerHTML = '<div class="_8VoL_g"><button class="_1QoxDw Qkd66A tYI0Vw o4TrkA VvwWbQ Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw HySjhA cwOZMg zQlusQ uRvRjQ pgaA2w h0eHNA" type="button" aria-label="Music Volume"><span class="TcNIhA"><span aria-hidden="true" class="NA_Img dkWypw"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.102 8.778 8.35a2.5 2.5 0 0 1-1.643.616H4.5v6.065h2.632a2.5 2.5 0 0 1 1.644.617l3.724 3.25V5.102zM14 19.998c0 .858-1.01 1.318-1.658.753L7.79 16.778a1 1 0 0 0-.658-.247H4a1 1 0 0 1-1-1V8.466a1 1 0 0 1 1-1h3.135a1 1 0 0 0 .657-.246l4.55-3.971C12.99 2.684 14 3.143 14 4.002v15.996zM15.25 7a.75.75 0 0 1 .75-.75 5.75 5.75 0 0 1 0 11.5.75.75 0 0 1 0-1.5 4.25 4.25 0 0 0 0-8.5.75.75 0 0 1-.75-.75zM16 9.25a.75.75 0 0 0 0 1.5 1.25 1.25 0 1 1 0 2.5.75.75 0 0 0 0 1.5 2.75 2.75 0 1 0 0-5.5z" fill="currentColor"></path></svg></span></span></button></div>';

var hidesvgIcon = document.createElement("span");
hidesvgIcon.innerHTML = '<div class="wgiZXQ"><div class="_79Tjbg"><div class="_9UU9gw"><div class="DN53XA QP1Scg baQs1w"><div class="DdRAqQ"><div class="G8_cbg"><input class="c_OUdw" type="range" min="0" max="100" step="1" aria-label="Music Volume" value="0"><div class="RaoK4w"><div class="K9yA9w"><div class="_4gGdrA" style="width: calc(0% - 2px);"></div><div class="X8BWcQ"></div></div><div class="D20cnQ" style="width: 0%; margin-left: 0%;"><div class="NMhlLA"><div class="yTZwEw"></div></div></div></div></div></div><div class="Wrk03w c7zhBg Tvtb2g"><input class="s_JGcg fFOiLQ VGbjgA _5RSqIg" dir="auto" type="text" inputmode="decimal" placeholder="--" role="spinbutton" aria-label="Music Volume" aria-valuenow="0" aria-valuetext="0" aria-valuemin="0" aria-valuemax="100" value="0"></div></div></div></div><div class="_8VoL_g"><button class="_1QoxDw Qkd66A tYI0Vw o4TrkA VvwWbQ Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw HySjhA cwOZMg zQlusQ uRvRjQ pgaA2w h0eHNA" type="button" aria-label="Music Volume"><span class="TcNIhA"><span aria-hidden="true" class="NA_Img dkWypw"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.5 5.08-3.742 3.171a2.5 2.5 0 0 1-.243.182L15.5 12.4V5.08zm1.5 8.814V4.002a1 1 0 0 0-1.646-.763l-4.566 3.868a1 1 0 0 1-.398.206L6.53 3.468a.75.75 0 1 0-1.06 1.063l14 13.94a.75.75 0 1 0 1.06-1.063L17 13.894zM6.293 7.637l1.208 1.207H7.5v5.8h2.642a2.5 2.5 0 0 1 1.616.593l3.742 3.17v-1.564l1.5 1.5v1.143a1 1 0 0 1-1.646.763l-4.566-3.868a1 1 0 0 0-.646-.237H7a1 1 0 0 1-1-1v-6.8c0-.276.112-.526.293-.707z" fill="currentColor"></path></svg></span></span></button></div></div>';

var alert = document.createElement("span");
alert.innerHTML = '<div class="wgiZXQ"><div class="_79Tjbg"><div class="_9UU9gw"><div class="DN53XA QP1Scg baQs1w"><div class="DdRAqQ"><div class="G8_cbg"><input class="c_OUdw" type="range" min="0" max="100" step="1" aria-label="Music Volume" value="0"><div class="RaoK4w"><div class="K9yA9w"><div class="_4gGdrA" style="width: calc(0% - 2px);"></div><div class="X8BWcQ"></div></div><div class="D20cnQ" style="width: 0%; margin-left: 0%;"><div class="NMhlLA"><div class="yTZwEw"></div></div></div></div></div></div><div class="Wrk03w c7zhBg Tvtb2g"><input class="s_JGcg fFOiLQ VGbjgA _5RSqIg" dir="auto" type="text" inputmode="decimal" placeholder="--" role="spinbutton" aria-label="Music Volume" aria-valuenow="0" aria-valuetext="0" aria-valuemin="0" aria-valuemax="100" value="0"></div></div></div></div><div class="_8VoL_g"><button class="_1QoxDw Qkd66A tYI0Vw o4TrkA VvwWbQ Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw HySjhA cwOZMg zQlusQ uRvRjQ pgaA2w h0eHNA" type="button" aria-label="Music Volume"><span class="TcNIhA"><span aria-hidden="true" class="NA_Img dkWypw"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg> Stop </span></span></button></div></div>';

var credits = document.createElement("span");
credits.innerHTML = '<div class="_8VoL_g"><div class="_1QoxDw Qkd66A tYI0Vw o4TrkA VvwWbQ Eph8Hg cclg9A YPTJew HySjhA cwOZMg zQlusQ uRvRjQ pgaA2w styleElement newFontClass newClass" aria-label="Music Volume" type="text"><span class="TcNIhA"><span aria-hidden="true" class="NA_Img dkWypw">Credits</span></span></div></div>'

var space = document.createElement("span");
space.innerHTML = '<svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>'

var p1 = document.createElement("span");
p1.innerHTML = '<div class="l51cYg xdhwaQ IoL7nw L7ucXg jjqtrg mFRvUg RokMFw"><div class="JaCMAA"></div><div class="OwD6kQ"><div class="_9abLAQ rNuqRA"> Previous Page </div></div></div>'

var p2 = document.createElement("span");
p2.innerHTML = '<svg width="15" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"></svg><div class="l51cYg xdhwaQ IoL7nw L7ucXg jjqtrg mFRvUg RokMFw"><div class="JaCMAA"></div><div class="OwD6kQ"><div class="_9abLAQ rNuqRA"> Next Page </div></div></div>'

// Create a new <style> element
const styleElement = document.createElement('style');
document.head.appendChild(styleElement);

// Add your CSS rules to the new style element
styleElement.sheet.insertRule('.newFontClass {pointer-events: none; }');

// Add a click event to the SVG icon
svgIcon.addEventListener("click", function() {
    svgIcon.style.display = "none"
    hidesvgIcon.style.display = "block"
  var elements = document.getElementsByClassName("NA_Img dkWypw");
  if (elements.length >= 5) {
    elements[2].click(); // Click the 5th element with the class "NA_Img dkWypw"
  }
});

p1.addEventListener("click", function() {
    document.getElementsByClassName("_1QoxDw Qkd66A tYI0Vw o4TrkA VvwWbQ Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw HySjhA cwOZMg zQlusQ uRvRjQ pgaA2w h0eHNA")[0].click()
    
})

p2.addEventListener("click", function() {
    document.getElementsByClassName("_1QoxDw Qkd66A tYI0Vw o4TrkA VvwWbQ Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw HySjhA cwOZMg zQlusQ uRvRjQ pgaA2w h0eHNA")[1].click()
    
})

hidesvgIcon.addEventListener("click", function() {
    svgIcon.style.display = "block"
    hidesvgIcon.style.display = "none"
    document.getElementsByClassName("NA_Img dkWypw")[2].click()
});

// Append the SVG icon element to the bar
barElement.appendChild(svgIcon);
barElement.appendChild(hidesvgIcon);
barElement.appendChild(space);
barElement.appendChild(p1);
barElement.appendChild(p2);
hidesvgIcon.style.display = "none"

function emergencystop(){
    barElement.style.position = "";
}

// Append the bar to the body
document.body.appendChild(barElement);

function runSpeechRecognition() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };

    recognition.onspeechend = function() {
        console.log("Speech recognition ended.");
        recognition.stop(); // Stop recognition after each session
        runSpeechRecognition();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript.toLowerCase();
        console.log("You said:", transcript);

        if (transcript.includes('next page')) {
            testFunction();
        }
    };

    // start recognition
    recognition.start();
}

function testFunction() {
    console.log("Test function executed!");

// Simulate a click event on the button
    document.querySelector('button[aria-label="Next page"]').click()
}

runSpeechRecognition();
