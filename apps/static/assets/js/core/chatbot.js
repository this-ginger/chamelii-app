var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chamelii', //name of the chatbot
  userName = 'Joe',
  talking = true; //when false the speach function doesn't work
//

//edit this function to change what the chatbot says
function chatbotResponse() {
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage == 'hello') {
    const hi = ['Hi I\'m Chamelii, and this is your safe space. How are you feeling?']
    botMessage = hi[Math.floor(Math.random() * (hi.length))];;
  }

  if (lastUserMessage === 'I am getting angry for no reason and feeling sad') {
    botMessage = 'Firstly, these emotions are quite normal, we all experience them from time to time. Have you noticed any other changes in your emotions or behaviours?'
  }

  if (lastUserMessage === 'I don\'t really like seeing people anymore, I\'m worried about angry outbursts') {
    botMessage === 'That\'s totally understandable and normal. I\'m here to listen in a safe, confidential environment and look for the right type of additional support for you. We can arrange some coaching to help you manage the angry outbursts and will arrange a mental health first aid practitioner to message you directly in your safe space.'
  }

  if (lastUserMessage === 'name' || "what is your name?") {
    botMessage = 'Hi I\'m Chamelii, and this is your safe space. How are you feeling?';
  }


  if (lastUserMessage === 'I\'m so worried about my job, can\'t sleep at night and I feel like I\'m doing everything alone.') {
    botMessage = 'Firstly it\'s very common to experience these feelings when under pressure, in fact stress can change the way we think, feel and behave, are you seeing any other changes?'
  }

  if (lastUserMessage === 'I\'m finding it hard to concentrate and want to sleep all day.') {
    botMessage === 'Well the first step is to consult with a medical professional to determine a diagnosis, it may well be that you\'re experiencing some short-term stress conditions.  We can arrange a confidential appointment for you in your safe space? Or, there are 6 free confidential therapy sessions in your safe space to access. We can also arrange a coach on stress or anxiety to teach you some coping tools when you feel a little overwhelmed.'
  }

  if (lastUserMessage === 'name' || "what is your name?") {
    botMessage = 'Hi I\'m Chamelii, and this is your safe space. How are you feeling?';
  }

  if (lastUserMessage === 'I\'m unhappy' || lastUserMessage == 'I\'m depressed' || lastUserMessage == 'I\'m distressed' || lastUserMessage == 'I\'m sad' || lastUserMessage == 'I\'m sad' || lastUserMessage == 'I\'m miserable' || lastUserMessage == 'I\'m troubled' || lastUserMessage == 'I\'m low' || lastUserMessage == 'I\'m down' || lastUserMessage == 'I\'m anxious') {
    const Unhappy = ['Try reading a book', 'Im sorry to hear this. Please speak to your assigned mental health support worker and remember your mental health is a priority above all. ', ' Im sorry to hear this, please speak to your team leader or mental health support worker for support. No one should feel distressed at work. ', ' Listen to upbeat music ', '  Spend time with animals ', '  Set new goals, create changes ', '  Do something you are always wanted to do  ', '  Write in a journal  ', ' Im sorry to hear this. Please report this to your team leader for possible mediation and further steps.  ', ' Remember that its normal to be nervous for this type of thing. Take deep breaths and try to come across as confident as you can. Having a practise run is always a good idea!  ']
    botMessage = Unhappy[Math.floor(Math.random() * (Unhappy.length))];;
  }

  if (lastUserMessage === 'I\'m irritated' || lastUserMessage == 'I\'m frustrated' || lastUserMessage == 'I\'m worried' || lastUserMessage == 'I\'m stressed' || lastUserMessage == 'I\'m worried about my workload' || lastUserMessage == 'I\'m depressed' || lastUserMessage == 'I\'ve been feeling down lately') {
    const Upset = ['Try daily meditation, it might help you de-stress a bit!', 'Take a step back from the situation, try to keep calm and break it down into smaller steps.', 'Take a short break, go for a walk or a glass of water, this might help you refocus!', 'Take a step back, a deep breath, and go through your current objectives and priorities.']
    botMessage = Upset[Math.floor(Math.random() * (Upset.length))];;
  }

  if (lastUserMessage === 'I\'m content' || lastUserMessage == 'I\'m blessed' || lastUserMessage == 'I\'m cheery' || lastUserMessage == 'I\'m chuffed' || lastUserMessage == 'I\'m feeling good today' || lastUserMessage == 'I\'m happy') {
    const Happy = ['Glad to hear it! ', 'It might be a nice idea to take a small walk on your break. Vitamin D from the sun can boost mood and provide other health benefits!', 'Great. I’m glad to hear this!', 'Great. I’m glad to hear this!', 'thats good, Treat yourself ']
    botMessage = Happy[Math.floor(Math.random() * (Happy.length))];;
  }

  if (lastUserMessage === 'I\'m fortunate' || lastUserMessage == 'I\'m proud' || lastUserMessage == 'I\'m feeling accomplished' || lastUserMessage == 'I\'m good') {
    const Good = ['Forming strong relationships with your colleagues can help your mood and performance at work ', 'Share your positivity   ', 'Well done! Celebrate your achievement!']
    botMessage = Good[Math.floor(Math.random() * (Good.length))];;
  }



}

//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push("<b>" + userName + ":</b> " + lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        document.getElementById("chatlog" + i).style.visibility = "visible";
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
    //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}