import type { ComponentInfo } from './types';

export const components: ComponentInfo[] = [
  {
    id: 'processor',
    label: 'Processador (SoC)',
    shortDesc: 'O "cérebro" do dispositivo',
    icon: 'Cpu',
    detailTitle: 'Processador (SoC) & Arquitetura',
    intro:
      'O SoC (System on Chip) integra CPU, GPU, NPU (Inteligência Artificial) e modem 5G em um único silício. A litografia atual (3nm ou 4nm) significa transistores menores, oferecendo mais potência com menos consumo de bateria.',
    sections: [
      {
        heading: 'O "Cérebro" do Dispositivo',
        body:
          'O SoC (System on Chip) integra CPU, GPU, NPU (Inteligência Artificial) e modem 5G. A litografia atual (3nm ou 4nm) significa transistores menores, oferecendo mais potência com menos consumo de bateria.',
      },
      {
        heading: 'Arquitetura ARM (big.LITTLE)',
        body:
          'Processadores de smartphones usam arquitetura ARM (RISC), mais eficiente que a x86. A CPU é dividida em núcleos "big" (desempenho) e "LITTLE" (eficiência), alternando conforme a demanda.',
        bullets: [
          'Núcleos BIG (Cortex-X): alta performance para jogos e tarefas pesadas',
          'Núcleos LITTLE (Cortex-A5xx): eficiência para tarefas leves e standby',
          'Big.LITTLE: alternância inteligente entre clusters pelo scheduler',
        ],
      },
      {
        heading: 'GPU, NPU e ISP',
        body:
          'A GPU renderiza jogos e interfaces 3D. A NPU acelera tarefas de IA (reconhecimento de voz, fotografia computacional, tradução em tempo real). O ISP processa os dados brutos do sensor da câmera em tempo real.',
      },
    ],
    specs: {
      title: 'Especificações Típicas de um SoC Flagship',
      rows: [
        { label: 'Processo de fabricação', value: '3nm a 5nm (TSMC / Samsung)' },
        { label: 'Núcleos de CPU', value: '8 núcleos (1+3+4 ou 2+6 big.LITTLE)' },
        { label: 'Frequência máxima', value: '3.0 GHz a 3.8 GHz' },
        { label: 'Cache L3', value: '8 MB a 16 MB' },
        { label: 'NPU TOPS', value: '30 a 70 TOPS (trilhões de operações/s)' },
        { label: 'Transistores', value: '15 a 25 bilhões' },
      ],
    },
    salesPitch:
      'Para o cliente comum: não fale de "nanômetros" ou "GigaHertz". Diga: "Esse processador garante que o celular não vai travar nos seus aplicativos e, por ser de última geração, ele economiza a bateria do aparelho o dia todo."',
  },
  {
    id: 'memory',
    label: 'Memória RAM & Armazenamento',
    shortDesc: 'RAM vs ROM (armazenamento)',
    icon: 'MemoryStick',
    detailTitle: 'Memória RAM & Armazenamento',
    intro:
      'A RAM é a memória de trabalho, usada pelos apps abertos agora. O armazenamento (ROM) é o "cofre" onde ficam guardados os apps, fotos e vídeos.',
    sections: [
      {
        heading: 'RAM vs ROM (Armazenamento)',
        body:
          'A <strong>RAM</strong> (ex.: 8GB, 12GB) é a memória de trabalho, usada pelos apps abertos agora. O <strong>Armazenamento (ROM — ex.: 256GB, 512GB)</strong> é o "cofre" onde ficam guardados os apps, fotos e vídeos.',
      },
      {
        heading: 'Padrões de Velocidade',
        body:
          'Fique atento aos padrões: <strong>LPDDR5X</strong> (RAM mais rápida) e <strong>UFS 4.0</strong> (armazenamento ultraveloz, essencial para abrir apps pesados instantaneamente).',
        bullets: [
          'LPDDR5X: RAM de topo, 8533 Mbps',
          'UFS 4.0: armazenamento ultraveloz',
          'Memória virtual (swap): usada quando a RAM física enche',
        ],
      },
    ],
    specs: {
      title: 'Especificações de Memória e Armazenamento',
      rows: [
        { label: 'RAM', value: '6 / 8 / 12 / 16 GB (LPDDR5X)' },
        { label: 'Armazenamento', value: '128 / 256 / 512 GB (UFS 4.0)' },
        { label: 'Velocidade RAM', value: 'até 8533 Mbps' },
        { label: 'Largura de banda', value: 'até 68,2 GB/s' },
      ],
    },
    salesPitch:
      'Analogia perfeita: a RAM é o tamanho da sua mesa de trabalho. O armazenamento é o tamanho do seu arquivo de gavetas. "Com 12GB de RAM (uma mesa gigante), o senhor(a) pode abrir o WhatsApp, Banco e Instagram ao mesmo tempo sem fechar nada. E com 256GB, nunca mais vai precisar apagar fotos."',
  },
  {
    id: 'cooling',
    label: 'Câmara de Vapor (Resfriamento)',
    shortDesc: 'Dissipação térmica avançada',
    icon: 'Snowflake',
    detailTitle: 'Câmara de Vapor — Dissipação Térmica',
    intro:
      'A Câmara de Vapor (Vapor Chamber) é uma placa de cobre selada com um líquido especial que evapora e condensa para espalhar o calor gerado pelo processador por todo o chassi, resfriando o aparelho rapidamente.',
    sections: [
      {
        heading: 'Dissipação Térmica Avançada',
        body:
          'A Câmara de Vapor (Vapor Chamber) é uma placa de cobre selada com um líquido especial que evapora e condensa para espalhar o calor gerado pelo processador por todo o chassi, resfriando o aparelho rapidamente.',
      },
      {
        heading: 'Por que importa para o desempenho',
        body:
          'Sem dissipação eficiente, o SoC reduz a frequência (thermal throttling) para não queimar, fazendo jogos e vídeos longos engasgarem. A vapor chamber mantém o pico de performance por mais tempo.',
        bullets: [
          'Evita thermal throttling em sessões longas de jogo',
          'Mantém o pico de clock por mais tempo',
          'Distribui o calor por todo o chassi, evita pontos quentes',
        ],
      },
    ],
    specs: {
      title: 'Especificações de Resfriamento',
      rows: [
        { label: 'Tipo', value: 'Vapor Chamber (câmara de vapor)' },
        { label: 'Material', value: 'Cobre + líquido refrigerante selado' },
        { label: 'Função', value: 'Espalhar e dissipar o calor do SoC' },
        { label: 'Benefício', value: 'Sustenta pico de performance sem throttling' },
      ],
    },
    salesPitch:
      'Argumento Gamer/Heavy User: "Sabe quando você joga ou grava vídeos longos e a tela escurece ou o jogo trava porque o celular ferveu? Esse aparelho tem uma câmara de vapor que puxa o calor para longe do chip. Ele entrega o máximo de desempenho sem queimar a sua mão."',
  },
  {
    id: 'display',
    label: 'Tela (OLED/LTPO)',
    shortDesc: 'Contraste infinito e fluidez',
    icon: 'Smartphone',
    detailTitle: 'Tela (OLED/LTPO) & Taxa de Atualização',
    intro:
      'Telas OLED oferecem "preto puro" desligando pixels individuais. A tecnologia LTPO permite variar a taxa de atualização (de 1Hz a 120Hz) dinamicamente, economizando muita bateria ao ler textos estáticos.',
    sections: [
      {
        heading: 'Contraste e LTPO',
        body:
          'Telas OLED oferecem "preto puro" desligando pixels individuais. A tecnologia LTPO permite variar a taxa de atualização (de 1Hz a 120Hz) dinamicamente, economizando muita bateria ao ler textos estáticos.',
      },
      {
        heading: 'Resolução e Densidade (PPI)',
        body:
          'Resoluções como FHD+ (2400x1080) e QHD+ (3200x1440) são comuns. A densidade de pixels (PPI) acima de 400 impede que o olho humano distinga pixels individuais, garantindo texto nítido.',
      },
      {
        heading: 'Vidro de Proteção',
        body:
          'Gorilla Glass Victus 2 resiste a quedas de até 2m em concreto; Ceramic Shield (Apple) é 3x mais resistente que vidro comum; o revestimento oleofóbico repele oleosidade e impressões digitais.',
      },
    ],
    specs: {
      title: 'Especificações Típicas de Display Flagship',
      rows: [
        { label: 'Tecnologia', value: 'LTPO AMOLED / OLED' },
        { label: 'Resolução', value: 'QHD+ (3200×1440) a 4K' },
        { label: 'Taxa de atualização', value: '1Hz a 120Hz (adaptativa)' },
        { label: 'Brilho máximo', value: '2.000 a 4.000 nits (pico)' },
        { label: 'HDR', value: 'HDR10+ / Dolby Vision' },
      ],
    },
    salesPitch:
      'Foque na fluidez e brilho: "Passe o dedo na tela. Percebe como é liso e rápido? São os 120Hz. Além disso, no sol forte da rua, a tela acende muito mais forte (nits de brilho) para você conseguir ler suas mensagens sem fazer sombra com a mão."',
  },
  {
    id: 'camera',
    label: 'Módulo de Câmera',
    shortDesc: 'Sensores e lentes de precisão',
    icon: 'Camera',
    detailTitle: 'Módulo de Câmera & Sensores CMOS',
    intro:
      'Além dos Megapixels, o tamanho do sensor é vital. Sensores maiores captam mais luz (ideal para fotos noturnas). A tecnologia OIS (Estabilização Óptica) move a lente fisicamente para evitar fotos tremidas.',
    sections: [
      {
        heading: 'Sensores e Lentes',
        body:
          'Além dos Megapixels, o <strong>tamanho do sensor</strong> é vital. Sensores maiores captam mais luz (ideal para fotos noturnas). A tecnologia OIS (Estabilização Óptica) move a lente fisicamente para evitar fotos tremidas.',
      },
      {
        heading: 'Pixel Binning',
        body:
          'Tecnologia que agrupa pixels menores (ex.: 9 em 1) para simular um pixel gigante. É assim que câmeras de 100MP ou 200MP tiram fotos excelentes no escuro (gerando arquivos finais de 12MP).',
      },
      {
        heading: 'Sistema Multi-Câmera',
        body:
          'Smartphones modernos usam múltiplas lentes: principal (50–200MP), ultra-angular (12–50MP, 120–140°), telefoto/periscópio (zoom óptico 3x–10x) e ToF/LiDAR (sensor de profundidade).',
      },
    ],
    specs: {
      title: 'Especificações de um Sistema de Câmeras Flagship',
      rows: [
        { label: 'Sensor principal', value: '50 MP, 1/1.3", pixels de 1.2µm' },
        { label: 'Abertura', value: 'f/1.6 a f/4.0 (variável)' },
        { label: 'Estabilização', value: 'OIS + EIS (híbrida)' },
        { label: 'Zoom óptico', value: '3x a 10x (periscópio)' },
        { label: 'Vídeo', value: '8K@30fps, 4K@120fps' },
      ],
    },
    salesPitch:
      'Desmitifique os Megapixels: pergunte "Você gosta de tirar fotos à noite ou em restaurantes com pouca luz?" Se sim, diga: "A lente principal deste celular absorve o dobro de luz que modelos antigos. Você não vai mais precisar usar aquele flash estourado na cara dos seus amigos."',
  },
  {
    id: 'battery',
    label: 'Bateria & Carregamento',
    shortDesc: 'Capacidade vs carregamento rápido',
    icon: 'BatteryCharging',
    detailTitle: 'Bateria & Tecnologias de Carregamento',
    intro:
      'Baterias modernas ficam na faixa de 5000mAh. A grande diferença dos aparelhos premium está na potência do carregador (medida em Watts). Carregamentos acima de 60W geralmente usam arquitetura de bateria de "célula dupla".',
    sections: [
      {
        heading: 'Capacidade vs Carregamento',
        body:
          'Baterias modernas ficam na faixa de 5000mAh. A grande diferença dos aparelhos premium está na potência do carregador (medida em Watts). Carregamentos acima de 60W geralmente usam arquitetura de bateria de "célula dupla".',
      },
      {
        heading: 'Carregamento sem fio e reverso',
        body:
          'Padrão Qi2 (até 50W com alinhamento magnético) e MagSafe. O carregamento reverso (Wireless PowerShare) recarrega acessórios como fones e relógios pelo dorso do aparelho.',
      },
    ],
    specs: {
      title: 'Especificações Típicas de Bateria e Carregamento',
      rows: [
        { label: 'Capacidade', value: '4.000 a 5.500 mAh' },
        { label: 'Carregamento com fio', value: '30W a 240W' },
        { label: 'Carregamento sem fio', value: '15W a 50W (Qi2)' },
        { label: 'Carregamento reverso', value: '5W a 10W' },
        { label: 'Tempo de carga (0–100%)', value: '10 min a 1 hora' },
      ],
    },
    salesPitch:
      'Venda tempo, não miliamperes: "Se você esquecer de carregar o celular à noite, não tem problema. Enquanto você toma banho e se arruma de manhã (15 minutos), o carregador super rápido já coloca energia suficiente para durar até o fim da tarde de trabalho."',
  },
  {
    id: 'nfc',
    label: 'Conectividade (NFC)',
    shortDesc: 'Pagamentos por aproximação',
    icon: 'Wifi',
    detailTitle: 'Conectividade NFC (Near Field Communication)',
    intro:
      'NFC permite pagamentos por aproximação (Google Wallet/Apple Pay) e leitura de tags inteligentes. Funciona a curtas distâncias (até 10 cm) na frequência de 13,56 MHz.',
    sections: [
      {
        heading: 'Comunicação de Campo Próximo',
        body:
          'NFC permite pagamentos por aproximação (Google Wallet/Apple Pay) e leitura de tags inteligentes. Funciona a curtas distâncias (até 10 cm) e opera na frequência de 13,56 MHz.',
      },
      {
        heading: 'Modos de Operação',
        body: 'NFC opera em três modos no smartphone:',
        bullets: [
          'Modo P2P: troca de dados entre dois dispositivos',
          'Modo Leitor/Escritor: o celular lê ou escreve em tags NFC passivas',
          'Modo Cartão (HCE): o celular age como cartão de transporte/banco',
        ],
      },
    ],
    specs: {
      title: 'Especificações do NFC',
      rows: [
        { label: 'Frequência', value: '13,56 MHz' },
        { label: 'Alcance', value: 'até 10 cm' },
        { label: 'Velocidade', value: '106 / 212 / 424 kbps' },
        { label: 'Padrão', value: 'ISO/IEC 14443, ISO/IEC 18092' },
        { label: 'Segurança', value: 'Elemento Seguro (SE) + HCE + tokenização' },
      ],
    },
    salesPitch:
      'Gatilho de conveniência e segurança: "Nunca mais ande com carteira cheia na rua. O NFC permite cadastrar seu cartão de crédito com segurança criptografada (nem a loja vê seu número). É só aproximar o celular da maquininha."',
  },
  {
    id: 'durability',
    label: 'Durabilidade (IP Rating)',
    shortDesc: 'Certificações de água e poeira',
    icon: 'Shield',
    detailTitle: 'Durabilidade: Resistência e Certificações IP',
    intro:
      'O padrão IPXY indica proteção contra poeira e água. IP64 (respingos e chuva leve), IP68 (submersão em água doce até 1.5m) e IP69K (jatos de alta pressão).',
    sections: [
      {
        heading: 'Certificações IP',
        body:
          'O padrão IPXY indica proteção contra poeira (1º dígito) e água (2º dígito). IP64 (respingos e chuva leve), IP67 (submersão até 1m por 30min), IP68 (submersão em água doce até 1.5m) e IP69K (jatos de alta pressão).',
        bullets: [
          'IP64: 100% à prova de poeira + respingos de qualquer direção',
          'IP67: submersão até 1m por 30 minutos em água doce',
          'IP68: submersão contínua além de 1m (padrão dos flagships)',
          'IP69K: jatos de água de alta pressão e alta temperatura',
        ],
      },
      {
        heading: 'Testes Militares MIL-STD-810H',
        body:
          'Além das certificações IP, dispositivos podem passar por testes MIL-STD-810H: quedas repetidas de 1.5m, vibração, choque térmico, neblina salina e altitudes extremas.',
      },
    ],
    specs: {
      title: 'Materiais de Proteção Comuns',
      rows: [
        { label: 'Estrutura', value: 'Titânio / Alumínio série 7000' },
        { label: 'Vidro', value: 'Gorilla Glass Victus 2 / Ceramic Shield' },
        { label: 'Certificação típica', value: 'IP68 (flagships)' },
        { label: 'Resistência a queda', value: 'até 2m (Gorilla Glass Victus 2)' },
      ],
    },
    comparison: {
      title: 'Comparativo de Certificações IP',
      headers: ['Certificação', 'Poeira', 'Água', 'Uso Recomendado'],
      rows: [
        { label: 'IP64', values: ['Total (6)', 'Respingos (4)', 'Respingos e chuva leve'] },
        { label: 'IP67', values: ['Total (6)', 'Imersão 1m / 30min (7)', 'Uso cotidiano seguro, mergulhos breves'] },
        { label: 'IP68', values: ['Total (6)', 'Imersão 1.5m+ / 30min+ (8)', 'Piscina, chuva, uso agressivo'] },
        { label: 'IP69K', values: ['Total (6)', 'Jatos alta pressão/temperatura (9K)', 'Ambientes industriais, lavagem'] },
      ],
    },
    salesPitch:
      'Venda a tranquilidade (paz de espírito): "Este modelo tem IP68. O que isso significa para o senhor? Se tomar uma chuva forte esperando o Uber, ou se acidentalmente derrubar o aparelho na pia da cozinha ou na borda da piscina, seu investimento não será perdido. O aparelho sobrevive."',
  },
  {
    id: 'sensors',
    label: 'Sensores & Biometria',
    shortDesc: 'Impressão digital, Face ID, acelerômetro',
    icon: 'Fingerprint',
    detailTitle: 'Sensores & Biometria',
    intro:
      'Os smartphones combinam sensores físicos e biometria para segurança e usabilidade. Impressão digital (ultrassônica/óptica), reconhecimento facial, acelerômetro, giroscópio e bússola são diferenciais que impactam diretamente a experiência.',
    sections: [
      {
        heading: 'Biometria',
        body:
          'Impressão digital ultrassônica (lê a 3D do dedo, funciona com dedo molhado e sob luz solar) e óptica (lê a 2D, mais barata, pode falhar com umidade). Face ID usa projeção de pontos infravermelhos e mapa de profundidade.',
        bullets: [
          'Ultrassônica (ex.: Samsung): mais segura, funciona embaixo d\'água, não cega com luz solar',
          'Óptica (ex.: alguns Xiaomi/Redmi): mais econômica, mas menos confiável em condições adversas',
          'Face ID (Apple): sensores IR + dot projector + câmera IR + ambient light sensor -desbloqueio 3D seguro',
        ],
      },
      {
        heading: 'Sensores de Movimento e Posicionamento',
        body:
          'Acelerômetro mede aceleração linear (passos, queda, orientação). Giroscópio mede rotação nos 3 eixos (jogos, estabilização de vídeo, realidade aumentada). Bússola (magnetômetro) indica norte magnético.',
        bullets: [
          'Acelerômetro + Giroscópio: usados em jogos, estabilização de vídeo (OIS híbrido), contagem de passos',
          'Bússola (magnetômetro): navegação, realidade aumentada (Google Maps, Pokémon GO)',
          'Sensor de proximidade: desliga tela no rosto durante chamadas',
          'Sensor de luz ambiente: ajusta brilho automaticamente',
        ],
      },
    ],
    specs: {
      title: 'Sensores e Biometria',
      rows: [
        { label: 'Impressão digital', value: 'Ultrassônica (3D) ou Óptica (2D)' },
        { label: 'Reconhecimento facial', value: 'Face ID (IR + dot projector) ou desbloqueio facial 2D' },
        { label: 'Acelerômetro', value: '3 eixos (X, Y, Z), até 16g' },
        { label: 'Giroscópio', value: '3 eixos, até 2000°/s' },
        { label: 'Bússola', value: 'Magnetômetro de 3 eixos' },
        { label: 'Sensor de proximidade', value: 'Infravermelho/capacitivo' },
      ],
    },
    salesPitch:
      'Argumento de conveniência e segurança: "A impressão digital ultrassônica funciona mesmo se o dedo estiver molhado ou sujo. E o reconhecimento facial 3D não é burlado por fotos — é o mesmo nível de segurança dos bancos."',
  },
  {
    id: 'connectivity',
    label: 'Conectividade Ampliada',
    shortDesc: '5G, Wi-Fi 7, Bluetooth 5.4, GPS',
    icon: 'Radio',
    detailTitle: 'Conectividade Ampliada (5G, Wi-Fi, Bluetooth, GPS)',
    intro:
      'Além do NFC, smartphones modernos oferecem conectividade avançada: 5G (sub-6 e mmWave), Wi-Fi 7, Bluetooth 5.4 e GPS/GNSS de alta precisão. Essas tecnologias impactam velocidade de download, estabilidade de chamadas e experiência em jogos.',
    sections: [
      {
        heading: '5G — sub-6 vs mmWave',
        body:
          '5G opera em duas faixas: sub-6GHz (maior alcance, penetra obstáculos, velocidade até 1Gbps) e mmWave (ondas milimétricas, velocidade até 10Gbps, alcance curto, sensível a obstáculos).',
        bullets: [
          'Sub-6GHz: ideal para uso urbano, cobertura ampla, bom equilibrio velocidade/alcance',
          'mmWave: velocidade extrema, mas alcance limitado a ~500m e bloqueado por paredes/chuva',
          'Smartphones flagships (EUA/China) priorizam mmWave; mercados emergentes focam sub-6',
        ],
      },
      {
        heading: 'Wi-Fi 7 e Bluetooth 5.4',
        body:
          'Wi-Fi 7 (802.11be) era até 4x mais rápido que Wi-Fi 6, atenuação de interferência e menor latência. Bluetooth 5.4 traz LE Audio, Auracast e melhor alcance.',
        bullets: [
          'Wi-Fi 7: até 46 Gbps (vs 9.6 Gbps do Wi-Fi 6), ideal para AR/VR e streaming 8K',
          'Bluetooth 5.4: LE Audio com menor consumo, suporte a Auracast (transmissão de áudio para múltiplos dispositivos)',
          'GPS/GNSS multi-banda (L1+L5): precisão de 30cm a 3m, melhor que só L1 (3-10m)',
        ],
      },
    ],
    specs: {
      title: 'Conectividade Ampliada',
      rows: [
        { label: '5G', value: 'Sub-6GHz + mmWave (dependendo do mercado)' },
        { label: 'Wi-Fi', value: 'Wi-Fi 7 (802.11be), 2.4/5/6 GHz' },
        { label: 'Bluetooth', value: '5.4 com LE Audio e Auracast' },
        { label: 'GPS/GNSS', value: 'Multi-banda (L1+L5), precisão de 30cm a 3m' },
        { label: 'USB', value: 'USB-C 3.2 (10 Gbps) ou USB 2.0' },
      ],
    },
    salesPitch:
      'Argumento de velocidade e futuro: "Com Wi-Fi 7 e 5G mmWave, você baixa filmes em segundos e joga online sem lag. Bluetooth 5.4 permite que várias pessoas ouçam a mesma música em fones diferentes — ideal para festas."',
  },
];
