import './Testimonial.css';

function Testimonial({ name, country, role, company, quote, image }) {
  return (
    <section>
      <h1>Testimonios</h1>
      <h2>de personas como reales como tu.</h2>
      <article className="testimonialCard">
        <img className="testimonialPhoto" src={image} alt={`Foto de ${name}`} />
        <div className="testimonialContent">
          <h2 className="testimonialHeading">{name} en {country}</h2>
          <p className="testimonialCompany">{company}</p>
          <blockquote className="testimonialQuote">
            <p>{quote}</p>
          </blockquote>
        </div>
      </article>
    </section>
  );
}

export default Testimonial;