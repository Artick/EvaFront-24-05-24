(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();document.querySelector("#downloadBtn").addEventListener("click",async()=>{const{jsPDF:n}=window.jspdf,i=new n,a=document.querySelector(".cv"),e=(await html2canvas(a)).toDataURL("image/png");i.addImage(e,"PNG",10,10,190,0),i.save("frontendDeveloperJorgeJoelAnayaMoreno.pdf")});document.querySelector("#app").innerHTML=`
  <div class="cv">
  <div class="info">
    <p><strong>Nombre:</strong> Jorge Joel Anaya Moreno</p>
    <p><strong>Teléfono:</strong> (+52) 735-198-9157</p>
    <p><strong>Correo electrónico:</strong> <a href="mailto:artick.mx@gmail.com">artick.mx@gmail.com</a></p>
    <p><strong>Linkedin:</strong> <a href="http://Linkedin.com/in/artick">Linkedin.com/in/artick</a></p>
</div>
<div class="resume">
    <p>Frontend developer con 13 años de experiencia en desarrollo web y aplicaciones móviles, especializado en HTML5, CSS3, JavaScript y librerías como Vue.js React.js Angular.</p>
    <p>Apasionado por el aprendizaje continuo y compromiso constante por aportar soluciones creativas y eficientes a problemas complejos.</p>
    <p>Trabajador en equipo con excelentes habilidades de comunicación, alta calidad de trabajo, determinado y altamente auto motivado.</p>
</div>
<div class="experience">
    <p><strong>Experiencia Laboral:</strong></p>
    <div class="previus-jobs">
        <p>Frontend Developer | Freelancer | Remoto, México | julio 2023 - Actualidad</p>
        <ul>
            <li>Desarrollo y mantenimiento de aplicaciones web, ecommerce basados en woocommerce y sitios web basados en wordpress.</li>
        </ul>
    </div>
    <div class="previus-jobs">
        <p>Hybris Frontend Developer | Neoris | Remoto, México | enero 2022 - julio 2023</p>
        <ul>
            <li>Desarrollo y mantenimiento de tres ecommerce nacionales y uno internacional en CEMEX.</li>
            <li>Estimación de tareas, requerimientos y desarrollo. </li>
            <li>Colaboración con equipos multifuncionales para cumplir con los objetivos del proyecto.</li>
            <li>Trabajo remoto con Microsoft Teams, Jira, Slack, Bitbucket, scrum.</li>
        </ul>
    </div>
    <div class="previus-jobs">
        <p>Programmer Lead | God mode.gg | Remoto | mayo 2019 - enero 2020</p>
        <ul>
            <li>Programación de una aplicación móvil en Flutter, usando Firebase como backend y web scraping con Node.js para obtención de los datos. Generación de notificaciones.</li>
            <li>Participación en pruebas de calidad y depuración de código.</li>
            <li>Lideró un equipo pequeño de dos personas en el desarrollo.</li>
        </ul>
    </div>
    <div class="previus-jobs">
        <p>Frontend Developer | Freelancer | Remoto, México | mayo 2013 - mayo 2016</p>
        <ul>
            <li>Desarrollo y mantenimiento de sitios web</li>
            <li>Creación de sitios web a medida del cliente</li>
            <li>Landing pages pixelperfect</li>
        </ul>
    </div>
    <div class="previus-jobs">
        <p>
            Encuestador Capturista | Gobierno del estado de Morelos | mayo 2012 - mayo 2013
        </p>
        <ul>
            <li>Toma y captura de encuestas y peticiones para apoyar a la población más vulnerable. El área era la encargada de recibir las peticiones de los programas filiales al gobierno federal.</li>
        </ul>
    </div>
    <div class="previus-jobs">
        <p>Freelancer | Remoto, México | diciembre 2011 - mayo 2012</p>
        <ul>
            <li>
                Desarrolló páginas para una contratista en Veracruz
            </li>
            <li>
                Sistemas de administración básico en vainilla php, landing pages, y CMS basados en html5, css3 y Javascript
            </li>
        </ul>
    </div>
</div>
<div class="education">
    <p><strong>Educación</strong></p>
    <p>Maestría en ciencias de la computación | CENIDET | Cuernavaca, México | 2014 - 2016</p>
    <p>Ingeniero en sistemas computacionales | TECNM | Cuautla, México | 2008 - 2013</p>
</div>
<div class="skills">
    <p><strong>Habilidades Técnicas</strong></p>
    <p><strong>Lenguajes de programación:</strong>  HTML5, CSS3, JavaScript (más de 6 años de experiencia), Node.js Vue.js, React.js, Angular, Java, Dart, Flutter</p>
    <p><strong>Frameworks:</strong>  SASS, Stylus, Hybris Frontend</p>
    <p><strong>Bases de datos:</strong>  MySQL, MongoDB, Firebase</p>
    <p><strong>Herramientas de control de versiones:</strong>  git, GitHub, Bitbucket</p>
    <p><strong>Metodologías Ágiles:</strong>  Scrum</p>
</div>



  </div>
`;
