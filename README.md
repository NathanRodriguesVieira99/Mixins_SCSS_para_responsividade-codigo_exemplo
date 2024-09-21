Mixins SCSS para Responsividade - Código Exemplo

Como usar
1. Crie as variáveis
Defina os breakpoints de responsividade:
```
// Breakpoints para responsividade
$breakpoints: (
  'small': 576px,
  'medium': 768px,
  'large': 992px,
  'xlarge': 1200px,
  'xxlarge': 1400px
);
```


2. Crie os mixins
Defina o mixin para responsividade, utilizando os breakpoints criados:

```
// Mixins para responsividade
@mixin respond-to($size) {
  $breakpoint: map-get($breakpoints, $size);

  @if $breakpoint {
    @media (min-width: $breakpoint) {
      @content;
    }
  } @else {
    @warn "No breakpoint defined for `#{$size}`.";
  }
}
```


3. Aplique os mixins
3.1. Importe as variáveis e mixins
Antes de aplicar os estilos, importe os arquivos onde as variáveis e os mixins foram definidos:
```
@use "../styles/variables/variables.scss" as variable;
@use "../styles/mixins/mixins.scss" as mixins;
```

3.2. Faça a estilização
Utilize os mixins para criar estilos responsivos, conforme o exemplo abaixo:
```
.container {
  padding: 1rem; // Estilo padrão para mobile first

  @include mixins.respond-to("small") {
    padding: 1.5rem;
  }

  @include mixins.respond-to("medium") {
    padding: 2rem;
  }

  @include mixins.respond-to("large") {
    padding: 2.5rem;
  }
}
```
