const mobileMenu = document.querySelector('.mobile-menu');
const mobileHam = document.querySelector('.menu-hamb');

mobileHam.addEventListener('click', toggleMenuMobile);

function toggleMenuMobile(){
    mobileMenu.classList.toggle('inactive');
}

function agregarComentario() {
    const username = document.getElementById('username').value;
    const commentText = document.getElementById('comment').value;

    if (username && commentText) {
        const commentsContainer = document.getElementById('comments-container');

        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const commentContent = document.createElement('p');
        commentContent.innerHTML = `<strong>${username}:</strong> ${commentText}`;

        commentDiv.appendChild(commentContent);
        commentsContainer.appendChild(commentDiv);

        // Limpiar campos del formulario
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Por favor, ingresa tu nombre y comentario.');
    }
}

// Definir routeMap en un ámbito global
const routeMap = {
    "/": showHome,
    "/about": showAbout,
    "/order": showOrder
};

document.addEventListener("DOMContentLoaded", function () {
    // Obtén la ruta actual y carga el contenido correspondiente
    const currentRoute = window.location.pathname;
    if (routeMap[currentRoute]) {
        routeMap[currentRoute]();
    } else {
        showHome();
    }
});

function cargarPagina(ruta) {
    event.preventDefault();
    window.history.pushState({}, '', ruta);

    if (routeMap[ruta]) {
        routeMap[ruta]();
    } else {
        showHome();
    }
}

function showHome() {
    document.getElementById("content").innerHTML = `
    <section class="one">
    <div class="one-div">
        <img class="logo-etiqueta" src="./img/parfait.png" alt="logo granola">
        <h2>¿Sabías qué?</h2>
        <p>
            La granola es un sustituto perfecto para incorporar
            opciones dulces más saludables a la dieta, ya que posee un sabor delicioso y tiene un efecto saciante.
        </p>
    </div> 
</section>

<section class="two">
    <div class="div1">
        <img class="empaque" src="./img/chocogranola.png" alt="logo granola">

    </div>
    <div class="div2">
        
        <h2>Granola's Keto</h2>
        <p>Descubre nuestra deliciosa Granola Keto, creada siguiendo cuidadosamente los 
            principios de la dieta cetogénica, para satisfacer tus antojos sin comprometer tus 
            objetivos nutricionales. Además de ser baja en carbohidratos, nuestra granola está repleta de grasas saludables y 
            proteínas.<br>
         
            <br />Sumérgete en la irresistible combinación de crujientes nueces y semillas tostadas. Es el complemento ideal 
             para tus desayunos, yogures o simplemente disfrutada por sí sola como un delicioso snack y
              nutritivo.<br>
         
            
              <br />¡Descubre el placer de cuidarte con nuestras Granolas Keto hoy mismo!</p>

              <a class="button" href="https://api.whatsapp.com/send?phone=573103548587&=Hola, me gustaria ordernar una Granola">Ordena online</a>

    </div>
</section>
<section class="three">

<div class="comment-box">
<h2>Comentarios</h2>
<p class="bold">Vanesa: </p>
<p class"white">Excelente producto no pierde lo crocante y fresco</p>
<div class="comment-form">
    <label for="username">Nombre:</label>
    <input type="text" id="username" placeholder="Tu nombre">

    <label for="comment">Comentario:</label>
    <textarea id="comment" placeholder="Escribe tu comentario"></textarea>

    <button onclick="agregarComentario()">Agregar Comentario</button>
</div>

<div class="comments" id="comments-container">
    <!-- Los comentarios se agregarán aquí dinámicamente -->
</div>
</div>

<div class="cimg-div">
        <img class="cimg" src="./img/comment.png" alt="logo granola">

</div>



</section>
    `;
}

function showAbout() {
    document.getElementById("content").innerHTML = `
    <section class="divshow">
    <div class="about1">
    <h2 class="habout">Nuestra Historia</h2>
    <p class="aboutp">En Granola's, nuestra historia se teje con la pasión por brindar opciones deliciosas y saludables a aquellos que buscan un estilo de vida consciente. Todo comenzó con la firme convicción de que comer bien no debería ser un sacrificio, sino una experiencia deliciosa y gratificante.</p>
    <p class="aboutp">Nuestro compromiso es ofrecerte un producto que no solo sea delicioso sino que también puedas disfrutar sin remordimientos. Queremos que encuentres en nuestras granolas la combinación perfecta entre sabor y nutrición, un compañero perfecto para tus momentos de snack, desayunos o como ese toque especial en tus platillos cotidianos.</p>
    <p class="aboutp">Gracias por ser parte de nuestra historia. Juntos, estamos creando un camino hacia una alimentación consciente y deliciosamente saludable.</p>
    </div>
    </section>

    <h2 class="ingrediente">Nuestros ingredientes</h2>
    <section class="about2">
    <div class="column">
    <div class="azul"><img src="./img/almendra.jpg" alt="almendra"><p><strong>Almendras:</strong> De acuerdo con la FDA, el consumo diario de almendras se asocia con la prevención de enfermedades cardíacas. La presencia de vitamina E, magnesio y antioxidantes las convierte en una excelente opción para la salud cardiovascular.</p></div>
    <div class="bebe"><img src="./img/macadamia.png" alt="macadamia"><p><strong>Macadamias:</strong> Debido a su alto contenido de vitamina C, contribuyen al fortalecimiento del sistema inmunológico, mientras que su presencia de calcio y fósforo favorece el desarrollo y fortalecimiento de huesos y dientes. Estas nueces también proporcionan magnesio y manganeso.</p></div>
    <div class="azul"><img src="./img/girasol.png" alt="girasol"><p><strong>Semillas de girasol:</strong> Son abundantes en vitamina E, que ofrecen un poderoso efecto antioxidante proporcionando protección contra enfermedades como las cardiovasculares, ciertos tipos de cáncer y complicaciones relacionadas con la diabetes.</p></div>
    </div>
    
    <div class="column">
    <div class="bebe"><img src="./img/calabaza.png" alt="calabaza"><p><strong>Semillas de calabaza:</strong> Las semillas de calabaza contienen numerosos antioxidantes que ayudan a reducir las inflamaciones. Estas propiedades antiinflamatorias son beneficiosas para la salud del hígado, vejiga, intestinos y articulaciones.</p></div>
    <div class="azul"><img src="./img/ajonjoli.png" alt="ajonjoli"><p><strong>Ajonjolí:</strong> Se ha comprobado que el ajonjolí es efectivo contra infecciones bacterianas gracias a sus compuestos antibacterianos que combaten tanto infecciones internas como externas. Además, su alto contenido de fibra dietética facilita la digestión y alivia el estreñimiento.</p></div>
    <div class="bebe"><img src="./img/cacao.png" alt="cacao"><p><strong>Cacao:</strong> Activa el sistema nervioso central y los músculos cardíacos mediante la presencia de teobromina. Además, promueve una sensación de bienestar al estimular la liberación de serotonina, mejorando el estado de ánimo y aliviando el estrés.</p></div>
    </div>
    
    </section>

    `;
}

function showOrder() {
    document.getElementById("content").innerHTML = `

    <section class="two">
    <div class="div1">
        <img class="empaque" src="./img/order.png" alt="logo granola">

    </div>
    <div class="div2">
        <img class="logo-order" src="./img/LOGO-GRANOLA-_111.png" alt="logo granola">
        <h2>Ordena Online</h2>
        <p>Ordena la mejor granola keto y prueba el balance perfecto entre sabor y nutrición.<br>
        <a class="button" href="https://api.whatsapp.com/send?phone=573103548587&=Hola, me gustaria ordernar una Granola">Da click aquí</a>

    </div>

</section>
<section class="sabor">
<div class="tradicional"><img src="./img/calabaza.png" alt="calabaza"><p><strong>Tradicional</strong></p> <p>Viaja al corazón de la tradición saludable con nuestra Granola Keto Tradicional. Una mezcla equilibrada de ingredientes nutritivos para un desayuno lleno de energía. ¡Siente el sabor clásico de lo bueno para ti</p> </p></div>
<div class="frutoRojo"><img src="./img/calabaza.png" alt="calabaza"><p><strong>Tradicional</strong></p> <p>Viaja al corazón de la tradición saludable con nuestra Granola Keto Tradicional. Una mezcla equilibrada de ingredientes nutritivos para un desayuno lleno de energía. ¡Siente el sabor clásico de lo bueno para ti</p> </div>
<div class="chocolate"></div>
</section>
    `;
}

