### Clone repositories
<li>
    <p>
        git clone https://github.com/cezardev07/quiz-js.git
    </p>
</li>
<li>
   <p>
        mine Quiz JavaScript
   </p>
</li>


<h1 align="center"> Projeto criado com foco em estuda modulo js</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h2>export quiz!⤵️</h2>

```js

export const quiz = [...]

```


<h2>import quiz!⤵️</h2>
 
```js

import { quiz } from "./quiz/quiz.js";

```

<h2>✅ preparando o ambiente para pegar os dados do quiz🔄️🆗</h2>

```js
export const createRespostas = (params) => {
    const opcoes_res = quiz[params].respostas
}

```

<h2>📌 avançar para a proxima pergunta do quiz</h2>

```js
const nextPerguntas = (buttons) => {
    count += 1
    if(count >= quiz.length){
        count = 0
    }
    setTimeout(() => {
        createRespostas(count)
        buttons.forEach(a => {
            a.remove()
        })
    }, 100);
}

createRespostas(count)

```

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Git e Github

🎧 create by cezardev07 ❤️
