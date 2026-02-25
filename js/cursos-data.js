// Dados de cursos com sinônimos para busca inteligente
const cursos = [
    {
        id: 1,
        nome: "Manicure e Pedicure",
        sinônimos: ["manicure", "pedicure", "unhas dos pés", "cuidado de unhas", "nail care", "unha", "pé"],
        descricao: "Técnicas profissionais de cuidado das unhas com acabamento impecável.",
        preco: "R$359,00",
        imagem: "img/cursos/manicure_pedicure.png"
    },
    {
        id: 2,
        nome: "Alongamento de Unhas",
        sinônimos: ["alongamento", "unhas", "alongamento de unhas", "gel", "acrílico", "fibra de vidro", "nail extension", "unha alongada"],
        descricao: "Aprenda as técnicas mais modernas de alongamento com gel, acrílico e fibra de vidro.",
        preco: "R$359,00",
        imagem: "img/cursos/alongamento_unhas.png"
    },
    {
        id: 3,
        nome: "Imersão em Cílios",
        sinônimos: ["cílios", "alongamento de cílios", "extensão de cílios", "cilios", "lash", "eyelash", "cilios alongados"],
        descricao: "Técnicas de extensão de cílios e styling profissional com materiais de qualidade.",
        preco: "R$469,00",
        imagem: "img/cursos/imersao_cilios.png"
    },
    {
        id: 5,
        nome: "Micropigmentação Labial",
        sinônimos: ["micropigmentação", "micropig", "pigmentação", "tattoo", "permanente", "labios", "labial", "lábios", "lip tattoo", "lip blush"],
        descricao: "Procedimento estético que deposita pigmentos nos lábios para realçar a cor natural, corrigir assimetrias e dar aparência de lábios mais uniformes, definidos e saudáveis.",
        preco: "R$499,00",
        imagem: "img/cursos/micropigmentacao_labial.png"
    },
    {
        id: 6,
        nome: "Design de Sobrancelhas",
        sinônimos: ["sobrancelha", "design", "sobrancelhas", "eyebrow", "format", "colorimetria", "arquitetura"],
        descricao: "Domine o design, colorimetria e técnicas de sobrancelhas perfeitas para cada rosto.",
        preco: "R$359,00",
        imagem: "img/cursos/design_sobrancelhas.png"
    },
    {
        id: 7,
        nome: "Micropigmentação de Sobrancelhas",
        sinônimos: ["micropigmentação sobrancelha", "micropig sobrancelha", "sobrancelha permanente", "tatoo sobrancelha", "microblading"],
        descricao: "Especialização em micropigmentação de sobrancelhas com técnicas avançadas.",
        preco: "R$399,00",
        imagem: "img/cursos/micropigmentacao_sobrancelha.png"
    },
    {
        id: 8,
        nome: "Microagulhamento e hydra gloss",
        sinônimos: ["microagulhamento", "hydra gloss", "micro agu", "rejuvenescimento", "pele", "facial", "dermaroller"],
        descricao: "Técnicas avançadas de rejuvenescimento facial com microagulhamento e hydra gloss lips",
        preco: "R$350,00",
        imagem: "img/cursos/microagulhamento.png"
    },
    {
        id: 9,
        nome: "Despigmentação Química e Contorno de Olhos",
        sinônimos: ["despigmentação", "despig", "química", "mancha", "olhos", "contorno", "mancha na pele", "melasma"],
        descricao: "Tratamento de manchas com despigmentação química e contorno de olhos profissional.",
        preco: "R$299,00",
        imagem: "img/cursos/despigmentacao_quimica_contorno_olhos.png"
    },
    {
        id: 10,
        nome: "Camuflagem e BB Glow",
        sinônimos: ["camuflagem", "bb glow", "cicatriz", "cicatrizes", "pele perfeita", "bb cream", "skin tint"],
        descricao: "Técnicas de camuflagem para cicatrizes e BB Glow para efeito de pele perfeita.",
        preco: "R$410,00",
        imagem: "img/cursos/camuflagem.png"
    },
    {
        id: 11,
        nome: "Limpeza com Dermaplaning, Microagulhamento e BB Glow",
        sinônimos: ["limpeza", "dermaplaning", "combo", "facial", "tratamento completo", "peeling", "clareamento"],
        descricao: "Combo completo de tratamentos faciais para limpeza profunda e rejuvenescimento.",
        preco: "R$410,00",
        imagem: "img/cursos/limpeza_pele.png"
    },
    {
        id: 12,
        nome: "Jato de Plasma",
        sinônimos: ["plasma", "jato", "rejuvenescimento", "clareamento", "lifting", "plasma rico", "plasmapen"],
        descricao: "Domínio da tecnologia de plasma para rejuvenescimento e clareamento da pele.",
        preco: "R$399,00",
        imagem: "img/cursos/jato_plasma.png"
    },
    {
        id: 13,
        nome: "Depilação com Cera",
        sinônimos: ["depilação", "cera", "depilar", "wax", "epilação", "pelos", "remoção de pelos"],
        descricao: "Técnicas profissionais de depilação com cera para todos os tipos de pele.",
        preco: "R$359,00",
        imagem: "img/cursos/depilacao_cera.png"
    },
    {
        id: 14,
        nome: "Depilação à Laser",
        sinônimos: ["laser", "depilação laser", "remoção permanente", "epilação", "sem pelos", "laserterapia"],
        descricao: "Especialização em tecnologia de depilação à laser de última geração.",
        preco: "R$699,00",
        imagem: "img/cursos/depilacao_laser.png"
    },
    {
        id: 15,
        nome: "Combo Massagem",
        sinônimos: ["massagem", "relaxamento", "terapia", "bem-estar", "spa", "terapêutica", "massage"],
        descricao: "Técnicas variadas de massagem terapêutica e relaxamento profissional.",
        preco: "R$419,00",
        imagem: "img/cursos/massagem.png"
    },
    {
        id: 16,
        nome: "Toxina Botulínica",
        sinônimos: ["toxina", "botox", "botulínica", "expressão", "rugas", "envelhecimento", "lifting"],
        descricao: "Domínio completo das técnicas de aplicação de toxina botulínica com segurança.",
        preco: "R$699,00",
        imagem: "img/cursos/toxina_botulinica.png"
    },
    {
        id: 17,
        nome: "Preenchimento Labial",
        sinônimos: ["preenchimento", "lábio", "labios", "volume", "lip filler", "ácido hialurônico", "lábios volumosos"],
        descricao: "Técnicas de preenchimento labial para volume e contorno perfeitos.",
        preco: "R$699,00",
        imagem: "img/cursos/preenchimento_labial.png"
    },
    {
        id: 18,
        nome: "Preenchimento Full Face",
        sinônimos: ["preenchimento full face", "preenchimento facial", "harmonização", "face", "acido hialuronico"],
        descricao: "Harmonização facial completa com técnicas de preenchimento avançadas.",
        preco: "R$899,00",
        imagem: "img/cursos/preenchimento_fullface.png"
    },
    {
        id: 19,
        nome: "Intradermoterapia injetável",
        sinônimos: ["intradermoterapia", "injetável", "micronutrientes", "vitaminas", "injeção", "skin booster"],
        descricao: "Técnica de aplicação de micronutrientes via injeção para rejuvenescimento.",
        preco: "R$499,00",
        imagem: "img/cursos/intradermoterapia_injetavel.png"
    },
    {
        id: 20,
        nome: "Intradermoterapia Pressurizada",
        sinônimos: ["intradermoterapia pressurizada", "pressão", "mesoterapia", "ativos", "hidratação"],
        descricao: "Aplicação pressurizada de ativos para tratamento de pele profundo e eficaz.",
        preco: "R$499,00",
        imagem: "img/cursos/intradermoterapia_pressurizada.png"
    },
    {
        id: 21,
        nome: "Bioestimulador de Colágeno",
        sinônimos: ["bioestimulador", "colágeno", "biostimulator", "radiesse", "rejuvenescimento natural"],
        descricao: "Domínio das técnicas de aplicação de bioestimulador para rejuvenescimento natural.",
        preco: "R$799,00",
        imagem: "img/cursos/bioestimulador.png"
    },
    {
        id: 22,
        nome: "Harmonização Glútea",
        sinônimos: ["glútea", "glúteo", "bumbum", "preenchimento glútea", "bunda", "corpo"],
        descricao: "Técnicas de preenchimento e harmonização glútea com resultados profissionais.",
        preco: "R$459,00",
        imagem: "img/cursos/harmonização_glutea.png"
    },
    {
        id: 23,
        nome: "Laser Lavien + Pisom",
        sinônimos: ["laser Pisom", "pisom", "depilação", "pelo", "laser diodo"],
        descricao: "Especialização em tecnologia de laser para remoção permanente de pelos.",
        preco: "R$699,00",
        imagem: "img/cursos/lavieen.png"
    },
    {
        id: 25,
        nome: "Body Piercing e Microdermal",
        sinônimos: ["piercing", "microdermal", "body", "implante", "corpo", "orelha", "nariz", "umbigo"],
        descricao: "Técnicas de colocação segura de piercings e implantes dermais com qualidade.",
        preco: "R$449,00",
        imagem: "img/cursos/body_piercing.png"
    },
    {
        id: 26,
        nome: "Microtatuagem com Dermógrafo",
        sinônimos: ["microtatuagem", "dermógrafo", "tatoo", "tatuagem", "permanente", "micropigmento"],
        descricao: "Domínio das técnicas de microtatuagem para sobrancelhas e detalhes faciais.",
        preco: "R$410,00",
        imagem: "img/cursos/microtatuagem.png"
    }
];

// Função para buscar cursos com sinônimos
function buscarCursos(termo) {
    if (!termo.trim()) {
        return cursos;
    }

    const termoLower = termo.toLowerCase().trim();
    
    return cursos.filter(curso => {
        const nomeLower = (curso.nome || '').toLowerCase();
        const descricaoLower = (curso.descricao || '').toLowerCase();
        
        // Busca exata no nome
        if (nomeLower.includes(termoLower)) {
            return true;
        }
        
        // Busca nos sinônimos
        if (curso.sinônimos && curso.sinônimos.some(sin => sin.toLowerCase().includes(termoLower))) {
            return true;
        }
        
        // Busca na descrição
        if (descricaoLower.includes(termoLower)) {
            return true;
        }
        
        // Busca fuzzy simples - verifica se todas as letras do termo estão em ordem no nome
        let j = 0;
        for (let i = 0; i < nomeLower.length && j < termoLower.length; i++) {
            if (nomeLower[i] === termoLower[j]) {
                j++;
            }
        }
        
        return j === termoLower.length;
    });
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cursos, buscarCursos };
}
