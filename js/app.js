/* ================= HEADER HIDE/SHOW ON SCROLL ================= */
const header = document.querySelector('.header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (header) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrollando para baixo e passou de 100px
            header.classList.add('hidden');
            header.classList.remove('visible');
        } else {
            // Scrollando para cima
            header.classList.remove('hidden');
            header.classList.add('visible');
        }
    }
    
    lastScrollY = currentScrollY;
});

/* ================= LOADER ================= */
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        // Esconder o loader e revelar o conteúdo completamente carregado
        loader.style.display = 'none';
        document.body.classList.remove('loading');
    }
});

// Fallback for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
            document.body.classList.remove('loading');
        }
    }, 1000);
});

/* ================= MENU MOBILE ================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Adicionar classe menu-open ao header para não sumir
        if (mobileMenu.classList.contains('active')) {
            header.classList.add('menu-open');
        } else {
            header.classList.remove('menu-open');
        }
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            header.classList.remove('menu-open');
        });
    });
}

/* ================= SISTEMA DE BUSCA DE CURSOS ================= */
const buscaInput = document.getElementById('buscaCursos');
const cursosContainer = document.getElementById('cursosContainer');
const resultadoBusca = document.getElementById('resultadoBusca');

if (buscaInput && cursosContainer) {
    // Renderizar cursos inicialmente
    renderizarCursos(cursos);

    // Listener para o input de busca
    buscaInput.addEventListener('input', (e) => {
        const termo = e.target.value;
        const cursosFiltrados = buscarCursos(termo);
        
        renderizarCursos(cursosFiltrados);
        
        // Atualizar texto de resultado
        if (termo.trim()) {
            resultadoBusca.textContent = `${cursosFiltrados.length} curso(s) encontrado(s)`;
        } else {
            resultadoBusca.textContent = '';
        }
    });
}

function renderizarCursos(arrayDeCursos) {
    cursosContainer.innerHTML = '';
    
    arrayDeCursos.forEach((curso, index) => {
        const card = document.createElement('div');
        card.className = 'curso-card';
        card.style.animation = `fadeIn 0.3s ease-out ${index * 0.05}s backwards`;
        
        const imgSrc = curso.imagem ? encodeURI(curso.imagem) : 'img/curso-placeholder.jpg';

        card.innerHTML = `
            <div class="curso-imagem">
                <img src="${imgSrc}" alt="Curso de ${curso.nome}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Outfit%22 font-size=%2220%22 fill=%22%23999%22%3E${curso.nome}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="curso-header">
                <span class="curso-badge">Curso</span>
            </div>
            <h3>${curso.nome}</h3>
            <p class="curso-descricao">${curso.descricao}</p>
            <div class="curso-preco">${curso.preco}</div>
            <a href="https://wa.me/5511993240922?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20sobre%20o%20curso%20de%20${encodeURIComponent(curso.nome)}" 
               class="btn-agendar" 
               target="_blank">
                Agendar
            </a>
        `;
        
        cursosContainer.appendChild(card);
    });
    
    // Se não houver cursos
    if (arrayDeCursos.length === 0) {
        const mensagem = document.createElement('div');
        mensagem.style.textAlign = 'center';
        mensagem.style.padding = '50px 20px';
        mensagem.style.gridColumn = '1 / -1';
        mensagem.innerHTML = `
            <h3 style="color: #999; font-size: 1.3em; margin-bottom: 10px;">Nenhum curso encontrado</h3>
            <p style="color: #bbb; font-size: 0.95em;">Tente procurar por outro termo</p>
        `;
        cursosContainer.appendChild(mensagem);
    }
}

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();