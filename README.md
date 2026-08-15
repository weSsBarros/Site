# La Vie Café — Site + Cardápio Digital

## Estrutura de arquivos

```
lavie-cafe/
├── index.html          → Página inicial (institucional)
├── cardapio.html        → Página do cardápio digital
├── css/
│   ├── base.css          → Cores, fontes e reset (vale para as 2 páginas)
│   ├── home.css           → Estilo só da página inicial
│   └── cardapio.css       → Estilo só da página do cardápio
├── js/
│   └── cardapio.js        → Faz a aba de categoria acender sozinha ao rolar
└── assets/
    ├── hero-espresso.png
    ├── gal-coco.png
    ├── gal-bruschetta.png
    ├── gal-donut.png
    └── gal-espresso.png
```

## Como editar o que for mais comum

**Trocar preços ou itens do cardápio**
Abra `cardapio.html`, procure o item pelo nome (ex: `Espresso duplo`) e troque
o texto dentro de `<span class="name">` ou `<span class="price">`.

**Trocar as cores do site inteiro**
Abra `css/base.css` e mexa nas variáveis lá no topo (dentro de `:root`):
```css
--wine: #5B2C29;     → cor principal (vinho)
--green: #8FB37B;    → cor de destaque (verde)
--cream: #FBF7F0;    → cor de fundo
```
Mudando aqui, muda em todo o site automaticamente — nas duas páginas.

**Trocar o link do WhatsApp**
Nos dois arquivos HTML, procure por `aria-label="WhatsApp"` — troque o `href="#"`
pelo link do seu WhatsApp, por exemplo:
`href="https://wa.me/5598900000000"`

**Trocar fotos**
Substitua os arquivos dentro de `assets/` mantendo os mesmos nomes, ou troque
o `src="assets/....png"` no HTML pelo nome do novo arquivo.

**Adicionar um item novo no cardápio**
Copie um bloco inteiro que começa com `<div class="item-wrap">` e termina em
`</div>`, cole logo abaixo do último item da categoria, e troque nome/preço.

## Como visualizar

Basta abrir `index.html` no navegador — não precisa de servidor nem instalação.
Para publicar de verdade, suba a pasta inteira (mantendo a estrutura) em um
serviço como Netlify, Vercel, GitHub Pages ou a hospedagem que preferir.
