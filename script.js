// Contenidos para cada sección
const sectionTemplates = {

  proyectos: `
    <h2 class="titulo-seccion">📂 Proyectos Recientes</h2>
    <p class="leyenda-estado">📌 pendiente | ✅ completo | ❌ incompleto</p>
    <ul class="lista-proyectos">
      <p> 🔧 Script Bash para backup automático ✅ 📌</p>
      <p> 💻 Aplicación To-Do con Node.js, Express.js y PostgreSQL 📌❌</p>
      <p> 🛒 Carrito de compras con Node.js y PostgreSQL ❌</p>
      <p> 💠 Sitio web personal con HTML, CSS y JavaScript ✅</p>
      <p> 🌐 Portafolio con estética Linux ✅</p>
    </ul>
  `,
  contacto: `
      <h2 class="titulo-seccion">📬 Contacto</h2>
      <form>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
  `,


  sobreMi: `
       <h2>Sobre Mi</h2>
      <p>
        Hola, soy Facundo De León 👋
        <br />
        Desarrollador Full Stack, Trabajo principalmente con Next.js para desarrollar tanto el frontend como el backend, aprovechando su flexibilidad y rendimiento para crear soluciones escalables.
Además, manejo bases de datos relacionales como PostgreSQL para garantizar la integridad y eficiencia del manejo de datos.
        <br /><br />
        Complemento mis habilidades técnicas con conocimientos en soporte técnico, ciberseguridad básica y mantenimiento de hardware, lo que me permite tener una visión integral de los sistemas que desarrollo y administro.
Siempre busco proyectos donde pueda aportar valor real, aprendiendo y creciendo profesionalmente.
        Explorá mis proyectos y servicios, y descubrí cómo puedo ayudarte a llevar tu tecnología al siguiente nivel.
      </p>
      <a  href="https://github.com/fdLeon-dev" class="btn-contact"> <strong>Conocé más sobre mí</a>
  `,

  tecnologias: `
          <table>
            <caption><strong>Frontend</strong></caption>
            <tbody>
              <tr>
                <td>HTML5</td>
              </tr>
              <tr>
                <td>CSS3 (con experiencia en diseño responsivo)</td>
              </tr>
              <tr>
                <td>JavaScript (ES6+)</td>
              </tr>
              <tr>
                <td>React.js</td>
              </tr>
              <tr>
                <td>Next.js (SSR y SSG)</td>
              </tr>
              <tr>
                <td>TailwindCSS (para estilos rápidos y modernos)</td>
              </tr>
            </tbody>
             <table>
             <br><br>
            <caption><strong>Backend</strong></caption>
            
    `
};


// clic en navbar
document.querySelectorAll('#barra-navegacion a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionKey = link.dataset.section;
    const contentSection = document.getElementById('content');

    // out
    contentSection.style.opacity = 0.3;

    setTimeout(() => {
      contentSection.innerHTML = sectionTemplates[sectionKey] || "<p>Sección no encontrada.</p>";
      contentSection.style.opacity = 1;
    }, 300);
  });
});


//encabezado pause

const musica = document.getElementById('miMusica');
const boton = document.getElementById('encabezado');

boton.addEventListener('click', () => {
  musica.muted = !musica.muted;

});
