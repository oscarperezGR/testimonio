import './Testimonial.css';

function Testimonial({ name, country, role, company, quote, image }) {
  return (
    
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
  );
}

export default Testimonial;