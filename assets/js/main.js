document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));

    /* ---------- Weld-seam divider: trigger the traveling spark once ---------- */
    const seams = document.querySelectorAll('.weld-seam');
    const seamIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          seamIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    seams.forEach(el => seamIo.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Product tabs ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.product-panel');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      panels.forEach(p => {
        p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
      });
    });
  });



 const products = {

    "tanque-vertical": {

        title: "TANQUE VERTICAL",

        category: "Indústria alimentícia",

        image: "assets/images/tanque.png",

        material: "Aço Inox 304",

        fabrication: "Fabricada sob medida",

        application: "Linhas de produção alimentícias",

        description:
            "A solução ideal para armazenar líquidos com segurança, higiene e eficiência. Unindo resistência, durabilidade e praticidade em um único equipamento.",

        features: [

            "Agitador",

            "Isolamento Térmico",

            "Visor de nível",

            "Guarda-corpo",

            "Boca de visita",

            "Sensor de temperatura",
            
            "Sensor de nível",

            "Válvula de alívio",

            "CIP (Cleaning In Place)",

            "Rodízios (quando aplicável)"
        ]

    },

    "mesa-giratoria": {
        title: "MESA ACUMULADORA GIRATÓRIA",

        category: "Indústria alimentícia",

        image: "assets/images/mesa-giratoria.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Linhas de produção alimentícias",

        description:
            "Equipamento desenvolvido para otimizar o fluxo de produção, proporcionando o acúmulo, organização e movimentação contínua de produtos entre diferente etapas do processo produtivo.",
        
        features: [

            "Acúmulo eficiente",

            "Fácil operação",

            "Guias ajustáveis",

            "Estruturas Robusta"
        ]

    },

    "lava-botas": {
        title: "LAVADOR DE BOTAS",

        category: "Indústria alimentícia",

        image: "assets/images/lava-botas-sem-fundo.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application:"Linhas de produção que exigem auto padrão de limpeza",

        description:
            "Equipamento desenvolvido para a higienização eficiente de botas e e calçados de uso profissional.",

        features: [

            'Higienização Eficiente',

            "Praticidade",

            "Economia de água",

            "Mais Segurança"
        ]
    },

    "mesa-inox": {

        title: "MEESA EM AÇO INOX",

        category: "Indústria alimentícia",

        image: "assets/images/mesa-inox.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústria alimenticia geral",

        description: 
            "Mesa confeccionada em aço inox de alta qualidade, ideal para ambientes que exigem higiene, resistência e fácillimpeza.",

        features: [

            "Durabilidade",

            "Higiene",

            "Qualidade",

            "Garantia"
        ]
    },

    "carro-queijo": {

        title: "CARROS PARA RESFRIAMENTO DE QUEIJOS",

        category: "Indústria alimentícia",

        image: "assets/images/carro-queijo.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Laticínios",

        description: 
            "Equipamentos desenvolvidos para atender às exigências das indústrias alimentícias com segurança, higiene e durabilidade.",
        
        features: [

            "Equipamento sob medida",

            "Material de alta qualidade",

            "Economia de água",

            "Mais segurança"
        ]
    },

    "prensa-queijos": {

        title: "PRENSAS PARA QUEIJOS",

        category: "Indústria alimentícia",

        image: "assets/images/prensa-queijo.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Laticínios",

        description: 
            "Equipamentos desenvolvidos para atender às exigências das indústrias alimentícias com segurança, higiene e durabilidade.",
        
        features: [

            "Equipamento sob medida",

            "Material de alta qualidade",

            "Economia de água",

            "Mais segurança"
        ]
    },

    "coifas": {
        title: "COIFAS",

        category: "Indústria alimentícia",

        image: "assets/images/coifa.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Restaurantes, padarias, lanchonetes e demais ambientes com alto padrão de limpeza",

        description: 
            "confeccionadas em aço inox de alta qualidade, ideal para ambientes que exigem higiene, resistência e fácil limpeza.",

        features: [

            "Higienização eficiente",

            "Praticidade",

            "Economia de água",

            "Mais segurança"
        ]
    },

    "bancadas": {
        title: "BANCADAS",

        category: "Indústria alimentícia",

        image: "assets/images/bancada.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Restaurantes, padarias, lanchonetes e demais ambientes com alto padrão de limpeza",

        description: 
            "confeccionadas em aço inox de alta qualidade, ideal para ambientes que exigem higiene, resistência e fácil limpeza.",

        features: [

            "Higienização eficiente",

            "Praticidade",

            "Economia de água",

            "Mais segurança"
        ]
    },

    "armario": {
        title: "ARMÁRIOS EM AÇO INOX",

        category: "Indústria alimentícia e geral",

        image: "assets/images/armario.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústrias em geral",

        description:
            "Equipamento desenvolvido para atender às exigências das indústrias alimentícias com segurança, higiene e durabilidade",

        features: [
            
            "Equipamentos sob medida",

            "Economia de água",

            "Materiais de qualidade",

            "Mais segurança"
        ]
    },

    "escada": {
        title: "ESCADAS",

        category: "Indústria alimentícia e geral",

        image: "assets/images/escadas.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústrias em geral",

        description:
            "Equipamento desenvolvido para atender às exigências das indústrias alimentícias com segurança, higiene e durabilidade",

        features: [
            
            "Equipamentos sob medida",

            "Materiais de qualidade",

            "Mais segurança"
        ]
    },

    "carro-transporte": {
        title: "CARROS TRANSPORTADORES",

        category: "Indústria alimentícia e geral",

        image: "assets/images/carro-transportador.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústrias em geral",

        description:
            "Equipamento desenvolvido para atender às exigências das indústrias alimentícias com segurança, higiene e durabilidade",

        features: [
            
            "Equipamentos sob medida",

            "Materiais de qualidade",

            "Mais segurança"
        ]
    },

    "calhas-ralos": {
        title: "CALHAS E RALOS",

        category: "Indústria alimentícia e geral",

        image: "assets/images/calhas-ralos.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústrias em geral",

        description:
            "Equipamentos desenvolvidos para atender às exigências das indústrias alimentícias com segurança, higiene e durabilidade",

        features: [
            
            "Equipamentos sob medida",

            "Materiais de qualidade",

            "Mais segurança"
        ]
    },

    "carrinho-movimentacao": {
        title: "CARRINHOS PARA MOVIENTAÇÃO DE CAIXAS",

        category: "Indústrias em geral",

        image: "assets/images/carrinho-cx.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústrias em geral",

        description:
            "Fabricados com materiais de excelente qualidade, são a solução ideal para empresas que buscam durabilidade, produtividade e redução do esforço operacional.",

        features: [
            
            "Esttutura metálica de alta resistência",

            "Design ergonômico para melhor manuseio",

            "Rodas pneumáticas que absorvem impactos e facilitam o transporte em diferentes pisos",

            "Ideal para caixas, fardos, sacarias e diversos tipos de carga"
        ]
    },

    "carro-plataforma": {
        title: "CARRINHOS PLATAFORMA",

        category: "Indústrias em geral",

        image: "assets/images/carrinho-plataforma.jpg",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Indústrias em geral",

        description:
            "Fabricados com materiais de excelente qualidade, são a solução ideal para empresas que buscam durabilidade, produtividade e redução do esforço operacional.",

        features: [
            
            "Plataforma metálica reforçada de alta durabilidade",

            "Alça tubular ergonômica para condução confortável",

            "Rodas giratórias de alta resistência para melhor dirigibilidade",

            "deal para movimentação de caixas, equipamentos, produtos e mercadorias em geral"
        ]
    },

     "guarda-corpo": {
        title: "GUARDA-CORPO EM AÇO INOX",

        category: "Geral",

        image: "assets/images/guarda-corpo-1.jpg",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Geral",

        description:
            "Item sob medida para rampas, escadas e áreas externas, unindo segurança e acabamento.",

        features: [

            "Fábricado sob medida",

            "Desing moderno",

            "Mais segurança"
            
        ]
    },


    "churrasqueira-inox": {
        title: "CHURRASQUEIRA EM AÇO INOX ",

        category: "Geral",

        image: "assets/images/churrasqueira.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Geral",

        description:
            "A Churrasqueira Inox combina resistência, praticidade e um acabamento sofisticado, sendo ideal para quem busca qualidade e durabilidade. ",

        features: [

            "Fábricado sob medida",

            "Resistente a corrosão",

            "Alto desempenho no preparo",

            "Fácil limpeza"
            
        ]
    },

    "churrasqueira-deslizante": {
        title: "CHURRASQUEIRA COM GRELHA DESLIZANTE",

        category: "Geral",

        image: "assets/images/churraqueira-grelha.png",

        material: "Aço inox 304",

        fabrication: "Fabricado sob medida",

        application: "Geral",

        description:
            "A Churrasqueira combina resistência, praticidade e um acabamento sofisticado, sendo ideal para quem busca qualidade e durabilidade. ",

        features: [

            "Fábricado sob medida",

            "Resistente a corrosão",

            "Alto desempenho no preparo",

            "Fácil limpeza"
            
        ]
    },

    "esteira-tora": {
        title: "ESTEIRAS DE TORA",

        category: "Indústria madereira",

        image: "assets/images/esteira.png",

        material: "Consultar",

        fabrication: "Fabricado sob medida",

        application: "Indústrias Madereiras",

        description:
            "Resistência, precisão e produtividade para o processamento de madeira.",

        features: [

            "Estrutura robusta",

            "Alto desempenho",

            "Manutenção facilitada",

            "Versatilidade"
            
        ]
    },

    "virador-tora": {
        title: "VIRADOR DE TORA",

        category: "Indústria madereira",

        image: "assets/images/vira-tora.png",

        material: "Consultar",

        fabrication: "Fabricado sob medida",

        application: "Indústrias Madereiras",

        description:
            "Resistência, precisão e produtividade para o processamento de madeira.",

        features: [

            "Estrutura robusta",

            "Alto desempenho",

            "Manutenção facilitada",

            "Versatilidade"
            
        ]
    },


};


/* =========================================================
   MODAL DE PRODUTO
   ========================================================= */

const productModal =
    document.getElementById("productModal");

const modalProductImage =
    document.getElementById("modalProductImage");

const modalProductTitle =
    document.getElementById("modalProductTitle");

const modalProductCategory =
    document.getElementById("modalProductCategory");

const modalProductDescription =
    document.getElementById("modalProductDescription");

const modalProductMaterial =
    document.getElementById("modalProductMaterial");

const modalProductFabrication =
    document.getElementById("modalProductFabrication");

const modalProductApplication =
    document.getElementById("modalProductApplication");

const modalProductFeatures =
    document.getElementById("modalProductFeatures");

const modalProductWhatsapp =
    document.getElementById("modalProductWhatsapp");


/* =========================================================
   ABRIR PRODUTO
   ========================================================= */

function openProductModal(productId) {

    const product = products[productId];

    if (!product) {

        console.error(
            "Produto não encontrado:",
            productId
        );

        return;
    }


    /* IMAGEM */

    modalProductImage.src =
        product.image;

    modalProductImage.alt =
        product.title;


    /* TÍTULO */

    modalProductTitle.textContent =
        product.title;


    /* CATEGORIA */

    modalProductCategory.textContent =
        product.category;


    /* DESCRIÇÃO */

    modalProductDescription.textContent =
        product.description;


    /* MATERIAL */

    modalProductMaterial.textContent =
        product.material;


    /* FABRICAÇÃO */

    modalProductFabrication.textContent =
        product.fabrication;


    /* APLICAÇÃO */

    modalProductApplication.textContent =
        product.application;


    /* CARACTERÍSTICAS */

    modalProductFeatures.innerHTML = "";


    product.features.forEach(feature => {

        const li =
            document.createElement("li");

        li.textContent =
            feature;

        modalProductFeatures.appendChild(li);

    });


    /* WHATSAPP */

    const message =
        `Olá! Gostaria de solicitar um orçamento para o produto: ${product.title}`;

    modalProductWhatsapp.href =
        `https://wa.me/554830534563?text=${encodeURIComponent(message)}`;


    /* ABRIR */

    productModal.classList.add("is-open");

    productModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   FECHAR MODAL
   ========================================================= */

function closeProductModal() {

    productModal.classList.remove(
        "is-open"
    );

    productModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* BOTÃO X */

document
    .getElementById("productModalClose")
    .addEventListener(
        "click",
        closeProductModal
    );


/* CLIQUE NO FUNDO */

document
    .getElementById("productModalBackdrop")
    .addEventListener(
        "click",
        closeProductModal
    );


/* ESC */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            productModal.classList.contains("is-open")
        ) {

            closeProductModal();

        }

    }
);


document
    .querySelectorAll(".product-title")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const productId =
                    this.dataset.product;

                openProductModal(
                    productId
                );

            }
        );

    });
});
