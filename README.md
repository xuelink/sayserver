# sayserver

Turn your MacOS to TTS server with `say` command.
Runs only with Mac OS X.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]

## Getting Started
Install the module with: `npm install sayserver`

```javascript
var sayserver = require('sayserver');
sayserver.start();
```

## cURL Example

to make text to TTS *.aiff file.
``` bash
curl -dtext='Hello World!' -dvoice=Samantha http://localhost:4000/speak
> http://localhost:4000/media/[randomstring].aiff
```

and to get *.aiff file.

``` bash
curl http://localhost:4000/media/[randomstring].aiff
```
or paste to the browser.

## Axios Example

Here's an example of how to use the `/speak` endpoint with the "Albert" voice:

``` javascript
const axios = require('axios');

axios.post('http://localhost:3000/speak', {
  voice: 'Albert',
  text: 'Hello, world!'
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
```

## Server Endpoints

### `/speak`

`/speak` is an endpoint that accepts an HTTP `POST` request with two parameters:

* voice - The Mac OS X voice to speak the text. (optional, default: 'Samantha')
* text - The text to speak. (required)

### `/media`

`/media` is an endpoint that accepts an HTTP `GET` request to return a specific media of \*.aiff file. The directory sayserver uses to look for [randomstring]*\.aiff file.

# Voice List

The "Voice List" is a list of available voices that can be used with the `/speak` endpoint of the `sayserver` Node.js package. Each voice in the list is associated with a language and country code.

To use the voice list, you can specify the desired voice by providing its name as the `voice` parameter in the HTTP POST request to the `/speak` endpoint. For example, if you want to use the "Anna" `voice`, you would set the voice parameter to "Anna".

```
Albert              en_US    # I have a frog in my throat. No, I mean a real frog!
Alice               it_IT    # Salve, mi chiamo Alice e sono una voce italiana.
Alva                sv_SE    # Hej, jag heter Alva. Jag är en svensk röst.
Amélie              fr_CA    # Bonjour, je m'appelle Amélie. Ma voix est en français canadien.
Amira               ms_MY    # Helo, nama saya Amira. Saya bercakap Bahasa Melayu.
Anna                de_DE    # Hallo, ich heiße Anna und ich bin eine deutsche Stimme.
Bad News            en_US    # I sure like being inside this fancy computer
Bahh                en_US    # Do not pull the wool over my eyes.
Bells               en_US    # Time flies when you are having fun.
Boing               en_US    # Spring has sprung, fall has fell, winter's here and it's colder than usual.
Bubbles             en_US    # I sure like being inside this fancy computer
Carmit              he_IL    # שלום. קוראים לי כרמית, ואני קול בשפה העברית.
Cellos              en_US    # Doo da doo da dum dee dee doodly doo dum dum dum doo da doo da doo da doo da doo da doo da doo
Damayanti           id_ID    # Halo, nama saya Damayanti. Saya berbahasa Indonesia.
Daniel              en_GB    # Hello, my name is Daniel. I am a British-English voice.
Daria               bg_BG    # Здравей, казвам се Дария и съм български глас.
Wobble              en_US    # I sure like being inside this fancy computer
Eddy (German (Germany)) de_DE    # Hallo! Ich heiße Eddy.
Eddy (English (UK)) en_GB    # Hello! My name is Eddy.
Eddy (English (US)) en_US    # Hello! My name is Eddy.
Eddy (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Eddy.
Eddy (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Eddy.
Eddy (Finnish (Finland)) fi_FI    # Hei! Nimeni on Eddy.
Eddy (French (Canada)) fr_CA    # Bonjour! Je m’appelle Eddy.
Eddy (French (France)) fr_FR    # Bonjour, je m’appelle Eddy.
Eddy (Italian (Italy)) it_IT    # Ciao! Mi chiamo Eddy.
Eddy (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Eddy.
Ellen               nl_BE    # Hallo, mijn naam is Ellen. Ik ben een Belgisch-Nederlandse stem.
Flo (German (Germany)) de_DE    # Hallo! Ich heiße Flo.
Flo (English (UK))  en_GB    # Hello! My name is Flo.
Flo (English (US))  en_US    # Hello! My name is Flo.
Flo (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Flo.
Flo (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Flo.
Flo (Finnish (Finland)) fi_FI    # Hei! Nimeni on Flo.
Flo (French (Canada)) fr_CA    # Bonjour! Je m’appelle Flo.
Flo (French (France)) fr_FR    # Bonjour, je m’appelle Flo.
Flo (Italian (Italy)) it_IT    # Ciao! Mi chiamo Flo.
Flo (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Flo.
Fred                en_US    # I sure like being inside this fancy computer
Good News           en_US    # Congratulations you just won the sweepstakes and you don't have to pay income tax again.
Grandma (German (Germany)) de_DE    # Hallo! Ich heiße Grandma.
Grandma (English (UK)) en_GB    # Hello! My name is Grandma.
Grandma (English (US)) en_US    # Hello! My name is Grandma.
Grandma (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Grandma.
Grandma (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Grandma.
Grandma (Finnish (Finland)) fi_FI    # Hei! Nimeni on Grandma.
Grandma (French (Canada)) fr_CA    # Bonjour! Je m’appelle Grandma.
Grandma (French (France)) fr_FR    # Bonjour, je m’appelle Grandma.
Grandma (Italian (Italy)) it_IT    # Ciao! Mi chiamo Grandma.
Grandma (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Grandma.
Grandpa (German (Germany)) de_DE    # Hallo! Ich heiße Grandpa.
Grandpa (English (UK)) en_GB    # Hello! My name is Grandpa.
Grandpa (English (US)) en_US    # Hello! My name is Grandpa.
Grandpa (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Grandpa.
Grandpa (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Grandpa.
Grandpa (Finnish (Finland)) fi_FI    # Hei! Nimeni on Grandpa.
Grandpa (French (Canada)) fr_CA    # Bonjour! Je m’appelle Grandpa.
Grandpa (French (France)) fr_FR    # Bonjour, je m’appelle Grandpa.
Grandpa (Italian (Italy)) it_IT    # Ciao! Mi chiamo Grandpa.
Grandpa (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Grandpa.
Jester              en_US    # Please stop tickling me!
Ioana               ro_RO    # Bună, mă cheamă Ioana. Sunt o voce românească.
Jacques             fr_FR    # Bonjour, je m’appelle Jacques.
Joana               pt_PT    # Olá, chamo-me Joana e dou voz ao português falado em Portugal.
Junior              en_US    # My favorite food is pizza.
Kanya               th_TH    # สวัสดีค่ะ ดิฉันชื่อกันยา
Karen               en_AU    # Hello, my name is Karen. I am an Australian-English voice.
Kathy               en_US    # Isn't it nice to have a computer that will talk to you?
Kyoko               ja_JP    # こんにちは、私の名前はきょうこです。日本語の音声をお届けします。
Lana                hr_HR    # Bog! Moje je ime Lana. Ja sam hrvatski glas.
Laura               sk_SK    # Ahoj. Volám sa Laura. Som hlas v slovenskom jazyku.
Lekha               hi_IN    # नमस्कार, मेरा नाम लेखा है! मैं हिन्दी में बोलने वाली आवाज़ हूँ!
Lesya               uk_UA    # Привіт, мене звуть Леся. Я — український голос.
Linh                vi_VN    # Xin chào, tên tôi là Linh. Tôi là giọng nói Tiếng Việt.
Luciana             pt_BR    # Olá, o meu nome é Luciana e a minha voz corresponde ao português que é falado no Brasil
Majed               ar_001   # مرحبًا، اسمي ماجد. أنا صوتٌ عربي.
Tünde               hu_HU    # Üdvözlöm! Tünde vagyok. Én vagyok a magyar hang.
Meijia              zh_TW    # 你好，我叫美佳。我說國語。
Melina              el_GR    # ονομάζομαι Μελίνα. Μιλάω ελληνικά.
Milena              ru_RU    # Здравствуйте, меня зовут Милена. Я — русский голос системы.
Moira               en_IE    # Hello, my name is Moira. I am an Irish-English voice.
Mónica              es_ES    # Hola, me llamo Mónica y soy una voz española.
Montse              ca_ES    # Hola, em dic Montse i soc una veu catalana.
Nora                nb_NO    # Hei, jeg heter Nora. Jeg er en norsk stemme.
Organ               en_US    # We must rejoice in this morbid voice.
Paulina             es_MX    # Hola, me llamo Paulina y soy una voz mexicana.
Superstar           en_US    # When I grow up I'm going to be a scientist.
Ralph               en_US    # The sum of the squares of the legs of a right triangle is equal to the square of the hypotenuse.
Reed (German (Germany)) de_DE    # Hallo! Ich heiße Reed.
Reed (English (UK)) en_GB    # Hello! My name is Reed.
Reed (English (US)) en_US    # Hello! My name is Reed.
Reed (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Reed.
Reed (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Reed.
Reed (Finnish (Finland)) fi_FI    # Hei! Nimeni on Reed.
Reed (French (Canada)) fr_CA    # Bonjour! Je m’appelle Reed.
Reed (Italian (Italy)) it_IT    # Ciao! Mi chiamo Reed.
Reed (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Reed.
Rishi               en_IN    # Hello, my name is Rishi. I am an Indian-English voice.
Rocko (German (Germany)) de_DE    # Hallo! Ich heiße Rocko.
Rocko (English (UK)) en_GB    # Hello! My name is Rocko.
Rocko (English (US)) en_US    # Hello! My name is Rocko.
Rocko (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Rocko.
Rocko (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Rocko.
Rocko (Finnish (Finland)) fi_FI    # Hei! Nimeni on Rocko.
Rocko (French (Canada)) fr_CA    # Bonjour! Je m’appelle Rocko.
Rocko (French (France)) fr_FR    # Bonjour, je m’appelle Rocko.
Rocko (Italian (Italy)) it_IT    # Ciao! Mi chiamo Rocko.
Rocko (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Rocko.
Samantha            en_US    # Hello, my name is Samantha. I am an American-English voice.
Sandy (German (Germany)) de_DE    # Hallo! Ich heiße Sandy.
Sandy (English (UK)) en_GB    # Hello! My name is Sandy.
Sandy (English (US)) en_US    # Hello! My name is Sandy.
Sandy (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Sandy.
Sandy (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Sandy.
Sandy (Finnish (Finland)) fi_FI    # Hei! Nimeni on Sandy.
Sandy (French (Canada)) fr_CA    # Bonjour! Je m’appelle Sandy.
Sandy (French (France)) fr_FR    # Bonjour, je m’appelle Sandy.
Sandy (Italian (Italy)) it_IT    # Ciao! Mi chiamo Sandy.
Sandy (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Sandy.
Sara                da_DK    # Hej, jeg hedder Sara. Jeg er en dansk stemme.
Satu                fi_FI    # Hei, minun nimeni on Satu. Olen suomalainen ääni.
Shelley (German (Germany)) de_DE    # Hallo! Ich heiße Shelley.
Shelley (English (UK)) en_GB    # Hello! My name is Shelley.
Shelley (English (US)) en_US    # Hello! My name is Shelley.
Shelley (Spanish (Spain)) es_ES    # ¡Hola! Me llamo Shelley.
Shelley (Spanish (Mexico)) es_MX    # ¡Hola! Me llamo Shelley.
Shelley (Finnish (Finland)) fi_FI    # Hei! Nimeni on Shelley.
Shelley (French (Canada)) fr_CA    # Bonjour! Je m’appelle Shelley.
Shelley (French (France)) fr_FR    # Bonjour, je m’appelle Shelley.
Shelley (Italian (Italy)) it_IT    # Ciao! Mi chiamo Shelley.
Shelley (Portuguese (Brazil)) pt_BR    # Olá, meu nome é Shelley.
Sinji               zh_HK    # 你好，我叫善怡。我講廣東waa2。
Tessa               en_ZA    # Hello, my name is Tessa. I am a South African-English voice.
Thomas              fr_FR    # Bonjour, je m'appelle Thomas. Je suis une voix française.
Tingting            zh_CN    # 你好，我叫 婷婷。我是中文普通话语音。
Trinoids            en_US    # We cannot communicate with these carbon units.
Whisper             en_US    # Pssssst, hey you, Yeah you, Who do ya think I'm talking to, the mouse?
Xander              nl_NL    # Hallo, mijn naam is Xander. Ik ben een Nederlandse stem.
Yelda               tr_TR    # Merhaba, benim adım Yelda. Ben Türkçe bir sesim.
Yuna                ko_KR    # 안녕하세요. 제 이름은 유나입니다. 저는 한국어 음성입니다.
Zarvox              en_US    # That looks like a peaceful planet.
Zosia               pl_PL    # Witaj. Mam na imię Zosia, jestem głosem kobiecym dla języka polskiego.
Zuzana              cs_CZ    # Dobrý den, jmenuji se Zuzana. Jsem český hlas.
```

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/sayserver
[downloads-image]: https://img.shields.io/npm/dm/sayserver.svg
[downloads-url]: https://npmjs.org/package/sayserver
