import type { ComponentId, LearningResource } from './types';

export const learningResources: Record<ComponentId, LearningResource> = {
  processor: {
    componentId: 'processor',
    learningLayers: {
      fundamentals: [
        'O SoC (System on Chip) é o cérebro do smartphone: um único chip que integra CPU, GPU, NPU, ISP, modem e controladores',
        'Cada unidade especializada executa funções específicas, aumentando eficiência energética e desempenho',
        'A arquitetura integrada reduz tamanho, custo e consumo de bateria versus múltiplos chips separados',
        'Eficiência do SoC impacta: velocidade geral, qualidade de câmera, duração da bateria e conectividade'
      ],
      technicalDeepDive: [
        'big.LITTLE (ARM): cluster de núcleos de performance (Cortex-X) e eficiência (Cortex-A5xx)',
        'DynamIQ scheduler: aloca dinamicamente tarefas ao núcleo ideal baseado em carga térmica e energética',
        'Processo de fabricação: 3nm > 4nm > 5nm; menor nanômetro = mais transistores, menos leakage current',
        'Cache L3 compartilhada: memória SRAM ultrarrápida acessível por todos os núcleos (8-16 MB)',
        'NPU TOPS: medida de capacidade de inferência de IA por segundo; 50 TOPS processam ~50 trilhões de operações/s',
        'Modem 5G integrado: suporte a mmWave e sub-6GHz; menor latência vs. modem externo'
      ],
      commercial: [
        'Flagships (2024): Snapdragon 8 Gen 3 (4nm, 8 núcleos, 45+ TOPS NPU), Apple A17 Pro (3nm, 6 núcleos), Dimensity 9300 (4nm, 8+ núcleos)',
        'Mid-range: Snapdragon 7+ Gen 3 (4nm), Dimensity 8300 (4nm) — performance flagship por custo menor',
        'Entry: Snapdragon 4 Gen 2 (6nm), Helio G99 (6nm) — suficiente para redes sociais e streaming',
        'Comparativo: NPU mais potente = melhor processamento de fotos noturnas com IA, tradução offline mais rápida, assistente de voz mais responsivo'
      ],
      troubleshooting: [
        'Sintoma: travamentos aleatórios ou apps fechando → CPU insuficiente para multitarefa ou RAM baixa',
        'Sintoma: superaquecimento em jogos longos → GPU de entry-level com refrigeração limitada',
        'Sintoma: bateria drena rápido em standby → SoC em processo >5nm sem modem integrado eficiente',
        'Benchmarks: Geekbench (single/multi-core CPU), 3DMark Wild Life (GPU), AnTuTu (composite)'
      ]
    },
    analogies: [
      {
        title: 'Cidade Inteligente',
        explanation: 'O SoC é como uma cidade inteligente onde cada departamento (CPU, GPU, ISP, etc.) executa suas funções especializadas em paralelo, coordenados por um prefeito (scheduler DynamIQ).',
        customerFacing: 'Pense no processador como uma "cidade inteligente" dentro do seu celular. Cada serviço funciona independentemente: a unidade de gráficos (GPU) é como o departamento de cultura, cuidando de telas e jogos; o processador de imagens (ISP) é como o hospital, que revela suas fotos; o modem é a estação rodoviária, conectando você ao mundo. Cada um é especialista no que faz,Making the phone faster and more efficient.'
      }
    ],
    keyTerms: [
      { term: 'SoC (System on Chip)', definition: 'Sistema-em-um-chip: integra CPU, GPU, NPU, ISP, modem e mais em único silício', difficulty: 'basic' },
      { term: 'CPU (Central Processing Unit)', definition: 'Unidade Central de Processamento: cérebro geral do sistema, executa apps e sistema operacional', difficulty: 'basic' },
      { term: 'GPU (Graphics Processing Unit)', definition: 'Processador gráfico: renderiza jogos, vídeos, UI com aceleração 3D', difficulty: 'basic' },
      { term: 'NPU (Neural Processing Unit)', definition: 'Unidade neural: acelera operações de IA/ML localmente, reduzindo dependência da nuvem', difficulty: 'intermediate' },
      { term: 'ISP (Image Signal Processor)', definition: 'Processador de sinal de imagem: converte dados brutos do sensor em fotos processadas com HDR, ruído reduzido', difficulty: 'intermediate' },
      { term: 'big.LITTLE', definition: 'Arquitetura ARM com clusters de alta performance (big) e alta eficiência (LITTLE)', difficulty: 'intermediate' },
      { term: 'Processo de Fabricação (nm)', definition: 'Tamanho dos transistores; menor nanômetro (3nm) permite mais transistores e menos consumo que 7nm', difficulty: 'basic' },
      { term: 'TOPS (Tera Operations Per Second)', definition: 'Medida de capacidade da NPU; 50 TOPS = 50 trilhões de operações de IA por segundo', difficulty: 'advanced' },
      { term: 'DynamIQ', definition: 'Tecnologia ARM que gerencia alocação de tarefas entre clusters de núcleos em tempo real', difficulty: 'advanced' },
      { term: 'Cache L3', definition: 'Memória SRAM compartilhada entre todos os núcleos da CPU; maior cache = menos acesso à RAM lenta', difficulty: 'intermediate' }
    ],
    competitiveAdvantages: [
      'NPU integrada de 50+ TOPS permite processamento de IA offline (privacidade e baixa latência)',
      'Modem 5G integrado reduz consumo versus solução externa, com menor footprint interno',
      'ISP dedicado com múltiplos estágios de processamento: HDR real-time, ruído reduzido em vídeos',
      'Eficiência térmica avançada: menor geração de calor permite performance sustentada por mais tempo'
    ],
    objectionHandling: [
      {
        objection: 'Esse processador é muito potente, não preciso de tanto',
        response: 'Potência extra significa que o aparelho continuará rápido por mais tempo. O processador impacta diretamente a qualidade das câmeras, duração da bateria e atualizações de sistema por mais anos.',
        evidence: 'Processadores flagship atuais (3nm/4nm) têm margem de performance que garante fluidez por 4+ anos, enquanto entry-level de 2 anos atrás já mostra lentidão'
      },
      {
        objection: 'Processador da marca X é melhor?',
        response: 'A arquitetura ARM é universal; o que importa é o processo de fabricação (nm) e número de TOPS da NPU. Compare especificações técnicas, não apenas nomes.',
        evidence: 'Snapdragon 8 Gen 3 vs Dimensity 9300: ambos 4nm, performance similar; diferenças em eficiência e recursos de câmera'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente power user (jogos, multitarefa, gravações)',
        talkingPoints: [
          '8 núcleos com big.LITTLE garantem performance máxima quando precisa e economia quando não',
          'NPU de 45+ TOPS processa fotos noturnas e vídeos com IA instantaneamente',
          'Modem 5G integrado oferece download mais rápido e menor latência em jogos online'
        ],
        closingStrategy: 'Foque no ciclo de vida: processador topo de linha protege o investimento por 4+ anos'
      },
      {
        scenario: 'Cliente que prioriza bateria',
        talkingPoints: [
          'Processo de 4nm consome até 30% menos energia que 6nm',
          'Grande cluster de núcleos eficientes (LITTLE) lida com tarefas do dia a dia',
          'Modem integrado otimiza conexão, evitando picos de consumo em áreas fracas'
        ],
        closingStrategy: 'Mostre que eficiência do SoC é tão importante quanto capacidade da bateria'
      }
    ]
  },

  camera: {
    componentId: 'camera',
    learningLayers: {
      fundamentals: [
        'Sistema de câmeras moderno utiliza múltiplas lentes: ultra-wide, wide principal, telephoto (zoom óptico), macro e ToF/LiDAR',
        'Sensor CMOS converte fótons em sinais elétricos; maior tamanho do sensor e pixel captura mais luz',
        'Quad-Bayer (pixel binning): agrupa pixels para melhor sensitividade em baixa luz',
        'OIS (estabilização óptica) move a lente fisicamente para compensar tremor; EIS usa software e giroscópio'
      ],
      technicalDeepDive: [
        'Tamanho do sensor: 1/1.3" é maior que 1/2.55"; mais luz = fotos mais limpas no escuro',
        'Abertura (f/1.5-f/4.0): abertura maior (menor número) entra mais luz; abertura variável ajusta automaticamente',
        'Quad-Bayer: sensor 50MP com 1µm pixels; em modo binning vira 12.5MP com 2µm (muito mais luz)',
        'Periscope zoom: lentes dispostas em 90° com espelhos, permite 5x-10x óptico sem lentes protuberantes',
        'ToF (Time of Flight): mede distância por pulso de luz, gera mapa de profundidade para retratos e AR'
      ],
      commercial: [
        'Flagships: sensor principal 50MP 1/1.1" (GN2), abertura f/1.5 variável, OIS 3-eixos, zoom periscope 5x',
        'Premium: sensor 50MP 1/1.3" (GN5), OIS 2-eixos, zoom 3x',
        'Mid-range: sensor 64MP 1/1.73", OIS básico, zoom digital',
        'Comparativo: 1/1.3" vs 1/2.55" captura ~40% mais luz; OIS vs EIS: óptico preserva qualidade, digital corta frame'
      ],
      troubleshooting: [
        'Fotos borradas em pouca luz sem OIS → usar modo noturno (longa exposição) ou suporte estável',
        'Distorção (barrel) em ultra-wide → correção por software precisa de processamento extra',
        'Vídeos trêmulos → verificar se OIS está ativo (modo cinema) e se há estabilização híbrida',
        'Ruído (grain) em cenas noturnas → esperar captura multi-frame (3-5 segundos) no modo noite'
      ]
    },
    analogies: [
      {
        title: 'Olhos e Cérebro',
        explanation: 'Sensor CMOS = retina; Lens = cristalino; ISP = cérebro visual; NPU = processamento de interpretação; OIS = músculo estabilizador do olho.',
        customerFacing: 'A câmera do celular tem seu próprio par de olhos e cérebro. O sensor captura a luz, as lentes focam, o estabilizador (OIS) evita tremores como seus músculos oculares e o ISP processa a imagem instantaneamente como seu cérebro interpreta o que vê.'
      }
    ],
    keyTerms: [
      { term: 'Sensor CMOS', definition: 'Matriz de sensores que converte luz em sinais elétricos; maior = mais luz capturada', difficulty: 'basic' },
      { term: 'Pixel Binning', definition: 'Agrupamento de 4 ou 9 pixels adjacentes em um super-pixel para melhor sensibilidade noturna', difficulty: 'intermediate' },
      { term: 'OIS (Optical Image Stabilization)', definition: 'Estabilização óptica: move a lente ou sensor fisicamente para compensar vibrações', difficulty: 'basic' },
      { term: 'EIS (Electronic Image Stabilization)', definition: 'Estabilização eletrônica: usa giroscópio e software para cortar e realinhar o quadro', difficulty: 'basic' },
      { term: 'Abertura (f/)', definition: 'Diâmetro da entrada de luz; f/1.5 entra mais luz que f/2.8; também influencia profundidade de campo', difficulty: 'intermediate' },
      { term: 'Quad-Bayer / Tetracell', definition: 'Organização dos pixels em blocos 2x2 para binning; sensor de 50MP produz 12.5MP em modo binning', difficulty: 'advanced' },
      { term: 'Periscope Zoom', definition: 'Sistema de zoom óptico com lentes perpendiculares usando espelhos; permite 5x-10x sem aumento de espessura', difficulty: 'advanced' },
      { term: 'ToF (Time of Flight)', definition: 'Sensor de profundidade que mede o tempo de retorno do pulso de luz infravermelha', difficulty: 'intermediate' },
      { term: 'HDR (High Dynamic Range)', definition: 'Combina múltiplas exposições para manter detalhes em luzes altas e sombras', difficulty: 'basic' },
      { term: 'RAW output', definition: 'Dados brutos do sensor, sem processamento do ISP; permite edição profissional', difficulty: 'advanced' }
    ],
    competitiveAdvantages: [
      'Sensor com 1/1.3" captura ~40% mais luz que sensores 1/1.7" típicos de concorrentes intermediários',
      'OIS de 3 eixos (roll, pitch, yaw) compensa tremor em todas as direções, reduzindo borrão em fotos noturnas',
      'Zoom periscope 5x mantém qualidade óptica (não é zoom digital que perde pixels)',
      'ISP de última geração processa múltiplos quadros em paralelo (multi-frame) para HDR e redução de ruído em tempo real'
    ],
    objectionHandling: [
      {
        objection: 'Câmera de 200MP é melhor que de 50MP?',
        response: 'Mais megapixels nem sempre significa melhor qualidade. O que importa é o tamanho do sensor e do pixel. Um sensor 1/1.3" de 50MP com pixel binning produz imagens mais limpas que um sensor pequeno de 200MP.',
        evidence: 'Testes comparativos: Samsung Galaxy S23 Ultra 200MP vs Pixel 7 Pro 50MP — qualidade real comparável, mas 200MP consome mais armazenamento e processamento'
      },
      {
        objection: 'Zoom digital é tão bom quanto óptico?',
        response: 'Zoom digital simplesmente recorta a imagem e amplia, perdendo pixels (borrão). Zoom óptico usa lentes dedicadas, mantendo nitidez.',
        evidence: 'Zoom 10x óptico vs 10x digital: diferença de detalhe equivalente a ler um outdoor a 100m vs 30m'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente que tira muitas fotos em viagens (paisagens, alimentos)',
        talkingPoints: [
          'Sensor grande + abertura f/1.5 captura mais luz em restaurantes escuros',
          'Modo noturno multi-frame combina várias fotos para reduzir ruído',
          'Ultra-wide 120° captura mais cenário sem precisar recuar'
        ],
        closingStrategy: 'Demonstre live: mostre diferença de uma foto noturna com e sem modo noite'
      },
      {
        scenario: 'Cliente que faz vídeos para redes sociais',
        talkingPoints: [
          'Estabilização híbrida (OIS+EIS) garante vídeos profissionais sem Gimbal',
          '4K@60fps com HDR10+ oferece cores vivas e detalhe',
          'Modo cinema 24fps para estética cinematográfica'
        ],
        closingStrategy: 'Grave um vídeo curto no local mostrando a estabilidade e depois reproduza'
      }
    ]
  },

  battery: {
    componentId: 'battery',
    learningLayers: {
      fundamentals: [
        'Bateria de íon-lítio (Li-ion) ou polímero (Li-Po) armazena energia química convertida em elétrica',
        'Capacidade medida em mAh: maior número dura mais entre cargas, mas também influenciado por eficiência do SoC',
        'Ciclo de carga: descarregar 100% → 0% conta como 1 ciclo; baterias típicas mantêm 80% após 500-1000 ciclos',
        'Carregamento rápido: maior wattagem (W) = menos tempo; mas degradação acelerada se carregar a 100% sempre'
      ],
      technicalDeepDive: [
        'Química Li-ion: alta densidade energética, mas forma filamentação dendrítica (risco de curto)',
        'Li-Po: eletrólito polimérico; forma mais fina e flexível, usada em designs curvos; ligeiramente menor densidade',
        'Grafeno: eletrodo de grafeno permite carregamento ultra-rápido (>200W) com menos calor e degradação',
        'PMIC (Power Management IC): chip que regula tensão e corrente entre carregador, bateria e componentes',
        'USB-PD (Power Delivery): protocolo universal; negocia voltagem (5-20V) e corrente (até 5A) entre carregador e dispositivo',
        'Qi2: novo padrão sem fio (Magnet) alinha bobinas automaticamente; eficiência até 80% vs 50-60% do Qi1'
      ],
      commercial: [
        'Capacidades típicas: flagships 4.500-5.500 mAh; mid-range 5.000-6.000 mAh; entry 4.000-5.000 mAh',
        'Carregamento com fio: 30W (entry), 65-100W (mid), 120-240W (flagship) — 0-100% em 15-30 min',
        'Carregamento sem fio: 15W (Qi1), 25W (Qi2), 15W (MagSafe); reverso (Wireless PowerShare) até 10W',
        'Nota: maior wattagem não alonga vida útil; use carregamento lento (noite) para preservar saúde da bateria'
      ],
      troubleshooting: [
        'Bateria drena rápido: verifique apps em segundo plano, Always-On Display, sinal fraco (modem trabalha mais)',
        'Superaquecimento ao carregar: use carregador oficial, retire capa, evite uso intenso durante carga',
        'Degradação acelerada: evitar carregar a 100% sempre (optar por 80-90%), não descarregar abaixo de 20%',
        'Teste: Ampere, Battery University dados; ciclo de carga reportado nas configurações (iOS/Android)'
      ]
    },
    analogies: [
      {
        title: 'Tanque de Combustível e Posto',
        explanation: 'A bateria é um tanque de combustível (energia química) e o carregador é o posto que a enche. Carregar rápido (alta potência) é como encher com mangueira de alta pressão — mais rápido mas aquece e pode desgastar mais.',
        customerFacing: 'Imagine que a bateria é um tanque de combustível do seu carro. O carregador é o posto. Carregamento rápido (120W) é como colocar combustível com mangueira de alta pressão: enche rápido mas aquece o sistema. Para a saúde a longo prazo, é bom também fazer abastecimento lento (carregamento noturno).'
      }
    ],
    keyTerms: [
      { term: 'mAh (milliampere-hour)', definition: 'Capacidade da bateria; maior valor dura mais entre cargas', difficulty: 'basic' },
      { term: 'Ciclo de carga', definition: 'Descarga de 100% até 0% equivale a 1 ciclo; baterias têm 500-1000 ciclos até 80% de capacidade', difficulty: 'intermediate' },
      { term: 'Li-ion', definition: 'Bateria de íon de lítio; alta densidade energética, usada em maioria de smartphones', difficulty: 'basic' },
      { term: 'Li-Po', definition: 'Bateria de polímero de lítio; formato mais flexível, útil para designs curvos', difficulty: 'intermediate' },
      { term: 'PMIC', definition: 'Power Management IC; regula alimentação entre carregador, bateria e componentes', difficulty: 'advanced' },
      { term: 'USB-PD', definition: 'Power Delivery; protocolo universal que negocia voltagem/corrente entre carregador e dispositivo', difficulty: 'intermediate' },
      { term: 'Qi2', definition: 'Padrão de carregamento sem fio com magnet alinhado automaticamente para maior eficiência', difficulty: 'intermediate' },
      { term: 'Degradação de bateria', definition: 'Perda de capacidade ao longo do tempo; fatores: calor, carregar a 100% constante, descarregar abaixo de 0%', difficulty: 'basic' }
    ],
    competitiveAdvantages: [
      'Carregamento de 120W recarrega 0-100% em ~20 minutos, ideal para uso intenso',
      'Suporte a Qi2 (magnet) com eficiência de 80% vs 50% do Qi1 antigo — menos perda de energia como calor',
      'Bateria de 5.000 mAh + SoC de 4nm garante longa duração mesmo com uso pesado',
      'Recarga reversa (10W) permite compartilhar energia com acessórios como fones sem fio'
    ],
    objectionHandling: [
      {
        objection: 'Carregador rápido estraga a bateria?',
        response: 'Não estraga permanentemente, mas carregamento rápido gera mais calor que acelera degradação a longo prazo. Use o carregador rápido quando precisar de tempo curto, e o normal (5-10W) para carregar durante a noite.',
        evidence: 'Estudos mostram que baterias submetidas a carregamento rápido diário perdem ~20% capacidade após 500 ciclos vs ~15% com carregamento lento'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente que viaja e precisa de bateria o dia todo',
        talkingPoints: [
          '5.000 mAh + modem 5G integrado eficiente = 8-10h de tela ligada',
          'Carregamento rápido 120W: 15 minutos dão até 60% de carga',
          'Qi2 sem fio no carro: basta encaixar magneticamente',
          'Carregamento reverso para recarregar fones TWS sem cabos'
        ],
        closingStrategy: 'Demonstre o tempo real de carregamento em loja: de 20% a 80% em 15 minutos'
      }
    ]
  },

  display: {
    componentId: 'display',
    learningLayers: {
      fundamentals: [
        'Tela OLED/AMOLED: cada pixel emite luz própria, permitindo pretos absolutos e contraste infinito',
        'Touch capacitivo: camada de eletrodos transparentes detecta toque por capacitância do dedo',
        'Taxa de atualização: 60Hz padrão, 90-120Hz mais fluido; LTPO adapta entre 1-120Hz para economizar bateria',
        'Proteção: Gorilla Glass Victus 2 (resiste a quedas 2m), Ceramic Shield (Apple), vidro temperado'
      ],
      technicalDeepDive: [
        'OLED vs LCD: OLED não precisa de backlight; cada pixel controla individualmente; LCD usa backlight constante',
        'LTPO (Low-Temperature Polycrystalline Oxide): camada TFT que permite ajuste dinâmico de refresh sem mudar energia',
        'PWM (Pulse Width Modulation): método de brilho em OLED; baixa frequência pode causar fadiga visual em sensíveis',
        'Pixels: resolução QHD+ (3200×1440) vs FHD+ (2400×1080); densidade (ppi) afeta nitidez',
        'HDR10+/Dolby Vision: metadados dinâmicos que ajustam cena a cena; wider color gamut (P3, Rec.2020)'
      ],
      commercial: [
        'Flagship: LTPO AMOLED 6.7", 120Hz, 2.000-4.000 nits pico, QHD+ ou 4K, Gorilla Glass Victus 2',
        'Premium: LTPO AMOLED 6.5", 120Hz, 1.500 nits, FHD+, Gorilla Glass 5/ Victus',
        'Mid-range: AMOLED 90-120Hz, FHD+, 1.000 nits, Gorilla Glass 3/5',
        'Entry: LCD IPS, 60-90Hz, FHD+, proteção de vidro básica'
      ],
      troubleshooting: [
        'Queima de imagem (burn-in): ocorre em OLED com elementos estáticos por horas; use telas escuras e proteção de pixel shift',
        'Fadiga visual: OLED em baixo brilho com PWM podem causar dor; usar modo DC dimming se disponível',
        'Vibração (banding) em tons escuros: normal em OLED; usar fundos não sólidos pode ajudar',
        'Toque não preciso: calibração ou capa metálica podem interferir'
      ]
    },
    analogies: [
      {
        title: 'Céu Estrelado',
        explanation: 'Tela OLED é como um céu noturno: as estrelas (pixels) apagam-se completamente quando não há luz, dando verdadeiro preto. Já as telas LCD são como um holofote atrás de um xerox — sempre há luz vazando.',
        customerFacing: 'A tela OLED é como um céu estrelado: quando apaga, está completamente escuro. Isso dá contraste infinito e cores mais vivas. A LCD tradicional tem um "holofote" atrás que nunca apaga totalmente, então os pretos são acinzentados.'
      }
    ],
    keyTerms: [
      { term: 'OLED (Organic Light Emitting Diode)', definition: 'Diodo orgânico que emite luz própria; cada pixel emite cor independente, permitindo preto total', difficulty: 'basic' },
      { term: 'AMOLED', definition: 'Active-Matrix OLED: adiciona transistor TFT por pixel para controle mais preciso; usado em smartphones', difficulty: 'intermediate' },
      { term: 'LTPO', definition: 'Low-Temperature Polycrystalline Oxide; tecnologia que permite variação dinâmica da taxa de atualização (1-120Hz) sem artefacts', difficulty: 'advanced' },
      { term: 'Taxa de atualização (Hz)', definition: 'Número de vezes que a tela atualiza por segundo; 120Hz é mais fluido mas consome mais bateria que 60Hz', difficulty: 'basic' },
      { term: 'Nits', definition: 'Unidade de brilho; 1.000 nits é legível no sol; 4.000 nitsdestaca HDR', difficulty: 'intermediate' },
      { term: 'PWM (Pulse Width Modulation)', definition: 'Modulação por largura de pulso para controle de brilho em OLED; baixa frequência pode causar fadiga ocular', difficulty: 'advanced' },
      { term: 'Gorilla Glass Victus 2', definition: 'Vidro de proteção da Corning; resiste a queda de 2m em concreto; melhor que Gorilla Glass 5', difficulty: 'basic' },
      { term: 'HDR10+/Dolby Vision', definition: 'Metadados dinâmicos que ajustam cena a cena para contraste e cor, mais avançado que HDR10 estático', difficulty: 'intermediate' }
    ],
    competitiveAdvantages: [
      'Tela LTPO 1-120Hz economiza bateria em uso passivo (rede sociais) e oferece fluidez em jogos',
      'Pico de brilho 4.000 nits garante legibilidade sob sol direto',
      'Gorilla Glass Victus 2 resiste a quedas de até 2 metros em concreto, reduzindo risco de quebra',
      'OLED com true black melhora imersão em vídeos e economiza energia em modo always-on display'
    ],
    objectionHandling: [
      {
        objection: 'OLED queima (burn-in) rápido?',
        response: 'Queima ocorre apenas com elementos estáticos por muitas horas (logotipos de canais, barras de status). Uso normal não causa problema. Fabricantes utilizam pixel shift e desgaste equilibrado para evitar.',
        evidence: 'Testes de queima prolongada (1000h) mostram degradação mínima com uso misto; burn-in severo ocorre apenas com exibição contínua de estático'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente que consome muitos vídeos e jogos',
        talkingPoints: [
          'Tela LTPO 120Hz: jogos mais fluidos, rolagem suave',
          'Contraste infinito (preto real) aumenta imersão em filmes HDR',
          'Brilho pico 4.000 nits: visualize conteúdo HDR com destaque máximo',
          'Proteção Vidro Victus 2: menos risco de quebra por queda'
        ],
        closingStrategy: 'Mostre vídeos HDR lado a lado com concorrente de LCD para destacar contraste e cores'
      }
    ]
  },

  nfc: {
    componentId: 'nfc',
    learningLayers: {
      fundamentals: [
        'NFC (Near Field Communication) opera a 13.56 MHz, alcance até 10 cm; comunicação por indução magnética',
        'Três modos: P2P (troca de dados), Reader/Writer (lê tags passivas), Card Emulation (simula cartão)',
        'Elemento Seguro (SE) armazena chaves criptográficas em hardware isolado, seguro contra extração',
        'Aplicações: pagamentos contactless, abertura de porta, passes de transporte, compartilhamento rápido'
      ],
      technicalDeepDive: [
        'Protocols ISO/IEC 14443 (proximidade) e 18092 (P2P); frequência 13.56 MHz banda ISM',
        'Modo Card Emulation: usa host card emulation (HCE) via software ou SE físico para maior segurança',
        'Tag NFC tipos 1-5: variam em memória e velocidade; Tipo 4 (DESFire) suporta criptografia AES',
        'Distância segura: 4-10 cm; acima disso a comunicação falha; sinal é fraco intencionalmente por segurança',
        'Antena: bobina de cobre de ~5-10cm² na parte superior do dispositivo; alinhamento é crítico'
      ],
      commercial: [
        'Presença em quase 100% smartphones atuais; padrão para pagamentos (Google Pay, Samsung Pay, Apple Pay)',
        'Compatibilidade com infraestrutura global: terminais de cartão, catracas, etiquetas RFID de alta frequência',
        'NFC Forum Type 4 Tags: usados em automação residiliar (tags em porta, quarto)',
        'Desempenho: leitura em 100-500ms; taxa de transferência 106-424 kbps'
      ],
      troubleshooting: [
        'Leitura falha: alinhe celular com o símbolo NFC no terminal; evitar capas metálicas grossas',
        'Pagamento recusado: ativar NFC e tela ligada; alguns exigem biometria antes',
        'Tags não respondem: verificar se são NFC (13.56 MHz) e não RFID 125 kHz (different frequency)',
        'Interferência: metal e água absorvem RF; evitar adesivos metálicos atrás do telefone'
      ]
    },
    analogies: [
      {
        title: 'Conversa Sussurrada',
        explanation: 'NFC é como duas pessoas sussurrando a poucos centímetros. O sinal é intencionalmente fraco, garantindo que só funcionem muito próximas, o que é uma característica de segurança. Nenhum outro dispositivo interfere na "conversa".',
        customerFacing: 'Pense no NFC como uma "conversa sussurrada" a poucos centímetros. Só funciona quando os dois devices estão quase tocando, o que já é uma segurança natural. Ninguém pode interceptar à distância.'
      }
    ],
    keyTerms: [
      { term: 'NFC (Near Field Communication)', definition: 'Comunicação sem fio de curto alcance (até 10cm) a 13.56 MHz', difficulty: 'basic' },
      { term: 'Modo P2P', definition: 'Peer-to-peer: dois dispositivos trocam dados diretamente (ex: compartilhar contato via Android Beam)', difficulty: 'basic' },
      { term: 'Card Emulation', definition: 'O celular se passa por cartão físico (ex: pagamento, transporte) perante um leitor', difficulty: 'intermediate' },
      { term: 'HCE (Host Card Emulation)', definition: 'Virtualização de cartão via software; mais flexível mas menos seguro que SE dedicado', difficulty: 'advanced' },
      { term: 'SE (Secure Element)', definition: 'Chip dedicado seguro que armazena chaves criptográficas isolado do sistema operacional', difficulty: 'advanced' },
      { term: 'Tag NFC', definition: 'Etiqueta passiva sem bateria; ativada pelo campo do leitor; armazena pequenos dados', difficulty: 'basic' },
      { term: 'Frequência 13.56 MHz', definition: 'Frequência padrão globally; diferente de RFID 125kHz ou 900MHz', difficulty: 'intermediate' }
    ],
    competitiveAdvantages: [
      'SE integrado no chip (eSE) protege chaves de pagamento mesmo se sistema operacional for comprometido',
      'Alinhamento magnético da Qi2 melhora eficiência sem fio e permite NFC mais preciso',
      'Suporte a múltiplos modos: P2P, Reader, Card Emulation em único chip',
      'Algoritmos de criptografia hardware-accelerated (AES, RSA) garantem transações seguras'
    ],
    objectionHandling: [
      {
        objection: 'NFC é inseguro? Meu cartão pode ser clonado?',
        response: 'NFC foi projetado para alcance extremamente curto (10cm), o que já limita ataque. Além disso, pagamentos usam tokenização: o número do cartão nunca é transmitido, apenas um token único por transação.',
        evidence: 'Normas EMVCo e PCI-DSS regem a segurança das transações NFC; o payment usa tokenização com chave privada'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente corporativo que usa crachás digitais',
        talkingPoints: [
          'Modo Card Emulation possibilita usar o celular como cartão de acesso/pagamento',
          'SE assegura que credenciais estejam seguras contra extração',
          'Leitura de tags NFC pode automatizar check-in e registro de equipamentos'
        ],
        closingStrategy: 'Demonstre um app de pagamento ou leitura de tag na loja'
      }
    ]
  },

  durability: {
    componentId: 'durability',
    learningLayers: {
      fundamentals: [
        'Durabilidade combinada: estrutura (alumínio, titânio, aço) + vidro + juntas de vedação',
        'Índice IP (Ingress Protection): 1º dígito sólidos (0-6), 2º dígito líquidos (0-9K); exemplo IP68 = poeira total, imersão >1m',
        'Certificações MIL-STD-810H: testes militares para resistência a choque térmico, vibração, baixa pressão, umidade',
        'Gorilla Glass Victus 2: resiste a queda de 2m em concreto; Ceramic Shield (Apple) 3x mais resistente que vidro comum'
      ],
      technicalDeepDive: [
        'Materiais de estrutura: liga de alumínio 7000 (aeronáutico) peso-resistência; titânio 40% mais forte que alumínio, peso similar',
        'Juntas de vedação: silicone de alta compressão + selante interno (PU, epoxy) garantem vedação contra água',
        'Testes IP: submersão em água a 1-1.5m por 30 min; IP69K adiciona jatos de água alta pressão 80-100 bar',
        'MIL-STD-810H: includes Method 516.8 Shock, 501.7 High Temperature, 502.7 Low Temperature, 507.7 Humidity',
        'Glass Ceramic (Ceramic Shield): cristais nanocerâmicos dentro do vidro, aumentam resistência a fraturas'
      ],
      commercial: [
        'IP68 é padrão em flagships: resiste a mergulho em piscina (água doce) por 30 min a 1.5m',
        'IP69K raro em celulares, comum em dispositivos industriais (lava-jato)',
        'Gorilla Glass Victus 2: 2x menos danos em quedas vs. Gorilla Glass 6',
        'Titânio na estrutura reduz peso em ~15% vs alumínio enquanto mantém ou aumenta resistência'
      ],
      troubleshooting: [
        'Resistência a água não é permanente: vedantes degradam com o tempo e exposição a produtos químicos (cloro, álcool)',
        'Queda em superfície dura pode danificar vidro mesmo com Victus; usar capa e película recomendado',
        'Garantia não cobre danos por água em muitos fabricantes — IP é especificação, não garantia',
        'Testes DIY não recomendados: submergir em água pode comprometer vedação se contra-indicado pelo fabricante'
      ]
    },
    analogies: [
      {
        title: 'Búnquer Submarino',
        explanation: 'O smartphone é como um submarino de vigilância: fuselagem titânio/alumínio (estrutura), vidro blindado (casco), e juntas de vedação (escotilhas). O IP é a classificação de profundidade que ele suporta sem inundar. IP68 significa submergir até 1.5m por meia hora.',
        customerFacing: 'Pense no smartphone como um submarino moderno: o corpo de titânio ou alumínio é o casco, o vidro reforçado é a torre de comando e as borrachas de vedação são as escotilhas. O IP é a profundidade máxima que ele pode descer sem entrar água. O IP68 suporta até 1.5 metro por 30 minutos em água doce.'
      }
    ],
    keyTerms: [
      { term: 'IP (Ingress Protection)', definition: 'Código de dois dígitos: primeiro = sólidos (0-6), segundo = líquidos (0-9K); IP68 = a Prova de poeira, imersão >1m', difficulty: 'basic' },
      { term: 'IP68', definition: 'Proteção total contra poeira (6) e imersão contínua em água >1m por tempo prolongado (8); típico em flagships', difficulty: 'basic' },
      { term: 'IP69K', definition: 'Proteção contra jatos de água de alta pressão e alta temperatura (9K); comum em Industrial, raro em celulares', difficulty: 'intermediate' },
      { term: 'MIL-STD-810H', definition: 'Norma militar dos EUA com bateria de testes de resistência a choque térmico, vibração, queda, umidade', difficulty: 'intermediate' },
      { term: 'Gorilla Glass Victus 2', definition: 'Vidro da Corning; resiste até 2 quedas de 2m em concreto; 2x menos danos que versão 6', difficulty: 'basic' },
      { term: 'Ceramic Shield', definition: 'Vidro com cristais nanocerâmicos; 3x mais resistente a rachaduras que vidro comum (Apple)', difficulty: 'basic' },
      { term: 'Juntas de vedação', definition: 'Silicone, PU ou TPE que vedam a interface entre componentes; degradam com o tempo e produtos químicos', difficulty: 'intermediate' }
    ],
    competitiveAdvantages: [
      'Certificação IP68 permite uso em piscina, chuva intensa, respingo de bebidas sem danos',
      'Estrutura de titânio reduz peso em ~15% em relação a alumínio, sem perder resistência a impactos',
      'Gorilla Glass Victus 2 em ambos lados (frente e traseira) evita quebras acidentais',
      'Testes MIL-STD-810H garantem resistência a variações extremas de temperatura (-20°C a 60°C) e umidade'
    ],
    objectionHandling: [
      {
        objection: 'IP68 significa que posso mergulhar com o celular?',
        response: 'IP68 garante resistência a imersão em água doce a 1.5m por 30 minutos, mas não é para mergulho profundo ou água salgada (corrosão). Além disso, garantia geralmente não cobre danos por água.',
        evidence: 'Fabricantes qualificam IP sob condições controladas; água do mar, pressão, movimento e tempo prolongado podem comprometer vedação'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente ativo (praia, piscina, campo)',
        talkingPoints: [
          'IP68: sobrevive a mergulhos curtos em água doce até 1.5m, chuva torrencial',
          'Estrutura titânio resiste a impacts de queda em superfícies duras',
          'Vedação contra poeira e areia: uso em praia/estrada sem infiltrar partículas'
        ],
        closingStrategy: 'Mostre vídeo de teste de mergulho do modelo específico (se disponível)'
      }
    ]
  },

  memory: {
    componentId: 'memory',
    learningLayers: {
      fundamentals: [
        'A RAM (Random Access Memory) é a memória volátil de alta velocidade que guarda temporariamente os dados em uso pelo processador',
        'Em smartphones usa-se memória LPDDR (Low Power DDR), que consome menos energia que a DDR de desktops',
        'Capacidade de RAM determina quantos apps ficam abertos simultaneamente sem precisar recarregar',
        'Mais RAM não torna o celular mais rápido em tarefas simples — ela evita recargas e melhora a multitarefa'
      ],
      technicalDeepDive: [
        'LPDDR4X: 4266 Mbps; LPDDR5: 6400 Mbps; LPDDR5X: 8533 Mbps — cada geração dobra a largura de banda e reduz consumo',
        'LPDDR5X consome ~30% menos energia que LPDDR5 e suporta densidade de 16 Gb por chip',
        'Largura de banda: LPDDR5X atinge até 68,2 GB/s em canal dual de 16 bits — permite acesso rápido a texturas, modelos 3D e dados de IA',
        'Volatilidade: a RAM perde todo conteúdo ao desligar — por isso o sistema precisa persistir os dados no armazenamento não volátil',
        'Memória virtual (swap): quando a RAM física enche, o SO usa uma fração do armazenamento como RAM extra, mais lenta, evitando encerrar apps'
      ],
      commercial: [
        'Capacidades típicas 2024: 6 GB (básico), 8 GB (padrão), 12 GB (alto desempenho), 16 GB+ (flagship gamer/criador)',
        'Geração LPDDR5X é padrão em flagships 2023-2024; LPDDR5 em intermediários premium; LPDDR4X em entrada',
        'Mais RAM beneficia multitarefa pesada, edição de vídeo, jogos e manter apps em segundo plano',
        'Recursos como "RAM estendida" (Android) usam swap para simular mais RAM, mas com performance inferior'
      ],
      troubleshooting: [
        'Apps recarregando ao voltar: indica RAM insuficiente para o padrão de uso do usuário — recomendar modelo com mais RAM',
        'Dispositivo lento em multitarefa: verifique apps em segundo plano e feche os não essenciais',
        'Swap excessivo (memória virtual) causa lentidão geral: indica que a RAM física está sempre cheia',
        'Benchmark: Geekbench Memory mede largura de banda e latência da RAM'
      ]
    },
    analogies: [
      {
        title: 'Mesa de Trabalho',
        explanation: 'A RAM é a mesa de trabalho: quanto maior a mesa, mais documentos (apps) ficam abertos ao mesmo tempo. A armazenamento é o armário onde você guarda o que não está usando agora.',
        customerFacing: 'Imagine que a RAM é a mesa do seu escritório e o armazenamento é o armário. Uma mesa maior (mais RAM) permite deixar mais documentos abertos ao mesmo tempo sem precisar guardá-los. Quando a mesa enche, você precisa guardar um para pegar outro — é isso que acontece quando um app recarrega ao voltar.'
      }
    ],
    keyTerms: [
      { term: 'RAM (Random Access Memory)', definition: 'Memória volátil de alta velocidade que armazena temporariamente os dados em uso', difficulty: 'basic' },
      { term: 'LPDDR', definition: 'Low Power DDR; variante de baixo consumo da memória DDR usada em smartphones', difficulty: 'intermediate' },
      { term: 'LPDDR5X', definition: 'Geração atual de topo: 8533 Mbps, ~30% menos consumo que LPDDR5', difficulty: 'advanced' },
      { term: 'Volatilidade', definition: 'Característica de perder todo conteúdo ao cortar a energia; a RAM é volátil, a armazenamento não', difficulty: 'basic' },
      { term: 'Largura de banda (GB/s)', definition: 'Quantidade de dados transferidos por segundo; LPDDR5X atinge até 68,2 GB/s', difficulty: 'intermediate' },
      { term: 'Memória virtual (swap)', definition: 'Fração do armazenamento usada como RAM extra quando a física está cheia', difficulty: 'intermediate' }
    ],
    competitiveAdvantages: [
      'LPDDR5X de 8533 Mbps oferece acesso quase instantâneo a texturas e dados de IA',
      '16 GB de RAM mantém dezenas de apps pesados abertos sem recarregar',
      'Baixo consumo (~30% menor) contribui para maior duração da bateria',
      'Canal dual de 16 bits dobra a largura de banda disponível para o SoC'
    ],
    objectionHandling: [
      {
        objection: 'Mais RAM deixa o celular mais rápido?',
        response: 'Mais RAM não aumenta a velocidade em tarefas simples — ela evita que apps recarreguem ao voltar e melhora a multitarefa. Para uso comum, 8 GB já é suficiente; 12-16 GB fazem diferença em jogos, edição e muitos apps abertos.',
        evidence: 'Testes mostram que 6→8 GB reduz recargas perceptíveis em multitarefa; acima de 12 GB o ganho só é visível em uso pesado (jogos, edição)'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente que joga e alterna entre vários apps',
        talkingPoints: [
          '12-16 GB mantém o jogo carregado em segundo plano mesmo ao abrir mensagens, navegador e câmera',
          'LPDDR5X oferece largura de banda para carregar texturas rapidamente',
          'Sem recargas = experiência mais fluida e produtiva'
        ],
        closingStrategy: 'Demonstre alternando entre um jogo e vários apps sem recarregar'
      }
    ]
  },

  cooling: {
    componentId: 'cooling',
    learningLayers: {
      fundamentals: [
        'A dissipação térmica impede que o SoC esquente a ponto de reduzir o desempenho (thermal throttling)',
        'Câmara de vapor (vapor chamber) é uma placa de cobre selada com líquido que evapora e condensa para espalhar o calor',
        'Sem resfriamento eficiente, jogos longos e gravações de vídeo engasgam por proteção térmica',
        'Resfriamento melhorado aumenta a duração do pico de performance e o conforto ao segurar o aparelho'
      ],
      technicalDeepDive: [
        'Vapor Chamber: fluido dentro de uma câmara selada de cobre evapora na zona quente (SoC) e condensa na zona fria, transferindo calor por mudança de fase',
        'Condutividade térmica: o cobre transporta calor muito melhor que o ar, permitindo espalhar energia por uma área maior',
        'Graphite sheets: camadas adicionais de grafite complementam a vapor chamber, espalhando calor por áreas secundárias',
        'Thermal throttling: o SoC reduz a frequência automaticamente ao atingir limites de temperatura para evitar danos'
      ],
      commercial: [
        'Flagships gamer têm vapor chamber grande (até 5000mm²) combinada com grafite',
        'Mid-range: heatpipe simples ou placa de grafite pura, sem câmara de vapor',
        'Resfriamento é decisivo para gaming sustentado, edição de vídeo e gravação 8K',
        'Diferencial de venda: "funciona no pico por mais tempo" vs. concorrentes que engasgam'
      ],
      troubleshooting: [
        'Celular esquenta demais em uso normal: verifique apps em segundo plano e capa grossa que isola o calor',
        'Jogos travando após 15-20min: thermal throttling ativo — modelo sem dissipação robusta',
        'Aquecimento ao carregar: normal em carregamento rápido, evite usar intensamente durante a carga',
        'Capa muito grossa dificulta dissipação: prefira capas finas ou sem uso durante gaming'
      ]
    },
    analogies: [
      {
        title: 'Radiador de Carro',
        explanation: 'O resfriamento funciona como o radiador de um carro: o líquido quente circula, transfere o calor para o ar e volta frio, evitando que o motor superaqueça.',
        customerFacing: 'Pense no resfriamento como o radiador de um carro. Quando o processador esquenta jogando, a câmara de vapor "puxa" esse calor para longe e espalha pelo aparelho, igual à água que circula no radiador. Assim o motor (chip) continua no máximo sem ferver.'
      }
    ],
    keyTerms: [
      { term: 'Vapor Chamber', definition: 'Câmara selada de cobre com líquido que evapora e condensa para transferir calor por mudança de fase', difficulty: 'advanced' },
      { term: 'Thermal Throttling', definition: 'Redução automática da frequência do SoC ao atingir limite de temperatura para evitar danos', difficulty: 'intermediate' },
      { term: 'Heatpipe', definition: 'Tubo de cobre com fluido que conduz calor de uma ponta à outra (versão simples da vapor chamber)', difficulty: 'intermediate' },
      { term: 'Condutividade térmica', definition: 'Capacidade de um material transferir calor; o cobre é muito superior ao ar', difficulty: 'basic' },
      { term: 'Graphite sheet', definition: 'Camada fina de grafite que espalha calor lateralmente, complementa a vapor chamber', difficulty: 'advanced' }
    ],
    competitiveAdvantages: [
      'Vapor chamber grande sustenta o pico de clock por mais tempo antes de reduzir (throttle)',
      'Evita que o aparelho fique desconfortável de segurar durante sessões longas',
      'Mantém a fluidez em jogos pesados mesmo após 20-30 minutos de uso contínuo',
      'Permite gravação de vídeo 4K/8K sem engasgos por superaquecimento'
    ],
    objectionHandling: [
      {
        objection: 'Mas todos os celulares esquentam...',
        response: 'Esquentar é normal; o que importa é quanto tempo o aparelho aguenta no máximo antes de reduzir a performance. Modelos com vapor chamber grande sustentam jogos no pico por muito mais tempo.',
        evidence: 'Testes de gaming contínuo: aparelhos sem dissipação reduzem o FPS em ~30% após 10-15min; com vapor chamber mantêm 90%+ do desempenho por 30min+'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente gamer e heavy user',
        talkingPoints: [
          'Vapor chamber puxa o calor para longe do chip, sustenta o máximo de FPS por mais tempo',
          'Não esquenta a mão em partidas longas',
          'Gravação de gameplay 4K sem engasgos por thermal throttling'
        ],
        closingStrategy: 'Mostre o aparelho jogando por 15min ao vivo e compare a temperatura e fluidez com um modelo sem dissipação'
      }
    ]
  },

  sensors: {
    componentId: 'sensors',
    learningLayers: {
      fundamentals: [
        'Biometria: impressão digital ultrassônica (3D, funciona com dedo molhado) vs óptica (2D, mais econômica)',
        'Face ID: projeta 30.000 pontos infravermelhos e mapa de profundidade; não é burlado por fotos',
        'Acelerômetro de 3 eixos: mede aceleração linear; aplicações: queda, passos, orientação',
        'Giroscópio de 3 eixos: mede rotação; aplicações: jogos, realidade aumentada, estabilização de vídeo',
        'Bússola (magnetômetro): indica orientação magnética; essencial para navegação e AR',
        'Sensor de proximidade: detecta objeto próximo (ex.: rosto); desliga tela em chamadas'
      ],
      technicalDeepDive: [
        'Ultrassônica: usa ondas sonoras de alta frequência para mapear a superfície do dedo em 3D; resistente a umidade e poeira',
        'Óptica: lê a imagem 2D da digital; sensível a luz solar intensa e umidade; processa no Secure Enclave ou TrustZone',
        'Face ID: infravermelho (IR) + dot projector + câmera IR + sensor de luz ambiente; mapa de profundidade + componentes ativos e passivos',
        'Acelerômetro MEMS: pequeno chip silício com massa suspensa; mede aceleração por capacitância variável',
        'Giroscópio MEMS: estrutura vibrante que detecta movimento de Coriolis; miniaturizado para smartphones (6x6mm)',
        'GPS multi-banda L1+L5: correção de erro ionosférico; precisão de 30cm vs 3-10m do L1-only'
      ],
      commercial: [
        'Flagship premium: ultrassônica + Face ID 3D + giroscópio de alta precisão',
        'Mid-range: óptica + desbloqueio facial 2D + acelerômetro + giroscópio básicos',
        'Entry: impressão digital lateral (capacitiva) + acelerômetro + sensor de proximidade; sem Face ID',
        'Comparativo: ultrassônica vs óptica — diferença perceptível em chuva, academia ou cozinha (dedos molhados/engordurados)'
      ],
      troubleshooting: [
        'Impressão digital não lê: limpar sensor e dedo; verificar se há película grossa ou capa cobrindo o sensor',
        'Face ID falha após atualização: re-calibrar em Configurações; remover capas/adesivos que cobrem sensores IR',
        'Bússola descalibrada: afastar de imãs, alto-falantes e cases metálicas; usar app de calibração girando o aparelho em 8',
        'Tela não apaga na chamada: verificar sensor de proximidade obstruído por capa ou película'
      ]
    },
    analogies: [
      {
        title: 'Cofre Pessoal',
        explanation: 'Biometria é como um cofre que só abre com a sua digital. A ultrassônica mapeia a 3D, como se o cofre tivesse uma câmera que enxerga relevo. A óptica é uma chave de cópia plana — funciona na maioria das vezes, mas não em todas.',
        customerFacing: 'A digital ultrassônica é como um cofre que vê o relevo do seu dedo em 3D. Funciona mesmo se estiver chovendo, suado ou usando um pano de prato na mão. A óptica é a chave de cópia — funciona no dia a dia, mas pode falhar nas condições adversas.'
      }
    ],
    keyTerms: [
      { term: 'Impressão digital ultrassônica', definition: 'Sensor que usa ondas sonoras para mapear a 3D do dedo; mais seguro e resistente a umidade', difficulty: 'basic' },
      { term: 'Impressão digital óptica', definition: 'Sensor que lê a imagem 2D da digital; mais econômica mas sensível a condições adversas', difficulty: 'basic' },
      { term: 'Face ID 3D', definition: 'Sistema de reconhecimento facial com projeção de pontos IR e mapa de profundidade; seguro contra fotos/vídeos', difficulty: 'intermediate' },
      { term: 'Acelerômetro', definition: 'Sensor MEMS que mede aceleração linear nos 3 eixos; usado para queda, passos, orientação', difficulty: 'basic' },
      { term: 'Giroscópio', definition: 'Sensor que mede rotação nos 3 eixos; usado em jogos, AR, estabilização', difficulty: 'basic' },
      { term: 'Magnetômetro (bússola)', definition: 'Sensor que mede campo magnético terrestre; usado em navegação e realidade aumentada', difficulty: 'intermediate' },
      { term: 'Secure Enclave / TrustZone', definition: 'Área isolada do processador para armazenar dados biométricos de forma segura', difficulty: 'advanced' },
      { term: 'GPS multi-banda', definition: 'GPS com frequências L1+L5; menor erro ionosférico, precisão de 30cm a 3m', difficulty: 'intermediate' }
    ],
    competitiveAdvantages: [
      'Ultrassônica 3D não é burlada por fotos ou silicone; funciona com dedo molhado',
      'Face ID 3D é mais seguro que desbloqueio facial 2D; usado em bancos e apps financeiros',
      'Giroscópio de alta precisão habilita realidade aumentada e jogos com detecção de movimento real',
      'GPS multi-banda L1+L5 reduz erro de posicionamento em cidades (prédios altos, arranha-céus)'
    ],
    objectionHandling: [
      {
        objection: 'Impressão digital é insegura? Alguém pode clonar?',
        response: 'Ultrassônica 3D mapeia relevo e batimento; é praticamente impossível clonar com silicone ou impressão. Os dados ficam no Secure Enclave, não saem do chip.',
        evidence: 'Testes de segurança mostram que ultrassônica resiste a moldes de silicone 3D impressos; óptica é mais vulnerável'
      },
      {
        objection: 'Face ID não funciona com máscara?',
        response: 'Em máscaras leves funciona; máscaras grossas bloqueiam pontos IR. Nesses casos, o desbloqueio por impressão digital é o fallback imediato.',
        evidence: 'Modelos com Face ID 3D + impressão digital oferecem dois métodos, aumentando acessibilidade'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente que pratica esportes ou trabalha com as mãos molhadas/sujas',
        talkingPoints: [
          'Impressão digital ultrassônica funciona com dedo sujo de areia, molhado de suor ou chuva',
          'Não precisa limpar o dedo ou a tela antes de desbloquear',
          'Em academia ou praia, o desbloqueio é instantâneo sem atrito'
        ],
        closingStrategy: 'Demonstre na loja: passe no sensor com o dedo levemente úmido ou com um pouco de protetor solar'
      },
      {
        scenario: 'Cliente que prioriza segurança e aplicativos financeiros',
        talkingPoints: [
          'Face ID 3D é mais seguro que desbloqueio facial 2D; usado em bancos oficiais',
          'Dados biométricos ficam no Secure Enclave — nem o fabricante acessa',
          'Permite autorizar compras e apps com biometria integrada'
        ],
        closingStrategy: 'Mostre login em app bancário com Face ID, destacando que a digital/não sai do aparelho'
      }
    ]
  },

  connectivity: {
    componentId: 'connectivity',
    learningLayers: {
      fundamentals: [
        '5G é a geração atual: até 10Gbps de velocidade, latência de 1ms, suporte a milhões de dispositivos por km²',
        'Sub-6GHz (1-6GHz): alcance amplo, penetra paredes, velocidade moderada; usada na maioria do mundo',
        'mmWave (24-40GHz): velocidade ultra alta, alcance curto, sensível a obstáculos; usada em estádios e áreas densas',
        'Wi-Fi 7 (802.11be): até 46Gbps, 4x mais rápido que Wi-Fi 6; ideal para AR/VR e streaming 8K',
        'Bluetooth 5.4: LE Audio com menor consumo, suporte a Auracast (áudio broadcast); alcance maior',
        'GPS/GNSS multi-banda L1+L5: precisão de 30cm a 3m; reduz erro em cidades e cânions urbanos'
      ],
      technicalDeepDive: [
        '5G sub-6: usa faixas de 1-6GHz; propagação longa, boa cobertura; velocidade 100Mbps a 1Gbps',
        '5G mmWave: usa faixas de 24GHz+; enlaces pico até 10Gbps, mas alcance ~500m e bloqueio por paredes/chuva/folhas',
        'Wi-Fi 7: 320MHz largura de canal, 4096-QAM, MLO (Multi-Link Operation); menor latência e jitter',
        'Bluetooth 5.4: LE Audio (LC3 codec), Auracast broadcast, menor consumo (~50% vs Bluetooth 5.0)',
        'GNSS multi-banda: GPS (USA) + Galileo (EU) + GLONASS (RUS) + BeiDou (CHN); L1+L5 reduzem ionosfera',
        'USB-C 3.2 (10Gbps): transferência rápida de arquivos grandes, suporte a vídeo 4K/60fps via DP Alt Mode'
      ],
      commercial: [
        'Flagship 2024: 5G mmWave (EUA/China) ou sub-6 (Brasil/Europa) + Wi-Fi 7 + BT 5.4 + GPS L1+L5',
        'Mid-range: 5G sub-6 + Wi-Fi 6/6E + BT 5.3 + GPS L1; ausência de mmWave e Wi-Fi 7',
        'Entry: 4G LTE + Wi-Fi 5 + BT 5.0; sem 5G nativo',
        'Comparativo: Wi-Fi 7 vs Wi-Fi 6 — velocidade 4x maior, menor lag; relevante para streaming 8K e AR'
      ],
      troubleshooting: [
        '5G instável: verificar cobertura da operadora; mmWave cai com obstáculos — normal',
        'Wi-Fi lento: verificar se roteador é Wi-Fi 6/7; distância e paredes reduzem velocidade',
        'Bluetooth com falhas: re sincronizar dispositivo; verificar interferência de micro-ondas e USB 3.0',
        'GPS impreciso: usar área aberta; paredes e teto de concreto bloqueiam sinal; calibrar bússola'
      ]
    },
    analogies: [
      {
        title: 'Rede de Estradas',
        explanation: '5G sub-6 é como uma avenida larga e longa; todo mundo usa, vai a todos os bairros mas não é a mais rápida. mmWave é uma pista de corrida: ultra-rápida, mas curta e com poucas entradas. Wi-Fi 7 é como uma autoestrada privada dentro de casa.',
        customerFacing: 'Pense no 5G como uma rede de estradas. O sub-6 é uma avenida larga que atravessa toda a cidade: todo mundo usa, mas não é a mais rápida. O mmWave é uma pista de corrida: extremamente rápida, mas curta — você precisa estar perto da antena. O Wi-Fi 7 é como uma autoestrada particular dentro da sua casa.'
      }
    ],
    keyTerms: [
      { term: '5G sub-6GHz', definition: 'Faixa de 1-6GHz do 5G; maior alcance, penetra obstáculos, velocidade moderada (até 1Gbps)', difficulty: 'basic' },
      { term: '5G mmWave', definition: 'Faixa de 24-40GHz; velocidade ultra-alta (até 10Gbps), alcance curto, sensível a obstáculos', difficulty: 'intermediate' },
      { term: 'Wi-Fi 7', definition: 'Padrão 802.11be; até 46Gbps, 320MHz, MLO; menor latência, ideal para AR/VR/8K', difficulty: 'advanced' },
      { term: 'Bluetooth 5.4', definition: 'LE Audio com LC3 codec, Auracast broadcast, menor consumo e maior alcance', difficulty: 'intermediate' },
      { term: 'GPS multi-banda L1+L5', definition: 'Dupla frequência; reduz erro ionosférico, precisão de 30cm a 3m em ambientes urbanos', difficulty: 'advanced' },
      { term: 'Auracast', definition: 'Transmissão de ádeo Bluetooth para múltiplos receptores simultaneamente; ideal para guias de turismo e aulas', difficulty: 'intermediate' },
      { term: 'MLO (Multi-Link Operation)', definition: 'Operação multi-enlace do Wi-Fi 7; usa múltiplas bandas/canais simultaneamente', difficulty: 'advanced' }
    ],
    competitiveAdvantages: [
      '5G mmWave oferece velocidade extrema para download/streaming em áreas de cobertura',
      'Wi-Fi 7 reduz latência para jogos online e AR/VR; compatível com roteadores existentes',
      'GPS L1+L5 garante navegação precisa mesmo entre arranha-céus e em vales urbanos',
      'Bluetooth 5.4 LE Audio permite transmitir música para vários fones ao mesmo tempo (Auracast)'
    ],
    objectionHandling: [
      {
        objection: '5G gasta mais bateria que 4G?',
        response: 'mmWave consome mais por alcance curto, mas o SoC moderno gerencia automaticamente a troca entre sub-6 e mmWave. No uso normal, a diferença é mínima.',
        evidence: 'Testes de autonomia: flagships 5G (Snapdragon 8 Gen 3) mantêm 8-10h de tela ligada similar a modelos 4G'
      },
      {
        objection: 'Preciso de Wi-Fi 7 se meu roteador é Wi-Fi 6?',
        response: 'O smartphone se conecta com roteadores mais antigos; Wi-Fi 7 é compatível para trás. Quando você atualizar o roteador, terá velocidade 4x maior sem trocar o aparelho.',
        evidence: 'Wi-Fi 7 é retrocompatível com Wi-Fi 6/6E/5; vantagem de investimento de longo prazo'
      }
    ],
    saleScenarios: [
      {
        scenario: 'Cliente jovem, gamer e heavy streamer',
        talkingPoints: [
          '5G mmWave: download de jogos pesados em minutos, streaming 4K sem buffer',
          'Wi-Fi 7: menor latência em jogos online, suporte a headsets AR/VR',
          'Bluetooth 5.4: transmitir áudio para até 3 fones simultaneamente (Auracast)'
        ],
        closingStrategy: 'Demonstre streaming de jogo 4K e download de app simultaneamente; mostre velocidade real'
      },
      {
        scenario: 'Cliente executivo que viaja e usa GPS',
        talkingPoints: [
          'GPS L1+L5: navegação precisa entre prédios altos sem perder o sinal',
          '5G sub-6: conexão estável em aeroportos e centros urbanos globais',
          'Wi-Fi 7: hotspot estável para reuniões remotas mesmo com múltiplos dispositivos conectados'
        ],
        closingStrategy: 'Use app de navegação em rua com prédios altos; mostre precisão do GPS em tempo real'
      }
    ]
  }
};
