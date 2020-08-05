const audioElement = document.getElementById('audio');
const button = document.getElementById('button');

function toggleButton() {
  button.disabled = !button.disabled;
}

button.addEventListener('click', () => {
  getJokes();
  //test();
});

audioElement.addEventListener('ended', () => {
  console.log('test');
  toggleButton();
});

// VoiceRSS Javascript SDK
function test(str) {
  console.log('ma kora ya gever');
  VoiceRSS.speech({
    key: '342db4f265a84004a099d8b060a9bdb6',
    src: str,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

async function getJokes() {
  const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const joke =
      data.type === 'twopart'
        ? `${data.setup} ... ... ${data.delivery}`
        : data.joke;
    console.log(data.type);
    toggleButton();
    test(joke);
  } catch (error) {
    console.log(error);
  }
}
