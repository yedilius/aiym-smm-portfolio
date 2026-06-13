import { shootDescription, shootFormats } from "../../data/services";
import { Section } from "../UI/Section";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section id="services" tone="dark" ariaLabel="Разовые съёмки">
      <div className={styles.heading}>
        <h2>Разовые съёмки</h2>
        <p>{shootDescription}</p>
      </div>
      <div className={styles.serviceGrid}>
        {shootFormats.map((format, index) => (
          <article className={styles.serviceCard} key={format}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{format}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
