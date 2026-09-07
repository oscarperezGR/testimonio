import './Testimonial.css';

function Testimonial({ name, country, role, company, quote, image }) {
  return (
    
    <article className="testimonialCard">
      <img className="testimonialPhoto" src={image} alt={`Foto de ${name}`} />
      <div className="testimonialContent">
      <h2 className="testimonialHeading">{name} en {country}</h2>
      <p className="testimonialPosition">{role} en <strong>{company}</strong></p>
      <blockquote className="testimonialQuote">
        <p>{quote}</p>
      </blockquote>
      </div>
    </article>
  );
}

export default Testimonial;