import Testimonial from './components/Testimonial/Testimonial';
import shawWang from './assets/img/shawWang.png';
import sarahChima from './assets/img/sarahChima.png';
import emmaBostian from './assets/img/emmaBostian.png';
import carlosMendoza from './assets/img/carlosMendoza.png';
import luciaFernandez from './assets/img/luciaFernandez.png';
import Header from './components/Header/Header';

const testimonials = [
  {
    id: 1,
    name: "Shawn Wang",
    country: "Singapur",
    role: "Ingeniero de software",
    company: "Amazon",
    quote: "Da miedo cambiar de carrera. Solo gané confianza en que podía programar al trabajar con cientos de horas de lecciones gratuitas en freeCodeCamp. En un año conseguí un trabajo con un salario de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
    image: shawWang,
  },
  {
    id: 2,
    name: "Sarah Chima",
    country: "Nigeria",
    role: "Ingeniera de software",
    company: "ChatDesk",
    quote: "freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de nivel principiante hasta un nivel muy seguro. Fue todo lo que necesitaba para conseguir mi primer trabajo como desarrolladora en una empresa increíble.",
    image: sarahChima,
  },
  {
    id: 3,
    name: "Emma Bostian",
    country: "Suecia",
    role: "Ingeniera de software",
    company: "Spotify",
    quote: "Siempre me costó aprender JavaScript. He tomado muchos cursos pero el curso de freeCodeCamp fue el que me quedó. Estudiar JavaScript así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.",
    image: emmaBostian,
  },
  {
    id: 4,
    name: "Carlos Mendoza",
    country: "México",
    role: "Desarrollador Frontend",
    company: "Mercado Libre",
    quote: "freeCodeCamp me enseñó desde cero y a mi propio ritmo. Los proyectos prácticos y la comunidad me dieron la motivación para seguir adelante. Gracias a freeCodeCamp, logré conseguir un trabajo en una de las empresas de tecnología más grandes de Latinoamérica.",
    image: carlosMendoza,
  },
  {
    id: 5,
    name: "Lucía Fernández",
    country: "Argentina",
    role: "Ingeniera de software",
    company: "Globant",
    quote: "Cambió mi forma de ver la programación. freeCodeCamp no solo me dio las habilidades técnicas, sino también la confianza para creer en mí misma. Hoy trabajo como ingeniera de software en una empresa internacional y sigo aprendiendo cada día.",
    image: luciaFernandez,
  },
];

function App() {
  return (
    <>
    <Header />
    <main className="testimonialsList">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} {...testimonial} />
      ))}
    </main>
    </>
  );
}

export default App;