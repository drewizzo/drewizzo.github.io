function makeBigger() {
    const textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
  }
  
  function changeStyle() {
    alert("Style changed!");
    const textArea = document.getElementById("textInput");
    const fancy = document.getElementById("fancy");
    if (fancy.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function makeMoo() {
    const textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    sentences = sentences.map(sentence => {
      let words = sentence.trim().split(" ");
      if (words.length > 0 && words[0] !== "") {
        words[words.length - 1] += "-Moo";
      }
      return words.join(" ");
    });
  
    textArea.value = sentences.join(". ");
  }
  