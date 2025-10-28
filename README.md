# Explicador de Código  
 
Ferramenta interativa para iniciantes em front-end, desenvolvida por Izabella da Costa.  
 
## 🚀 Visão Geral  
Digite o nome de uma tag HTML, propriedade CSS ou comando JavaScript, e obtenha uma explicação simples + exemplo prático. O objetivo é tornar o front-end mais acessível para quem está começando.  
 
## 🛠️ Tecnologias  
- HTML5  
- CSS3 (layout e estilo)  
- JavaScript puro (você digita → o script busca no `explicacoes.json` → mostra a explicação)

  
 
## ✅ Como Usar  
1. Abra o `index.html` no navegador.  
2. Digite o termo que deseja entender (por exemplo `img`, `background-color`, `forEach`).  
3. Clique no botão ou aperte Enter para ver a explicação aparecer.  
 
## 📌 Como Contribuir  
Se quiser ajudar a ampliar o banco de explicações:  
- Faça um fork do repositório.  
- No arquivo `explicacoes.json`, adicione uma nova chave com o termo, uma descrição e exemplo:  
  ```json
  "nomeDoTermo": {
    "descricao": "…",
    "exemplo": "<…>"
  }
