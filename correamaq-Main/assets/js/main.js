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

        category: "Alimentícia e Farmacêutica",

        image: "assets/images/tanque.png",

        material: "Aço Inox 304",

        fabrication: "Fabricada sob medida",

        application: "Linhas de produção alimentícias e farmacêuticas",

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

    }

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
