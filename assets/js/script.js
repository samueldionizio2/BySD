const cards = document.querySelectorAll(".service-card");
const previewTitle = document.querySelector("#preview-title");
const previewDescription = document.querySelector("#preview-description");
const previewFeatures = document.querySelector("#preview-features");
const previewContent = document.querySelector(".service-preview-content");

const previewIcon = document.querySelector(".service-preview-icon");

let selectedService = "web-development";

const services = {
  "web-development": {
    title: "Desenvolvimento Web",
    icon: "./assets/img/Code Xml.svg",
    description:
      "Criamos sites modernos, responsivos e personalizados para apresentar sua marca, divulgar seus serviços ou transformar ideias em soluções digitais.",
    features: [
      "Sites institucionais",
      "Landing pages",
      "Interfaces responsivas",
    ],
  },

  "digital-design": {
    title: "Design Digital",
    icon: "./assets/img/Desktop Windows.svg",
    description:
      "Criamos experiências visuais modernas para fortalecer sua identidade digital e destacar sua marca.",
    features: ["Identidade visual", "Artes digitais", "Layouts modernos"],
  },

  "prototypes-systems": {
    title: "Protótipos e Sistemas",
    icon: "./assets/img/Mobile.svg",
    description:
      "Transformamos ideias em protótipos funcionais e sistemas digitais preparados para validar e evoluir projetos.",
    features: [
      "Protótipos de aplicativos",
      "Modelagem de sistemas",
      "Soluções personalizadas",
    ],
  },

  gamification: {
    title: "Gamificação",
    icon: "./assets/img/Pallete.svg",
    description:
      "Criamos experiências interativas utilizando elementos de jogos para aumentar engajamento e aprendizado.",
    features: [
      "Jogos educativos",
      "Experiências interativas",
      "Projetos em Unity",
    ],
  },

  "digital-consulting": {
    title: "Consultoria Digital",
    icon: "./assets/img/VideoGame Controller.svg",
    description:
      "Auxiliamos na escolha de tecnologias e estratégias digitais para transformar ideias em projetos viáveis.",
    features: [
      "Análise de projetos",
      "Planejamento digital",
      "Orientação tecnológica",
    ],
  },
};

function renderPreview(serviceId, animate = true) {
  const service = services[serviceId];

  if (!service) return;

  if (animate) {
    previewContent.classList.add("fade");
  }

  setTimeout(
    () => {
      previewTitle.textContent = service.title;
      previewDescription.textContent = service.description;
      changeIcon(service.icon);

      previewFeatures.innerHTML = "";

      service.features.forEach((feature) => {
        const li = document.createElement("li");

        li.textContent = `✓ ${feature}`;

        previewFeatures.appendChild(li);
      });

      previewContent.classList.remove("fade");
    },
    animate ? 200 : 0,
  );
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const serviceId = card.dataset.service;

    updatePreview(serviceId, true);
  });

  card.addEventListener("mouseleave", () => {
    const isSelected = card.classList.contains("active");

    if (isSelected) return;

    updatePreview(selectedService);
  });

  card.addEventListener("click", () => {
    const serviceId = card.dataset.service;

    // Se já está selecionado, não faz nada
    if (serviceId === selectedService) {
      return;
    }

    cards.forEach((card) => {
      card.classList.remove("active");
    });

    card.classList.add("active");

    selectedService = serviceId;

    updatePreview(selectedService, false);
  });
});

function changeIcon(newIcon) {

  // Se o ícone já é o mesmo, não anima
  if (previewIcon.src.includes(newIcon)) {
    return;
  }

  previewIcon.classList.add("change-out");

  setTimeout(() => {
    previewIcon.src = newIcon;

    previewIcon.classList.remove("change-out");

    previewIcon.classList.add("change-in");
  }, 250);

  setTimeout(() => {
    previewIcon.classList.remove("change-in");
  }, 600);
}
