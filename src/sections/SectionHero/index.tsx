import { useNavigation } from "../../hooks/useNavigation";

export const SectionHero = () => {
  const { current, goTo } = useNavigation();
  const goNext = () => goTo(current + 1);

  return (
    <section className="section section-hero">
      <span className="tag">Bem vindo ao meu portfólio</span>
      <h1 className="hero-title">
        Olá, me chamo <span className="outlined">Kauã</span>
      </h1>
      <p className="subtitle">desenvolvedor · inovador · criador</p>
      <button className="btn-explore" onClick={goNext}>
        Explorar mais →
      </button>
    </section>
  );
};
