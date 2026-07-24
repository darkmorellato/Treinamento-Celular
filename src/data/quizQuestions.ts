import type { ComponentId } from './types';

export interface QuizQuestion {
  id: string;
  componentId: ComponentId;
  question: string;
  options: string[];
  correctIndex: number;
}

export function getRandomQuizQuestions(count: number): QuizQuestion[] {
  const pool = [...QUIZ_BANK];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const selected = pool.slice(0, Math.min(count, pool.length));

  return selected.map((q) => {
    const correctText = q.options[q.correctIndex];
    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: shuffled,
      correctIndex: shuffled.indexOf(correctText),
    };
  });
}

const TECHNICAL_QUESTIONS: QuizQuestion[] = [
  // processor
  { id: 'processor-1', componentId: 'processor', question: 'O que é um SoC (System on Chip)?', options: ['Um único chip que integra CPU, GPU, NPU e modem 5G', 'Um chip apenas para a CPU', 'Um sistema operacional', 'Um tipo de memória RAM'], correctIndex: 0 },
  { id: 'processor-2', componentId: 'processor', question: 'Qual arquitetura é predominante em smartphones?', options: ['x86', 'ARM', 'MIPS', 'PowerPC'], correctIndex: 1 },
  { id: 'processor-3', componentId: 'processor', question: 'O que significa litografia 3nm versus 7nm?', options: ['Transistores maiores e mais lentos', 'Transistores menores, mais potência e menor consumo', 'Apenas para CPUs de desktop', 'Aumenta o clock sem efeito em consumo'], correctIndex: 1 },
  { id: 'processor-4', componentId: 'processor', question: 'O que é o NPU no SoC?', options: ['Unidade Neural para acelerar IA/ML', 'Novo padrão de USB', 'Controlador de energia', 'Controlador de armazenamento'], correctIndex: 0 },
  { id: 'processor-5', componentId: 'processor', question: 'O modem 5G integrado no SoC:', options: ['É um componente separado do processador', 'Permite conexão 5G no mesmo chip', 'Apenas amplifica sinal 4G', 'Substitui o Wi-Fi'], correctIndex: 1 },
  { id: 'processor-6', componentId: 'processor', question: 'Qual o papel principal do ISP?', options: ['Processar imagem do sensor da câmera', 'Gerenciar rede neural', 'Controlar brilho', 'Regular voltagem'], correctIndex: 0 },

  // memory
  { id: 'memory-1', componentId: 'memory', question: 'Qual a principal diferença entre RAM e ROM?', options: ['RAM é volátil e rápida; ROM armazena permanentemente', 'São a mesma coisa', 'ROM é mais rápida que RAM', 'RAM armazena fotos'], correctIndex: 0 },
  { id: 'memory-2', componentId: 'memory', question: 'O que significa LPDDR5X?', options: ['Tipo de SSD', 'Geração de RAM com até 8533 Mbps', 'Padrão de bateria', 'Tipo de processador'], correctIndex: 1 },
  { id: 'memory-3', componentId: 'memory', question: 'O que é UFS 4.0?', options: ['Padrão de armazenamento ultrarrápido', 'Tipo de RAM', 'Frequência 5G', 'Padrão de carregamento sem fio'], correctIndex: 0 },
  { id: 'memory-4', componentId: 'memory', question: 'O que é memória virtual (swap)?', options: ['Parte da ROM usada como RAM extra quando a RAM cheia', 'Armazenamento físico extra', 'Cache do processador', 'Memória de vídeo'], correctIndex: 0 },
  { id: 'memory-5', componentId: 'memory', question: 'Qual a unidade de largura de banda da RAM?', options: ['GB/s', 'MHz', 'mA', 'TOPS'], correctIndex: 0 },
  { id: 'memory-6', componentId: 'memory', question: '16GB de RAM beneficia principalmente:', options: ['Multitarefa pesada e apps em segundo plano', 'Resolução da câmera', 'Brilho da tela', 'Carregamento sem fio'], correctIndex: 0 },

  // cooling
  { id: 'cooling-1', componentId: 'cooling', question: 'O que é uma Câmara de Vapor?', options: ['Sistema de refrigeração a ar', 'Placa de cobre selada com líquido que espalha calor', 'Pasta térmica', 'Fan cooler'], correctIndex: 1 },
  { id: 'cooling-2', componentId: 'cooling', question: 'O que é thermal throttling?', options: ['Redução da frequência do SoC por excesso de temperatura', 'Aumento do clock para jogos', 'Sistema de carregamento rápido', 'Modo de economia'], correctIndex: 0 },
  { id: 'cooling-3', componentId: 'cooling', question: 'Por que dissipador térmico é importante em jogos longos?', options: ['Mantém pico de performance sem queda de FPS', 'Deixa o celular mais leve', 'Aumenta o brilho', 'Melhora a câmera'], correctIndex: 0 },
  { id: 'cooling-4', componentId: 'cooling', question: 'Qual material é mais comum nas câmaras de vapor?', options: ['Cobre', 'Alumínio', 'Plástico', 'Ferro'], correctIndex: 0 },
  { id: 'cooling-5', componentId: 'cooling', question: 'Uma capa grossa do celular pode:', options: ['Dificultar a dissipação térmica', 'Melhorar resfriamento', 'Aumentar autonomia diretamente', 'Aumentar velocidade do 5G'], correctIndex: 0 },
  { id: 'cooling-6', componentId: 'cooling', question: 'Grafite sheets complementam a vapor chamber:', options: ['Sim, espalham calor lateralmente', 'Não, é um sistema de carregamento', 'Apenas em notebooks', 'Substituem a bateria'], correctIndex: 0 },

  // display
  { id: 'display-1', componentId: 'display', question: 'OLED com preto verdadeiro funciona porque:', options: ['Pixels desligam individualmente', 'Usa backlight forte', 'LCD invertido', 'Substitui a GPU'], correctIndex: 0 },
  { id: 'display-2', componentId: 'display', question: 'Qual a taxa de atualização adaptativa em displays LTPO?', options: ['1Hz a 120Hz', '60Hz fixo', '240Hz fixo', '500Hz'], correctIndex: 0 },
  { id: 'display-3', componentId: 'display', question: 'O que é Gorilla Glass Victus 2?', options: ['Vidro de proteção resistente a quedas de até 2m', 'Tipo de LCD', 'Bateria de polímero', 'Pasta térmica'], correctIndex: 0 },
  { id: 'display-4', componentId: 'display', question: 'O que significa PPI?', options: ['Densidade de pixels por polegada', 'Unidade de brilho', 'Frequência de atualização', 'Largura de banda'], correctIndex: 0 },
  { id: 'display-5', componentId: 'display', question: 'HDR10+ melhora o HDR10 por:', options: ['Metadados dinâmicos cena a cena', 'É mais antigo', 'Apenas resolução', 'Sem cor'], correctIndex: 0 },
  { id: 'display-6', componentId: 'display', question: 'Burn-in no OLED ocorre por:', options: ['Uso prolongado de elementos estáticos na mesma posição', 'Queda da tela', 'Excesso de brilho', 'Mudança de resolução'], correctIndex: 0 },

  // camera
  { id: 'camera-1', componentId: 'camera', question: 'Sensor maior captura:', options: ['Mais luz, melhorando fotos noturnas', 'Mais pixels, mas menos luz', 'Menos detalhe', 'Mais armazenamento consumido'], correctIndex: 0 },
  { id: 'camera-2', componentId: 'camera', question: 'O que é OIS?', options: ['Estabilização Óptica que move a lente fisicamente', 'Zoom Digital', 'Estabilização Eletrônica', 'Sensor infravermelho'], correctIndex: 0 },
  { id: 'camera-3', componentId: 'camera', question: 'Pixel Binning 4 em 1 gera:', options: ['Super-pixel com maior sensibilidade noturna', 'Mais ruído', 'Resolução menor sempre', 'Vídeo lento'], correctIndex: 0 },
  { id: 'camera-4', componentId: 'camera', question: 'Zoom óptico 10x é melhor que zoom digital porque:', options: ['Mantém nitidez sem cortar pixels', 'Usa IA para ampliar', 'É mais barato', 'Consome menos bateria'], correctIndex: 0 },
  { id: 'camera-5', componentId: 'camera', question: 'Qual abertura captura mais luz?', options: ['f/1.5', 'f/4.0', 'f/8', 'f/16'], correctIndex: 0 },
  { id: 'camera-6', componentId: 'camera', question: 'Periscope zoom usa:', options: ['Espelhos e lentes perpendiculares para zoom longo', 'Lentes comuns', 'IA', 'Macro'], correctIndex: 0 },

  // battery
  { id: 'battery-1', componentId: 'battery', question: 'Qual a faixa típica de bateria em flagships?', options: ['4000-5500 mAh', '1000-2000 mAh', '8000+ mAh', '100 mAh'], correctIndex: 0 },
  { id: 'battery-2', componentId: 'battery', question: 'O que é Qi2?', options: ['Padrão de carregamento sem fio com alinhamento magnético', 'Cabo USB-C', 'Carregador de 5W', 'Tipo de bateria'], correctIndex: 0 },
  { id: 'battery-3', componentId: 'battery', question: 'Carregamento reverso permite:', options: ['Recarregar acessórios como fones pelo dorso', 'Recarregar outro celular por cabo', 'Carregar mais rápido', 'Aumentar mAh'], correctIndex: 0 },
  { id: 'battery-4', componentId: 'battery', question: 'Um ciclo de carga completo é:', options: ['Descarregar 100% até 0% ou equivalente', 'Carregar 5 minutos', 'Desligar o celular', 'Atualizar sistema'], correctIndex: 0 },
  { id: 'battery-5', componentId: 'battery', question: 'Carregamento de até 240W geralmente usa:', options: ['Arquitetura de bateria de célula dupla', 'Qi1', 'Indução simples', 'USB 2.0'], correctIndex: 0 },
  { id: 'battery-6', componentId: 'battery', question: 'Qual condição preserva mais a bateria a longo prazo?', options: ['Carregar até 80-90% e evitar descargas profundas', 'Sempre carregar a 100%', 'Deixar chegar a 0% sempre', 'Deixar no freezer'], correctIndex: 0 },

  // nfc
  { id: 'nfc-1', componentId: 'nfc', question: 'Qual a distância máxima típica do NFC?', options: ['Até 10 cm', 'Até 10 m', 'Até 100 m', 'Até 1 km'], correctIndex: 0 },
  { id: 'nfc-2', componentId: 'nfc', question: 'Em qual frequência o NFC opera?', options: ['13.56 MHz', '125 kHz', '900 MHz', '2.4 GHz'], correctIndex: 0 },
  { id: 'nfc-3', componentId: 'nfc', question: 'Qual modo permite usar o celular como cartão de transporte?', options: ['Card Emulation (HCE/SE)', 'P2P', 'Reader', 'Bluetooth'], correctIndex: 0 },
  { id: 'nfc-4', componentId: 'nfc', question: 'O que é um Elemento Seguro (SE)?', options: ['Chip dedicado para chaves criptográficas', 'Senha do usuário', 'App de banco', 'Firewall'], correctIndex: 0 },
  { id: 'nfc-5', componentId: 'nfc', question: 'NFC pode ser usado para:', options: ['Pagamentos contactless, tags e abertura de portas', 'Wi-Fi', 'GPS', 'Micro-ondas'], correctIndex: 0 },
  { id: 'nfc-6', componentId: 'nfc', question: 'Por que NFC é mais seguro que Bluetooth para pagamentos?', options: ['Alcance curto limita ataques remotos', 'É sempre criptografado; Bluetooth nunca é', 'Usa senha numérica', 'Funciona offline'], correctIndex: 0 },

  // durability
  { id: 'durability-1', componentId: 'durability', question: 'O que significa IP68?', options: ['Proteção total contra poeira e imersão >1m em água doce', 'Respingos leves', 'Jatos de alta pressão', 'À prova de poeira apenas'], correctIndex: 0 },
  { id: 'durability-2', componentId: 'durability', question: 'O que é MIL-STD-810H?', options: ['Norma de testes militares de resistência', 'Padrão de bateria', 'Norma de carregamento', 'Tipo de vidro'], correctIndex: 0 },
  { id: 'durability-3', componentId: 'durability', question: 'Qual vidro resiste a queda de até 2m em concreto?', options: ['Gorilla Glass Victus 2', 'Gorilla Glass 3', 'Vidro comum', 'Ceramic Shield'], correctIndex: 0 },
  { id: 'durability-4', componentId: 'durability', question: 'Qual material reduz peso em ~15% versus alumínio?', options: ['Titânio', 'Aço', 'Plástico', 'Cobre'], correctIndex: 0 },
  { id: 'durability-5', componentId: 'durability', question: 'IP69K é mais voltado para:', options: ['Ambientes industriais / jatos de alta pressão', 'Uso doméstico', 'Dia a dia urbano', 'Uso aeroespacial'], correctIndex: 0 },
  { id: 'durability-6', componentId: 'durability', question: 'Qual certificação cobre quedas repetidas e choque térmico?', options: ['MIL-STD-810H', 'IP68', 'Qi2', 'UFS'], correctIndex: 0 },

  // sensors
  { id: 'sensors-1', componentId: 'sensors', question: 'Qual sensor usa ondas sonoras para mapear digital em 3D?', options: ['Impressão digital ultrassônica', 'Impressão digital óptica', 'Face ID', 'Acelerômetro'], correctIndex: 0 },
  { id: 'sensors-2', componentId: 'sensors', question: 'Face ID usa projeção de pontos:', options: ['Infravermelhos (IR)', 'Ultravioleta', 'Laser visível', 'Micro-ondas'], correctIndex: 0 },
  { id: 'sensors-3', componentId: 'sensors', question: 'Qual sensor mede aceleração linear e detecta quedas?', options: ['Acelerômetro', 'Giroscópio', 'Bússola', 'NFC'], correctIndex: 0 },
  { id: 'sensors-4', componentId: 'sensors', question: 'Qual sensor mede rotação nos 3 eixos?', options: ['Giroscópio', 'Acelerômetro', 'Proximidade', 'Luz ambiente'], correctIndex: 0 },
  { id: 'sensors-5', componentId: 'sensors', question: 'A bússola digital usa qual sensor?', options: ['Magnetômetro', 'Acelerômetro', 'Giroscópio', 'Ultrassônico'], correctIndex: 0 },
  { id: 'sensors-6', componentId: 'sensors', question: 'Para que serve o sensor de proximidade?', options: ['Desligar tela quando o rosto está próximo', 'Medir passos', 'Focar câmera', 'Medir luz ambiente'], correctIndex: 0 },

  // connectivity
  { id: 'connectivity-1', componentId: 'connectivity', question: '5G mmWave x sub-6: qual tem maior velocidade e menor alcance?', options: ['mmWave', 'sub-6', 'São iguais', '4G LTE'], correctIndex: 0 },
  { id: 'connectivity-2', componentId: 'connectivity', question: 'Qual a velocidade pico teórica do mmWave?', options: ['Até 10Gbps', 'Até 1Gbps', 'Até 100Mbps', 'Até 46Gbps'], correctIndex: 0 },
  { id: 'connectivity-3', componentId: 'connectivity', question: 'Qual novidade o Bluetooth 5.4 traz?', options: ['LE Audio e Auracast', 'Apenas mais alcance', 'Conexão com TV', 'Wi-Fi Direto'], correctIndex: 0 },
  { id: 'connectivity-4', componentId: 'connectivity', question: 'O que é Auracast?', options: ['Transmissão de áudio broadcast para múltiplos dispositivos', 'Wi-Fi 7', '5G', 'Realidade Aumentada'], correctIndex: 0 },
  { id: 'connectivity-5', componentId: 'connectivity', question: 'GPS L1+L5 oferece:', options: ['Maior precisão em cidades (~30cm a 3m)', 'Menor precisão', 'Funciona só dentro de casa', 'Somente 1 satélite'], correctIndex: 0 },
  { id: 'connectivity-6', componentId: 'connectivity', question: 'Qual protocolo USB-C permite vídeo 4K/60fps?', options: ['DP Alt Mode', 'OTG', 'USB-PD', 'UFS'], correctIndex: 0 },
];

const SALES_QUESTIONS: QuizQuestion[] = [
  // processor sales
  { id: 'processor-sales-1', componentId: 'processor', question: 'Venda: como explicar benefício do 3nm para um cliente comum?', options: ['Menor consumo e mais velocidade sem falar de GHz', 'Fale apenas de "nanômetros"', 'Diga que é o processador mais caro', 'Aponte que é igual a qualquer outro'], correctIndex: 0 },
  { id: 'processor-sales-2', componentId: 'processor', question: 'Venda: qual dor o processador de última geração resolve?', options: ['Celular travar com muitos apps abertos', 'Preço alto', 'Peso do aparelho', 'Cor da tela'], correctIndex: 0 },
  { id: 'processor-sales-3', componentId: 'processor', question: 'Venda: argumento de ciclo de vida para processador topo de linha é:', options: ['Investimento protegido por 4+ anos de fluidez', 'Vai ficar obsoleto em 6 meses', 'Apenas para jogos', 'Reduz garantia'], correctIndex: 0 },
  { id: 'processor-sales-4', componentId: 'processor', question: 'Venda: quando o cliente acha que "não precisa de tanta potência", você diz:', options: ['Mais potência garante fluidez por mais tempo e melhor câmera', 'Ele está certo, compre o básico', 'Deixe para comprar upgrade em 1 ano', 'Potência não importa'], correctIndex: 0 },
  { id: 'processor-sales-5', componentId: 'processor', question: 'Venda: diferença entre marca X e Y deve ser comparada por:', options: ['Processo de fabricação (nm) e TOPS da NPU', 'Apenas nome comercial', 'Cor do celular', 'Preço sempre igual'], correctIndex: 0 },
  { id: 'processor-sales-6', componentId: 'processor', question: 'Venda: caso de uso ideal para processador flagship é:', options: ['Cliente que joga, grava e quer durar anos', 'Somente para ligações', 'Cliente que troca de celular a cada 6 meses', 'Uso como calculadora'], correctIndex: 0 },

  // memory sales
  { id: 'memory-sales-1', componentId: 'memory', question: 'Venda: analogia RAM mesa de trabalho funciona para:', options: ['Mostrar que mais RAM = mais apps abertos sem recarregar', 'Explicar que RAM afeta brilho da tela', 'Ensinar cliente a limpar a mesa física', 'Aumentar armazenamento automaticamente'], correctIndex: 0 },
  { id: 'memory-sales-2', componentId: 'memory', question: 'Venda: quando um app recarrega ao voltar, significa:', options: ['RAM insuficiente, recomendamos mais RAM', 'Armazenamento cheio', 'Bateria baixa', 'Processador quebrado'], correctIndex: 0 },
  { id: 'memory-sales-3', componentId: 'memory', question: 'Venda: LPDDR5X deve ser comunicado como:', options: ['Mais velocidade e menos consumo para multitarefa', 'Sem diferença prática', 'Apenas número de marketing', 'Apenas para jogos'], correctIndex: 0 },
  { id: 'memory-sales-4', componentId: 'memory', question: 'Venda: resposta para "preciso de mais espaço para fotos" deve diferenciar:', options: ['RAM vs armazenamento (ROM) e sugerir capacidade adequada', 'Vender sempre 1TB', 'Dizer que RAM guarda fotos', 'Oferecer cartão microSD sempre'], correctIndex: 0 },
  { id: 'memory-sales-5', componentId: 'memory', question: 'Venda: UFS 4.0 impacta diretamente a experiência em:', options: ['Abrir apps pesados e gravação de vídeo', 'Brilho da tela', 'Cor da capa', 'Peso corporal'], correctIndex: 0 },
  { id: 'memory-sales-6', componentId: 'memory', question: 'Venda: para quem 8GB de RAM é suficiente?', options: ['Uso comum de redes sociais e mensageria', 'Edição de vídeo 8K', 'Gaming pesado com 20 apps abertos', 'Todos os perfis'], correctIndex: 0 },

  // cooling sales
  { id: 'cooling-sales-1', componentId: 'cooling', question: 'Venda: thermal throttling deve ser explicado como:', options: ['Queda de desempenho porque o celular esquenta', 'Aumento automático de brilho', 'Modo de economia de energia', 'Carregamento mais rápido'], correctIndex: 0 },
  { id: 'cooling-sales-2', componentId: 'cooling', question: 'Venda: vantagem tangível da vapor chamber para gamer:', options: ['Mantém FPS alto em sessões longas sem esquentar a mão', 'Mais pixels na tela', 'Bateria infinita', 'Cores mais vivas'], correctIndex: 0 },
  { id: 'cooling-sales-3', componentId: 'cooling', question: 'Venda: objeção "todos os celulares esquentam" deve ser respondida com:', options: ['Importante é quanto tempo sustenta o pico antes de cair', 'Esquentar é sempre defeito', 'Beba água enquanto joga', 'Use Wi-Fi para esfriar'], correctIndex: 0 },
  { id: 'cooling-sales-4', componentId: 'cooling', question: 'Venda: para um heavy user, o argumento térmico importa porque:', options: ['Mantém performance em gravações 4K e gaming', 'Deixa o celular mais leve', 'Afeta apenas a câmera', 'Muda a cor da capa'], correctIndex: 0 },
  { id: 'cooling-sales-5', componentId: 'cooling', question: 'Venda: vapor chamber é diferente de pasta térmica porque:', options: ['Espalha calor por todo o chassi, não apenas ponto local', 'É mais barata', 'Substitui a bateria', 'Funciona só em notebooks'], correctIndex: 0 },
  { id: 'cooling-sales-6', componentId: 'cooling', question: 'Venda: demonstração prática de resfriamento pode ser feita:', options: ['Jogando 15min ao vivo e comparando temperatura/FPS', 'Medindo apenas peso', 'Olhando a cor do telefone', 'Verificando o brilho máximo'], correctIndex: 0 },

  // display sales
  { id: 'display-sales-1', componentId: 'display', question: 'Venda: argumento OLED deve focar em:', options: ['Contraste infinito e pretos verdadeiros', 'Apenas resolução 4K', 'Peso da tela', 'Espessura do celular'], correctIndex: 0 },
  { id: 'display-sales-2', componentId: 'display', question: 'Venda: LTPO ajuda a vender porque:', options: ['Economiza bateria e mantém fluidez', 'Apenas estética', 'Aumenta peso', 'Substitui GPU'], correctIndex: 0 },
  { id: 'display-sales-3', componentId: 'display', question: 'Venda: 120Hz deve ser demonstrado em:', options: ['Rolagem de redes sociais e jogos', 'Apenas textinho', 'Fotos paradas', 'Gravação de áudio'], correctIndex: 0 },
  { id: 'display-sales-4', componentId: 'display', question: 'Venda: Gorilla Glass Victus 2 protege contra:', options: ['Quedas diárias de até 2m', 'Apenas arranhões leves', 'Água exclusivamente', '5G'], correctIndex: 0 },
  { id: 'display-sales-5', componentId: 'display', question: 'Venda: burn-in no OLED deve ser tranquilizado dizendo que:', options: ['Ocorre com elementos estáticos por horas; uso normal não causa', 'É impossível evitar', 'Acontece em 1 semana', 'Apenas em LCD'], correctIndex: 0 },
  { id: 'display-sales-6', componentId: 'display', question: 'Venda: nits de brilho são importantes para:', options: ['Legibilidade sob sol direto', 'Gravar vídeo no escuro', 'Economizar bateria', 'Aumentar RAM'], correctIndex: 0 },

  // camera sales
  { id: 'camera-sales-1', componentId: 'camera', question: 'Venda: desmistificar megapixels focando em:', options: ['Tamanho do sensor e pixel, não apenas número', '200MP sempre é melhor', 'Apenas zoom digital', 'Sem diferença prática'], correctIndex: 0 },
  { id: 'camera-sales-2', componentId: 'camera', question: 'Venda: OIS deve ser demonstrado como:', options: ['Fotos e vídeos sem tremor, mesmo andando', 'Apenas zoom digital', 'Mais armazenamento', 'Brilho automático'], correctIndex: 0 },
  { id: 'camera-sales-3', componentId: 'camera', question: 'Venda: periscope zoom é ideal para:', options: ['Fotos de longe sem perder nitidez', 'Selfies', 'Gravação de áudio', 'Apenas macro'], correctIndex: 0 },
  { id: 'camera-sales-4', componentId: 'camera', question: 'Venda: sensor grande + abertura f/1.5 beneficia:', options: ['Fotos noturnas e ambientes com pouca luz', 'Apenas vídeos longos', 'Jogos', 'Bateria'], correctIndex: 0 },
  { id: 'camera-sales-5', componentId: 'camera', question: 'Venda: caso prático de câmera flagship para cliente jovem:', options: ['Stories, vídeos para redes, fotos noturnas', 'Apenas chamadas de vídeo', 'Documentos扫描', 'Código QR'], correctIndex: 0 },
  { id: 'camera-sales-6', componentId: 'camera', question: 'Venda: vídeo 4K/60fps com HDR10+ vende como:', options: ['Qualidade profissional para criadores de conteúdo', 'Apenas para chamadas', 'Sem vantagem', 'Substituto da câmera profissional'], correctIndex: 0 },

  // battery sales
  { id: 'battery-sales-1', componentId: 'battery', question: 'Venda: argumento de bateria deve focar em:', options: ['Tempo de uso real, não apenas mAh', 'Apenas número de mAh', 'Carregamento sempre lento', 'Qi1 é sempre melhor'], correctIndex: 0 },
  { id: 'battery-sales-2', componentId: 'battery', question: 'Venda: 120W de carregamento rápido vale para:', options: ['15 min de carga para o dia todo', 'Carregar apenas durante a noite', 'Não faz diferença', 'Apenas se for sem fio'], correctIndex: 0 },
  { id: 'battery-sales-3', componentId: 'battery', question: 'Venda: carregamento reverso serve para:', options: ['Emergência: recarregar fones TWS pelo celular', 'Substituir carregador de parede', 'Aumentar mAh', 'Melhorar 5G'], correctIndex: 0 },
  { id: 'battery-sales-4', componentId: 'battery', question: 'Venda: cliente preocupado com degradação deve ouvir:', options: ['Use carregamento rápido quando precisar; lento à noite', 'Só use 5W para não degradar', 'Deixe chegar a 0% sempre', 'Carregue a 100% sempre para maior autonomia'], correctIndex: 0 },
  { id: 'battery-sales-5', componentId: 'battery', question: 'Venda: Qi2 traz benefício prático de:', options: ['Alinhamento magnético e eficiência maior', 'Apenas nome novo', 'Sempre mais watts', 'Substitui USB-C'], correctIndex: 0 },
  { id: 'battery-sales-6', componentId: 'battery', question: 'Venda: para cliente que esquece carregador, você destaca:', options: ['Carregamento super rápido recupera em minutos', 'Somente carregamento sem fio', 'Bateria pequena é melhor', 'Evite usar à noite'], correctIndex: 0 },

  // nfc sales
  { id: 'nfc-sales-1', componentId: 'nfc', question: 'Venda: gatilho de conveniência do NFC é:', options: ['Não precisa tirar carteira ou cartão para pagar', 'Sem vantagem prática', 'Substitui senha', 'Funciona a longa distância'], correctIndex: 0 },
  { id: 'nfc-sales-2', componentId: 'nfc', question: 'Venda: para segurança nos pagamentos, destaque:', options: ['Tokenização: número do cartão não é transmitido', 'Ninguém pode interceptar por alcance curto', 'Senha sempre visível', 'Funciona sem internet'], correctIndex: 0 },
  { id: 'nfc-sales-3', componentId: 'nfc', question: 'Venda: NFC pode automatizar rotinas como:', options: ['Tags em porta para ligar Wi-Fi/Bluetooth automaticamente', 'Substituir câmera', 'Controlar temperatura', 'Aumentar brilho'], correctIndex: 0 },
  { id: 'nfc-sales-4', componentId: 'nfc', question: 'Venda: quem usa crachás digitais valoriza:', options: ['Modo Card Emulation com SE seguro', 'Apenas P2P', 'Wi-Fi mais rápido', 'Câmera melhor'], correctIndex: 0 },
  { id: 'nfc-sales-5', componentId: 'nfc', question: 'Venda: objeção "NFC é inseguro" é resolvida com:', options: ['Alcance curto + tokenização + SE', 'É sempre inseguro', 'Usa senha simples', 'Não tem solução'], correctIndex: 0 },
  { id: 'nfc-sales-6', componentId: 'nfc', question: 'Venda: diferença prática vs Bluetooth para pagamentos:', options: ['NFC tem alcance curto e é feito para transações', 'São iguais', 'Bluetooth é mais seguro', 'NFC é mais lento'], correctIndex: 0 },

  // durability sales
  { id: 'durability-sales-1', componentId: 'durability', question: 'Venda: IP68 deve ser vendido como:', options: ['Tranquilidade: sobrevive a chuva, piscina e respingos', 'Você pode mergulhar profundamente', 'À prova de tudo para sempre', 'Não precisa de capa nunca'], correctIndex: 0 },
  { id: 'durability-sales-2', componentId: 'durability', question: 'Venda: titânio na estrutura beneficia principalmente:', options: ['Resistência sem aumento de peso', 'Celular mais leve sem força', 'Apenas estética', 'Melhor sinal 5G'], correctIndex: 0 },
  { id: 'durability-sales-3', componentId: 'durability', question: 'Venda: Gorilla Glass Victus 2 protege de:', options: ['Quedas reais do dia a dia (até 2m)', 'Apenas arranhões leves', 'Água salgada', 'Quedas de qualquer altura'], correctIndex: 0 },
  { id: 'durability-sales-4', componentId: 'durability', question: 'Venda: IP é especificação, não garantia. Isso significa:', options: ['Resiste, mas fabricante não cobre danos por água', 'Nunca molhe o celular', 'É garantia permanente', 'Só serve para marketing'], correctIndex: 0 },
  { id: 'durability-sales-5', componentId: 'durability', question: 'Venda: cliente ativo (praia, trilha) deve ouvir:', options: ['IP68 + titânio + vedação contra areia e poeira', 'Apenas capa', 'Evite qualquer contato com água', 'Sem vantagem versus entry'], correctIndex: 0 },
  { id: 'durability-sales-6', componentId: 'durability', question: 'Venda: para quem tem criança em casa, destaque:', options: ['Vidro resistente e estrutura forte contra quedas', 'Apenas capa', 'Sem impacto', 'Use sem proteção'], correctIndex: 0 },

  // sensors sales
  { id: 'sensors-sales-1', componentId: 'sensors', question: 'Venda: impressão digital ultrassônica vs óptica deve ser destacada como:', options: ['Funciona com dedo molhado/sujo e é mais segura', 'São iguais', 'Óptica é sempre melhor', 'Ultrassônica só para nicho'], correctIndex: 0 },
  { id: 'sensors-sales-2', componentId: 'sensors', question: 'Venda: Face ID 3D é mais seguro porque:', options: ['Usa pontos IR e mapa de profundidade, não é burlado por foto', 'Funciona no escuro total só com luz visível', 'Usa senha numérica de 4 dígitos', 'Salva digital na nuvem'], correctIndex: 0 },
  { id: 'sensors-sales-3', componentId: 'sensors', question: 'Venda: para cliente que pratica esportes, destaque:', options: ['Digital ultrassônica funciona com dedo suado/molhado', 'Apenas Face ID', 'Olhar para tela para desbloquear', 'Capa grossa ajuda'], correctIndex: 0 },
  { id: 'sensors-sales-4', componentId: 'sensors', question: 'Venda: giroscópio é diferencial para:', options: ['Jogos, estabilização de vídeo e realidade aumentada', 'Apenas bússola', 'Fotos noturnas', 'Bateria'], correctIndex: 0 },
  { id: 'sensors-sales-5', componentId: 'sensors', question: 'Venda: GPS L1+L5 impacta diretamente:', options: ['Precisão da navegação entre prédios altos', 'Brilho da tela', 'Resolução da câmera', 'Armazenamento'], correctIndex: 0 },
  { id: 'sensors-sales-6', componentId: 'sensors', question: 'Venda: sensor de proximidade evita:', options: ['Tela ligar no bolso ou durante chamadas', 'Queda do celular', 'Bateria acabar', 'Burn-in'], correctIndex: 0 },

  // connectivity sales
  { id: 'connectivity-sales-1', componentId: 'connectivity', question: 'Venda: 5G mmWave deve ser comunicado como:', options: ['Velocidade extrema em áreas densas, mas menor alcance', 'Igual a 4G', 'Funciona em qualquer lugar', 'Substitui Wi-Fi'], correctIndex: 0 },
  { id: 'connectivity-sales-2', componentId: 'connectivity', question: 'Venda: sub-6 é mais relevante para o Brasil porque:', options: ['Tem maior alcance e cobertura pela operadora', 'É mais rápido que mmWave', 'É igual a 4G', 'Só funciona em estádios'], correctIndex: 0 },
  { id: 'connectivity-sales-3', componentId: 'connectivity', question: 'Venda: Wi-Fi 7 antecipa futuro porque:', options: ['Roteadores futuros darão 4x mais velocidade', 'Já é obrigatório em todos os apps', 'Substitui 5G', 'Apenas para jogos antigos'], correctIndex: 0 },
  { id: 'connectivity-sales-4', componentId: 'connectivity', question: 'Venda: Bluetooth 5.4 com Auracast serve para:', options: ['Transmitir música para vários fones ao mesmo tempo', 'Apenas conectar mouse', 'Aumentar 5G', 'Câmera melhor'], correctIndex: 0 },
  { id: 'connectivity-sales-5', componentId: 'connectivity', question: 'Venda: GPS multi-banda ajuda em:', options: ['Navegação precisa entre arranha-céus e vales urbanos', 'Apenas estradas abertas', 'Gravação de vídeo', 'Selfies'], correctIndex: 0 },
  { id: 'connectivity-sales-6', componentId: 'connectivity', question: 'Venda: objeção "5G gasta mais bateria" é resolvida com:', options: ['SoC gerencia troca automática entre sub-6 e mmWave', 'É sempre verdade, 5G sempre gasta mais', 'Desligue 5G sempre', 'Use 4G para economizar'], correctIndex: 0 },
];

export const QUIZ_BANK: QuizQuestion[] = [
  ...TECHNICAL_QUESTIONS,
  ...SALES_QUESTIONS,
];
