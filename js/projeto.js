// ── projeto.js ──
// Sistema dinâmico — lê o ?id= da URL e carrega o projeto correto.
// Para adicionar um projeto novo, basta incluir um objeto no array PROJETOS.

const PROJETOS = [
  {
    id: 1,
    titulo: "Residencial Aurora",
    tipo: "RESIDENCIAL",
    escala: "ESCALA 1:100",
    ano: "2024",
    descricao: "Maquete arquitetônica do Residencial Aurora, empreendimento de alto padrão localizado em Curitiba. Produzida em escala 1:100 com materiais de alta qualidade, a peça reproduz fielmente as fachadas, o paisagismo e os volumes do projeto, comunicando com precisão a essência do empreendimento para apresentações e estandes de vendas.",
    fotoPrincipal: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 2,
    titulo: "Complexo Central Park",
    tipo: "COMERCIAL",
    escala: "ESCALA 1:150",
    ano: "2024",
    descricao: "Maquete do Complexo Central Park, projeto comercial de uso misto com torres corporativas e área de convivência. Produzida com acabamento premium, destacando os volumes e a integração entre os edifícios e os espaços públicos ao redor.",
    fotoPrincipal: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 3,
    titulo: "Condomínio Jardins",
    tipo: "RESIDENCIAL",
    escala: "ESCALA 1:100",
    ano: "2023",
    descricao: "Maquete do Condomínio Jardins, empreendimento residencial com forte apelo ao paisagismo e áreas verdes. A maquete destaca a integração entre as torres residenciais e os jardins internos, transmitindo a qualidade de vida do projeto.",
    fotoPrincipal: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 4,
    titulo: "Boulevard Urbano",
    tipo: "USO MISTO",
    escala: "ESCALA 1:200",
    ano: "2023",
    descricao: "Maquete do Boulevard Urbano, projeto de uso misto que integra comércio, serviços e habitação em uma via estrutural da cidade. A peça comunica a escala urbana do empreendimento e a relação com o entorno.",
    fotoPrincipal: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 5,
    titulo: "Marina Bay",
    tipo: "RESIDENCIAL",
    escala: "ESCALA 1:100",
    ano: "2023",
    descricao: "Maquete do Marina Bay, residencial de luxo com vista para o lago. A peça destaca a elegância das torres e a integração com a orla, sendo utilizada no estande de vendas do empreendimento.",
    fotoPrincipal: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 6,
    titulo: "Torre Vista",
    tipo: "COMERCIAL",
    escala: "ESCALA 1:150",
    ano: "2022",
    descricao: "Maquete da Torre Vista, edifício corporativo de alto padrão com fachada envidraçada. A peça reproduz com precisão os detalhes da fachada e o paisagismo do entorno imediato.",
    fotoPrincipal: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 7,
    titulo: "Parque das Artes",
    tipo: "CULTURAL",
    escala: "ESCALA 1:200",
    ano: "2022",
    descricao: "Maquete do Parque das Artes, complexo cultural com museu, teatro e espaços públicos. A peça comunica a riqueza arquitetônica do projeto e a integração com o parque urbano ao redor.",
    fotoPrincipal: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
    ],
  },
  {
    id: 8,
    titulo: "Edifício Imperial",
    tipo: "COMERCIAL",
    escala: "ESCALA 1:100",
    ano: "2022",
    descricao: "Maquete do Edifício Imperial, torre comercial com arquitetura clássica contemporânea. Destaque para o acabamento das fachadas em mármore e os detalhes ornamentais reproduzidos com precisão.",
    fotoPrincipal: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=1600&q=80&auto=format",
    fotos: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1400&q=80&auto=format",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1400&q=80&auto=format",
    ],
  },
];

// ── Carrega o projeto correto pela URL ──
function carregarProjeto() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const projeto = PROJETOS.find(p => p.id === id) || PROJETOS[0];

  // Título da aba
  document.title = `${projeto.titulo} | Projecta Maquetes`;

  // Header
  document.getElementById('projeto-titulo').textContent = projeto.titulo;
  document.getElementById('projeto-tipo').textContent = projeto.tipo;
  document.getElementById('projeto-escala').textContent = projeto.escala;
  document.getElementById('projeto-ano').textContent = projeto.ano;
  document.getElementById('projeto-desc').textContent = projeto.descricao;

  // Foto principal
  document.getElementById('foto-principal').src = projeto.fotoPrincipal;
  document.getElementById('foto-principal').alt = projeto.titulo;

  // Grid de fotos
  const grid = document.getElementById('fotos-grid');
  grid.innerHTML = projeto.fotos.map((foto, i) => `
    <div class="foto-item" onclick="abrirCarrossel(${i})">
      <img src="${foto}" alt="Foto ${i + 1}" />
    </div>
  `).join('');

  // Outros projetos (exclui o atual)
  const outrosGrid = document.getElementById('outros-projetos-grid');
  const outros = PROJETOS.filter(p => p.id !== id);
  outrosGrid.innerHTML = outros.map(p => `
    <a href="projeto.html?id=${p.id}" class="card">
      <div class="card-img">
        <img src="${p.fotoPrincipal}" alt="${p.titulo}" />
      </div>
      <div class="card-info">
        <span class="card-title">${p.titulo}</span>
        <span class="card-year">${p.ano}</span>
      </div>
    </a>
  `).join('');

  // Inicializa carrossel com as fotos do projeto
  fotosCarrossel = projeto.fotos;
}

// ── Carrossel ──
let fotosCarrossel = [];
let fotoAtual = 0;

function abrirCarrossel(index) {
  fotoAtual = index;
  atualizarCarrossel();
  document.getElementById('carrossel').classList.add('ativo');
  document.body.style.overflow = 'hidden';
}

function fecharCarrosselBtn() {
  document.getElementById('carrossel').classList.remove('ativo');
  document.body.style.overflow = '';
}

function fecharCarrossel(event) {
  if (event.target === document.getElementById('carrossel')) {
    fecharCarrosselBtn();
  }
}

function mudarFoto(direcao) {
  fotoAtual = (fotoAtual + direcao + fotosCarrossel.length) % fotosCarrossel.length;
  atualizarCarrossel();
}

function atualizarCarrossel() {
  document.getElementById('carrossel-img').src = fotosCarrossel[fotoAtual];
  document.getElementById('carrossel-contador').textContent = `${fotoAtual + 1} / ${fotosCarrossel.length}`;
}

// Teclado
document.addEventListener('keydown', (e) => {
  if (!document.getElementById('carrossel').classList.contains('ativo')) return;
  if (e.key === 'ArrowLeft')  mudarFoto(-1);
  if (e.key === 'ArrowRight') mudarFoto(1);
  if (e.key === 'Escape')     fecharCarrosselBtn();
});

// Inicia
carregarProjeto();
