export const SectionContato = () => {
  const handleNavigate = (value: string) => () => {
    switch (value) {
      case "Email":
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=kauacruzps@gmail.com",
          "_blank",
        );
        break;
      case "GitHub":
        window.open("https://github.com/KauaCruzPereira", "_blank");
        break;
      case "LinkedIn":
        window.open("https://linkedin.com/in/kauã-cruz-pereira", "_blank");
        break;
      case "WhatsApp":
        window.open("https://wa.me/5548991596521", "_blank");
        break;
    }
  };

  return (
    <section className="section section-contato">
      <span className="tag">Contato</span>
      <h2 className="sec-title">Vamos conversar</h2>
      <p className="sec-body">
        Aberto a projetos freelance, colaborações e oportunidades.
      </p>
      <div className="contact-grid">
        {[
          {
            label: "Email",
            val: "kauacruzps@email.com",
          },
          {
            label: "GitHub",
            val: "@KauaCruzPereira",
          },
          {
            label: "LinkedIn",
            val: "/in/kauã-cruz-pereira",
          },
          {
            label: "WhatsApp",
            val: "48 99159-6521",
          },
        ].map((c) => (
          <div
            key={c.label}
            className="contact-card"
            onClick={handleNavigate(c.label)}
          >
            <div className="c-label">{c.label}</div>
            <div className="c-val">{c.val}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
