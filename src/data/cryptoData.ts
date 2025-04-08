
export const cryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    description: "Bitcoin é a primeira e mais conhecida criptomoeda, criada em 2009 por uma pessoa (ou grupo) sob o pseudônimo Satoshi Nakamoto. É uma moeda digital descentralizada que opera sem um banco central ou administrador único.",
    security: "Utiliza o algoritmo de consenso Proof of Work (PoW), que exige grande poder computacional para validar transações, tornando-o extremamente seguro contra ataques.",
    backed: "Não possui lastro",
    category: ["popular", "layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#F7931A"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    description: "Ethereum é uma plataforma descentralizada que permite a criação de contratos inteligentes e aplicações descentralizadas (dApps). É a segunda maior criptomoeda por capitalização de mercado.",
    security: "Migrou do algoritmo Proof of Work para Proof of Stake (PoS) com o Ethereum 2.0, melhorando a segurança e reduzindo o consumo de energia.",
    backed: "Não possui lastro",
    category: ["popular", "layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#627EEA"
  },
  {
    id: 3,
    name: "Binance Coin",
    symbol: "BNB",
    description: "BNB é a criptomoeda nativa da Binance, uma das maiores exchanges de criptomoedas do mundo. Inicialmente criada na rede Ethereum, agora opera em sua própria blockchain, a Binance Smart Chain.",
    security: "Utiliza o mecanismo de consenso Proof of Staked Authority (PoSA), que combina aspectos do PoS e Proof of Authority, oferecendo segurança e eficiência.",
    backed: "Parcialmente (pela Binance)",
    category: ["popular", "exchange"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#F3BA2F"
  },
  {
    id: 4,
    name: "Litecoin",
    symbol: "LTC",
    description: "Litecoin foi criado em 2011 por Charlie Lee como uma alternativa mais leve ao Bitcoin. Oferece transações mais rápidas e uma diferente função de hash criptográfica.",
    security: "Usa o algoritmo Scrypt em seu sistema PoW, que inicialmente era mais resistente à mineração ASIC, embora atualmente existam ASICs para Scrypt.",
    backed: "Não possui lastro",
    category: ["popular"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#345D9D"
  },
  {
    id: 5,
    name: "Ripple",
    symbol: "XRP",
    description: "XRP é a criptomoeda nativa da rede Ripple, projetada para facilitar pagamentos internacionais rápidos e de baixo custo. É focada em soluções para o setor bancário e financeiro.",
    security: "Utiliza um protocolo de consenso único chamado Ripple Protocol Consensus Algorithm (RPCA), que não envolve mineração.",
    backed: "Parcialmente (pela Ripple Labs)",
    category: ["popular", "payment"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#23292F"
  },
  {
    id: 6,
    name: "Dogecoin",
    symbol: "DOGE",
    description: "Dogecoin começou como uma brincadeira baseada em um meme da internet, mas se tornou uma criptomoeda legítima com uma comunidade ativa. Foi criada em 2013 como uma alternativa divertida ao Bitcoin.",
    security: "Usa o algoritmo Scrypt em um sistema PoW, similar ao Litecoin. Tem blocos mais rápidos que o Bitcoin, mas uma segurança menos robusta.",
    backed: "Não possui lastro",
    category: ["popular", "meme"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#C2A633"
  },
  {
    id: 7,
    name: "Solana",
    symbol: "SOL",
    description: "Solana é uma blockchain de alto desempenho focada em velocidade e eficiência, capaz de processar milhares de transações por segundo com taxas muito baixas.",
    security: "Usa um mecanismo híbrido que combina Proof of Stake e Proof of History, permitindo maior throughput, embora tenha enfrentado alguns problemas de estabilidade.",
    backed: "Não possui lastro",
    category: ["popular", "layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#14F195"
  },
  {
    id: 8,
    name: "Polygon",
    symbol: "MATIC",
    description: "Polygon (anteriormente Matic Network) é uma solução de escalonamento para Ethereum que visa fornecer várias ferramentas para melhorar a velocidade e reduzir os custos das transações na rede Ethereum.",
    security: "Usa Proof of Stake e opera como uma sidechain do Ethereum, beneficiando-se indiretamente da segurança da rede principal.",
    backed: "Não possui lastro",
    category: ["popular", "layer2"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#8247E5"
  },
  {
    id: 9,
    name: "Polkadot",
    symbol: "DOT",
    description: "Polkadot é um protocolo de blockchain que conecta múltiplas cadeias especializadas em uma única rede unificada, permitindo a transferência de qualquer tipo de dado entre blockchains.",
    security: "Utiliza um mecanismo de consenso chamado Nominated Proof of Stake (NPoS), que é uma variante do PoS tradicional.",
    backed: "Não possui lastro",
    category: ["popular", "interoperability"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#E6007A"
  },
  {
    id: 10,
    name: "Zcash",
    symbol: "ZEC",
    description: "Zcash é uma criptomoeda focada em privacidade que permite transações transparentes e também privadas. Utiliza a tecnologia zk-SNARKs para proteger os detalhes de transações quando necessário.",
    security: "Usa o algoritmo Equihash em um sistema PoW, projetado para ser resistente a ASICs, embora já existam ASICs para esse algoritmo.",
    backed: "Não possui lastro",
    category: ["privacy"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#F4B728"
  },
  {
    id: 11,
    name: "TRON",
    symbol: "TRX",
    description: "TRON é uma plataforma blockchain descentralizada focada em conteúdo digital e entretenimento. Visa eliminar intermediários entre criadores de conteúdo e consumidores.",
    security: "Utiliza um sistema Delegated Proof of Stake (DPoS), onde os detentores de tokens elegem 'super representantes' para validar transações.",
    backed: "Não possui lastro",
    category: ["entertainment", "layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#FF0013"
  },
  {
    id: 12,
    name: "Stellar",
    symbol: "XLM",
    description: "Stellar é uma plataforma de pagamentos descentralizada projetada para facilitar transferências transfronteiriças eficientes. Foi criada como um fork do Ripple, mas com foco em indivíduos em vez de instituições.",
    security: "Usa o Stellar Consensus Protocol (SCP), uma variante do protocolo de consenso federado bizantino.",
    backed: "Não possui lastro",
    category: ["payment"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#7D00FF"
  },
  {
    id: 13,
    name: "Tezos",
    symbol: "XTZ",
    description: "Tezos é uma plataforma blockchain focada em contratos inteligentes e aplicações descentralizadas, com um mecanismo de governança on-chain que permite atualizações do protocolo sem necessidade de hard forks.",
    security: "Usa um sistema Liquid Proof of Stake (LPoS), que permite que os detentores de tokens deleguem seus direitos de validação.",
    backed: "Não possui lastro",
    category: ["smart-contracts", "governance"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#2C7DF7"
  },
  {
    id: 14,
    name: "Bitcoin Cash",
    symbol: "BCH",
    description: "Bitcoin Cash surgiu de um hard fork do Bitcoin em 2017, com o objetivo de aumentar o tamanho dos blocos e permitir mais transações por segundo, resultando em taxas mais baixas.",
    security: "Usa Proof of Work com o mesmo algoritmo SHA-256 do Bitcoin, beneficiando-se de uma segurança similar, embora com menos hash power total.",
    backed: "Não possui lastro",
    category: ["payment"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#8DC351"
  },
  {
    id: 15,
    name: "Ethereum Classic",
    symbol: "ETC",
    description: "Ethereum Classic é a continuação da blockchain original do Ethereum após o hard fork que ocorreu em 2016 como resposta ao hack do DAO. Mantém o compromisso com a imutabilidade da blockchain.",
    security: "Continua a usar Proof of Work enquanto o Ethereum migrou para Proof of Stake, mas tem uma rede de mineração menor e sofreu vários ataques de 51% no passado.",
    backed: "Não possui lastro",
    category: ["layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#328332"
  },
  {
    id: 16,
    name: "Filecoin",
    symbol: "FIL",
    description: "Filecoin é uma rede de armazenamento descentralizada que transforma o armazenamento em nuvem em um mercado algorítmico, permitindo que qualquer pessoa alugue espaço de armazenamento não utilizado.",
    security: "Usa dois mecanismos de consenso originais: Proof of Replication e Proof of Spacetime, garantindo que os dados sejam armazenados de forma redundante e contínua.",
    backed: "Não possui lastro",
    category: ["storage"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#0090FF"
  },
  {
    id: 17,
    name: "Elrond",
    symbol: "EGLD",
    description: "Elrond é uma blockchain projetada para alta escalabilidade, velocidade e eficiência de custo. Utiliza sharding para processar milhares de transações por segundo.",
    security: "Implementa um mecanismo de consenso Secure Proof of Stake (SPoS) combinado com Adaptive State Sharding para maior segurança e desempenho.",
    backed: "Não possui lastro",
    category: ["layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#000000"
  },
  {
    id: 18,
    name: "Nano",
    symbol: "NANO",
    description: "Nano (anteriormente RaiBlocks) é projetado para ser uma criptomoeda de pagamento rápida, sem taxas e eficiente em termos energéticos. Cada conta tem sua própria blockchain no modelo Block Lattice.",
    security: "Usa um sistema de consenso chamado Open Representative Voting (ORV), uma forma de delegated Proof of Stake que não requer mineração.",
    backed: "Não possui lastro",
    category: ["payment"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#4A90E2"
  },
  {
    id: 19,
    name: "Arbitrum",
    symbol: "ARB",
    description: "Arbitrum é uma solução de camada 2 para Ethereum que aumenta a capacidade de processamento e reduz os custos de transação enquanto mantém a segurança da rede principal Ethereum.",
    security: "Usa Optimistic Rollups, que assumem que as transações são válidas por padrão e só verifica quando desafiado, herdando a segurança do Ethereum.",
    backed: "Não possui lastro",
    category: ["layer2"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#28A0F0"
  },
  {
    id: 20,
    name: "Optimism",
    symbol: "OP",
    description: "Optimism é uma solução de layer 2 para Ethereum que utiliza Optimistic Rollups para aumentar a escalabilidade, reduzindo taxas e aumentando a velocidade das transações.",
    security: "Como o Arbitrum, usa Optimistic Rollups e herda a segurança do Ethereum, com um modelo de segurança que depende de 'fraud proofs'.",
    backed: "Não possui lastro",
    category: ["layer2"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#FF0420"
  },
  {
    id: 21,
    name: "Terra",
    symbol: "LUNA",
    description: "Terra é um protocolo blockchain que suporta stablecoins algorítmicas estáveis que rastreiam o preço de moedas fiduciárias. O token LUNA é usado para estabilizar o preço das stablecoins.",
    security: "Usa Delegated Proof of Stake (DPoS) e um mecanismo de market-making algorítmico para manter a estabilidade do preço, embora tenha sofrido um colapso significativo em 2022.",
    backed: "Não possui lastro",
    category: ["defi"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#5493F7"
  },
  {
    id: 22,
    name: "HECO Chain",
    symbol: "HT",
    description: "Huobi ECO Chain (HECO) é uma blockchain pública desenvolvida pela exchange Huobi. É compatível com EVM e promete transações de alta velocidade e baixo custo.",
    security: "Utiliza um mecanismo de consenso Proof of Authority (PoA) e Proof of Stake (PoS) híbrido, com nós validadores selecionados.",
    backed: "Parcialmente (pela Huobi)",
    category: ["exchange", "defi"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#00943E"
  },
  {
    id: 23,
    name: "xDai",
    symbol: "STAKE",
    description: "xDai é uma sidechain do Ethereum que usa o token Dai como moeda base, oferecendo transações estáveis, rápidas e de baixo custo. O token STAKE é utilizado para o consenso.",
    security: "Usa POSDAO, uma implementação de Proof of Stake que permite que os validadores sejam escolhidos com base em seus stake de tokens STAKE.",
    backed: "Sim (pelo DAI)",
    category: ["stablecoin", "layer2"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#48A9A6"
  },
  {
    id: 24,
    name: "GoChain",
    symbol: "GO",
    description: "GoChain é uma blockchain compatível com Ethereum que afirma ser mais rápida, mais verde e mais barata, visando aplicações empresariais e descentralizadas.",
    security: "Usa um mecanismo de consenso Proof of Reputation (PoR), onde os validadores são empresas estabelecidas que arriscam sua reputação.",
    backed: "Não possui lastro",
    category: ["enterprise"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#00B6CC"
  },
  {
    id: 25,
    name: "POA Network",
    symbol: "POA",
    description: "POA Network é uma plataforma blockchain pública baseada no Ethereum que usa Proof of Authority como seu mecanismo de consenso, visando aplicações que precisam de velocidade e segurança.",
    security: "Utiliza Proof of Authority, onde os validadores são nós de confiança que são identificados e verificam transações baseadas em sua reputação.",
    backed: "Não possui lastro",
    category: ["enterprise"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#513C79"
  },
  {
    id: 26,
    name: "VeChain",
    symbol: "VET",
    description: "VeChain é uma plataforma blockchain focada em aprimorar a gestão da cadeia de suprimentos e processos de negócios, fornecendo soluções de rastreabilidade para empresas.",
    security: "Usa Proof of Authority (PoA), com 101 nós validadores que são aprovados pela fundação VeChain.",
    backed: "Não possui lastro",
    category: ["enterprise", "supply-chain"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#4FABA6"
  },
  {
    id: 27,
    name: "Wanchain",
    symbol: "WAN",
    description: "Wanchain visa construir o futuro das finanças digitais através de uma plataforma para transferências de ativos digitais interoperáveis e aplicativos financeiros descentralizados.",
    security: "Implementa um mecanismo de consenso Proof of Stake com Secure Multi-Party Computation para transações privadas.",
    backed: "Não possui lastro",
    category: ["interoperability", "defi"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#136AAD"
  },
  {
    id: 28,
    name: "Callisto",
    symbol: "CLO",
    description: "Callisto Network é uma plataforma blockchain derivada do Ethereum Classic focada em segurança e auditoria de contratos inteligentes, com um sistema de governança descentralizado.",
    security: "Usa um mecanismo de consenso Proof of Work com o algoritmo Ethash, similar ao Ethereum Classic.",
    backed: "Não possui lastro",
    category: ["security"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#01F3F1"
  },
  {
    id: 29,
    name: "Fantom",
    symbol: "FTM",
    description: "Fantom é uma plataforma de contratos inteligentes para aplicações descentralizadas, conhecida por sua velocidade e baixo custo de transação graças à sua DAG (Directed Acyclic Graph).",
    security: "Utiliza Lachesis, um protocolo de consenso assíncrono baseado em aBFT (asynchronous Byzantine Fault Tolerance).",
    backed: "Não possui lastro",
    category: ["defi", "layer1"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#1969FF"
  },
  {
    id: 30,
    name: "Thorchain",
    symbol: "RUNE",
    description: "Thorchain é um protocolo de liquidez descentralizado que permite trocas de criptomoedas nativas entre diferentes blockchains sem depender de wrapped tokens ou pares.",
    security: "Usa o Tendermint BFT e um sistema Proof of Bond em que os nós devem bondar RUNE como garantia para participar do consenso.",
    backed: "Não possui lastro",
    category: ["defi", "interoperability"],
    imageUrl: "/lovable-uploads/73abefe8-9255-4989-abd4-69c5ff43da23.png",
    color: "#33FF99"
  },
];
