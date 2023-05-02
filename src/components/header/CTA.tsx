import CV from "../../assets/Mahdi_Iranshahi.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV}>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
