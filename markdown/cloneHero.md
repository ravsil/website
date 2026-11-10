# PSP Hero (Clone Hero para PlayStation Portable)

> **Categoria:** Jogos / Projeto Pessoal  
> **Repositório:** [github.com/ravsil/PSP-Hero](https://github.com/ravsil/PSP-Hero)

**PSP Hero** é um motor completo de jogo de ritmo acelerado por hardware para o **Sony PlayStation Portable (PSP)** e emulador PPSSPP, inspirado em *Clone Hero* e *Guitar Hero*.

Construído do zero em **C++17** especificamente para o processador **MIPS R4000 (333 MHz)** do PSP, o jogo entrega renderização 3D da *highway* em perspectiva a 60 FPS constantes, streaming de áudio de baixa latência em múltiplos formatos, parser dinâmico de arquivos `.chart` e mapeamento customizável de botões.

> **Aviso:** Este projeto foi desenvolvido majoritariamente com o auxílio de IA.

---

## Stack Tecnológico

- **Linguagens:** C++17 (Engine do Jogo), Python (`tools/mid2chart.py` para conversão de MIDI para `.chart`)
- **SDK & Hardware PSP:** PSPSDK (`pspgu` / `pspgum` para gráficos 3D acelerados por hardware, `pspaudio` para canais de áudio de hardware, `psprtc` para sincronização áudio-visual em microssegundos)
- **Decodificação de Áudio Embarcada:**
  - **Opus** (`.opus`, 48 kHz) via `libopusfile` / `libopus`
  - **Ogg Vorbis** (`.ogg`, 44.1/48 kHz) via `stb_vorbis`
  - **MP3** (`.mp3`) via `minimp3_ex.h`
- **Gráficos & Imagens:** `stb_image.h` (capas de álbuns cacheadas) e fonte bitmap `font8x8.h`
- **Build & Toolchain:** Docker (`pspdev/pspdev:latest`), GNU Make (`Makefile` para PRX/EBOOT criptografado e `Makefile.native` para testes em desktop)

---

## Funcionalidades Principais

- **Highway 3D Acelerada por Hardware (`pspgu`):**
  - Projeção em perspectiva real a 60 FPS.
  - Notas normais, *Hammer-Ons/Pull-Offs* (HOPOs), *Tap Notes* e notas abertas (*open strum bars*).
  - *Sustain tails* (notas longas) com pontuação contínua em tempo real e partículas de faísca.
  - Iluminação reativa nas pistas (*lanes*) e roda de fundo giratória de 5 cores.

- **Motor Completo de `.chart`:**
  - Suporte ao padrão `.chart` do Moonscraper / Clone Hero.
  - Mapas de tempo dinâmicos (`[SyncTrack]` com mudanças de BPM pré-integradas em segundos exatos), fórmulas de compasso e frases de *Star Power* (`S 2`).
  - Script utilitário `tools/mid2chart.py` incluso para converter arquivos `.mid` para `.chart`.

- **Interface, Menus e Gameplay:**
  - **Menu Principal:** *Quick Play* (sorteia uma música aleatória), *Song Select* (com capas de álbum e navegação rápida por páginas nos gatilhos L/R) e *Options*.
  - **Seleção Dinâmica de Dificuldade:** Detecta automaticamente as dificuldades disponíveis (*Easy*, *Medium*, *Hard*, *Expert*) em cada música.
  - **HUD Completo:** Multiplicador circular (1x–4x), *Rock Meter*, barra de *Star Power* (modo 2x com pista ciano elétrico), porcentagem de precisão em tempo real e contagem regressiva 3-2-1 ao despausar.
  - **Controles 100% Customizáveis:** Menu *Button Remapper* para reatribuir qualquer botão do PSP e alternar entre **Strum Mode** (exige palhetada) e **Tap Mode** (acerto direto nos botões das cores).

---

## Como Compilar e Executar

A compilação utiliza o container oficial do PSPDEV, sem necessidade de instalar o toolchain manualmente:

```bash
./docker-build.sh
```

O script gera o binário assinado e criptografado **`EBOOT.PBP`**, pronto para ser copiado para `ms0:/PSP/GAME/cloneHero/` em um PSP real (1000/2000/3000/Go/Street) ou executado diretamente no emulador **PPSSPP**.
