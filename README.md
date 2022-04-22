<table align="right">
  <tr>
    <td>
      <a href="readme-en.md">🇺🇸 English</a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="README.md">🇧🇷 Português</a>
    </td>
  </tr>
</table>
<br>

# NightRaid
Este foi um projeto que usei como ambiente de testes para explorar um pouco sobre o que estava estudando no momento: <strong>Nodejs, Expressjs, métodos e params HTTP.</strong>
<br><br>

## Sobre
Meu objetivo foi criar algo simples com tais tecnologias, portanto, pensei em criar uma página para a <a href="https://akamegakill.fandom.com/wiki/Night_Raid">NightRaid</a>, já com todos os principais membros listados, e com possibilidade de adicionar novos membros, atualizá-los, ou deletá-los.
Mesmo sendo um pouco incoerente num projeto back-end, nas rotas de tipo <code>GET</code> eu coloquei uma resposta visual por patrão, mas o <code>.Json</code> pode ser acessado caso seja passado o parâmetro <code>?returnJson=true</code> ou <code>"returnJson": true</code>, como mostrado no vídeo.<br>
Um membro pode ser acessado/manipulado tanto pelo seu <code>índex do array</code> quanto pelo seu <code>name</code>.<br>
Em geral, tem mais informações no vídeo e comentadas no código sobre os padrões de requisição, explicações sobre as rotas...
<br><br>

## Resultado
<p align="center">
  <video src="https://user-images.githubusercontent.com/86276393/164738153-1c1c7df2-d5a3-46e7-9417-27c00df6e321.mp4">
</p>
<br>
  
## Como usar
<p>Para clonar e executar este projeto, você precisará do <a href="https://git-scm.com/">Git</a>, <a href="https://nodejs.org/">Node.js v16.13.2</a> ou superior instalado em seu computador.<br>No terminal:</p>

```bash
# Clone esse repositório:
$ git clone https://github.com/Luk4x/DevClub-first-project-node.git

# Entre no repositório:
$ cd DevClub-first-project-node

# Instalar dependências 
$ npm i

# Executar o projeto
$ npm run app

# O servidor irá iniciar em: http://localhost:3000/NightRaid
```
<br>

## Contato dos Contribuintes
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lucasmacielf/">
        <img src="https://avatars.githubusercontent.com/Luk4x" width="150px;" alt="Luk4x Github Photo"/><br>
        <sub>
          <b>Lucas Maciel</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
