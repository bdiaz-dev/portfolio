import { captures, technologies } from './imgs.js'

export const es = {
  header: {
    titles: 'Desarrollador Frontend & Videojuegos Indie'
  },
  about: {
    title: 'Sobre mi',
    text: 'Soy una persona con una curiosidad infinita, especialmente en lo que respecta a la tecnología. Esto siempre me ha llevado a investigar cómo funcionan las cosas y a comprobar si soy capaz de hacerlas. Fue gracias a que un día decidí explorar el mundo del desarrollo independiente de videojuegos que descubrí una verdadera pasión: la programación. Me encanta construir tanto juegos como aplicaciones web con experiencias de usuario agradables y/o divertidas, y estoy siempre abierto a nuevos proyectos.'
  },
  projects: {
    title: 'Proyectos',
    jobs: [
      {
        title: 'Ona Games',
        text: 'La pagina web de mi desarrolladora Indie de Videojuegos.',
        description: [
          'En esta pagina web desarrollada con React se puede encontrar la información referente al estudio de videojuegos independiente que le da imagen de marca a mis juegos.',
          'Este proyecto lo pospuse hasta tener los conocimientos necesarios sobre React y React Router. Ademas de ser la manera de trabajar por primera vez con enrutamiento en aplicación. Gracias a este descubrí la importancia de los renderizados en servidor (SSR), ya que no me era posible acceder a una ubicación directamente por URL o simplemente refrescar la pagina estando en producción. Cosa que solucioné, en este caso que renderiza en cliente, con "createHashRouter".',
          'Dispone de selector de idioma dinámico, además de la detección automática del que esté configurado en el navegador.',
          'En la pagina de cada juego se pueden abrir modales que muestran tanto las imagenes en grande o, en el primero de ellos, el trailer.',
          'También hay integrado en la pagina de contacto un formulario para este fin.'
        ],
        urls: {
          site: 'https://onagames.netlify.app/',
          github: 'https://github.com/bdiaz-dev/OnaGamesStudioWeb'
        },
        img: captures.onaGames,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.reactRouter
        ]
      },
      {
        title: 'Editorial Dinav',
        text: 'Aplicación para hacer lista de lectura sobre Editorial inventada.',
        description: [
          'Creé este proyecto a modo de ejercicio para practicar mis conocimientos con React y los estados globales, los cuales gestioné con Zustand.',
          'En esta aplicación se puede encontrar una pequeña colección de libros, los cuales se pueden agregar a una lista de lectura personal.',
          'La lista de lectura se puede gestionar mediante un desplegable en la parte inferior de la pantalla, el cual muestra también el numero de elementos que contiene.',
          'Para la manipulación de los libros se abre un modal cuando se pulsa en uno de ellos, que muestra la información del mismo y el boton con el cual se puede añadir a la lista.',
          'La colección inicial se puede filtrar por género y se puede marcar una opción que muestra u oculta los agregados a la lista de lectura.',
          'Este proyecto es escalable en su totalidad, pudiendo agregar mas libros a la colección o mas filtros de busqueda sin afectar a su comportamiento. Y se ha cuidado el detalle de ofrecer animaciones suaves y alertas emergentes que mejoren la experiencia de usuario, haciendo que usarla sea agradable e intuitivo.'
        ],
        urls: {
          site: 'https://lista-lectura-brunodiaz.netlify.app/',
          github: 'https://github.com/bdiaz-dev/lista-lectura'
        },
        img: captures.listaLectura,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.zustand
        ]
      },
      {
        title: 'React shop',
        text: 'Mi primer trabajo de ensayo para aprender react.',
        description: [
          'Esta es una aplicación muy simple para practicar el manejo de estados globales en forma de carrito de compra.',
          'Se pueden añadir elementos al carrito y estos mostraran el aviso de que ya han sido añadidos, además, el boton de compra cambiará para mostrar la opcion de añadir una unidad mas.',
          'Dispone de filtros para poder buscar los articulos por categoria o por el precio de partida',
          'El carrito se mostrara en forma de menu desplegable, con un listado en columna. Desde aquí podremos añadir o quitar unidades de cada elemento a comprar, y si llega a cero se borrara de la lista. ',
          'Es un ejemplo simple en el que no dediqué mas tiempo cuando fue funcional aquello que pretendía, pues quería continuar con mi entrenamiento en proyectos mas interesantes.'
        ],
        urls: {
          site: 'https://react-shop-brunodiaz.netlify.app/',
          github: 'https://github.com/bdiaz-dev/react-shop'
        },
        img: captures.reactShop,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.zustand
        ]
      },
      {
        title: 'Weather Now',
        text: 'Una aplicacion de clima escrita en JavaScript puro.',
        description: [
          'Este es uno de mis primeros proyectos que construí mientras aprendía JavaScript. Me sirivió para conocer plenamente el funcionamiento de este lenguaje, su manipulacion del DOM, trabajar con el objeto window, callbacks, control de variables, localStorage y muchas otras funcionalidades que aun no habia puesto en practica.',
          'La aplicacion dispone de acceso a la geolocalización del navegador previa consulta al usuario. Pero tambien puede buscar localizaciones a petición. Y guardara todas en el almacenamiento local del navegador para tenerlas siempre disponible. También podemos eliminar varios o todos los elementos de esa lista mediante su correspondiente botón.',
          'Podremos ver el clima actual de la localizacion elegida con algunos datos detallados, así como un resumen de las próximas previsiones en tramos de 3 horas.',
          'Y para la lectura de la información podremos cambiar entre los formatos Farengheith o Celsius, y la web elegira entre ingles o español en función del idioma predeterminado del navegador.'
        ],
        urls: {
          site: 'https://weathernow-by-brunodiaz.netlify.app/',
          github: 'https://github.com/bdiaz-dev/weatherApp-javaScript-vanilla'
        },
        img: captures.weatherNow,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript
        ]
      },

      {
        title: 'Block Survivor',
        text: 'Juego para Android tipo Arcade 80s hecho con Godot.',
        description: [
          'Este es mi mas ambicioso proyecto, en lo que respecta al desarrollo de videojuegos indie, hasta la fecha.',
          'Se trata de un juego tipo Arcade con estetica inspirada en los 80, en el cual el jugador ha de superar una serie de niveles llenos de obstaculos usando solo su habilidad moviendo la nave de un lado a otro para pasar a través de unos bloques que dificultan el viaje.',
          'Me ha ofrecido un proceso de desarrollo laborioso, inspirador y emocionante a la par que desafiante. Y fué la razón por la que decidí entrar en la programación de forma profesional, debido a que me apasionó codificar el comportamiento de todo.',
          'Tiene todo tipo de funcionalidades como: gestión de datos de jugador guardados en la nube, misiones que se van actualizando en tiempo real durante la partida, una tienda de Aspectos para la nave, modos de juego extra que aprovechan los niveles originales cambiando las reglas, etc... . Les invito a probar una partida, es muy adictivo...',
          'Hay muchas partes de este proyecto que fueron duras de programar; pero en especial, una de las que mas orgulloso estoy, es del menu principal. Este menu lo desarrolle por completo de cero sin utilizar las herramientas preestablecidas del motor, pues queria algo muy concreto con unos comportamientos determinados. Por lo que cada funcionalidad, comportamiento de botones, paginas o selección de modos de juego y/o aspectos fueron programados directamente con lógica. Lo cual me aportó muchisima habilidad en este campo.'
        ],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.blocksurvivor',
          github: null
        },
        img: captures.blockSurvivor,
        tech: [
          technologies.godot
        ]
      },
      {
        title: 'Amigos de Palabras',
        text: 'Miniapp para jugar IRL a juegos de adivinar palabras, para Android y hecha con Godot.',
        description: [''],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.amigospalabras',
          github: null
        },
        img: captures.amigosPalabras,
        tech: [
          technologies.godot
        ]
      }
    ]
  },
  skills: {
    title: 'Habilidades'
  },
  footer: [
    'Este portfolio ha sido desarrollado con React y compilado con Vite.',
    'Puede acceder a su repositorio haciendo click ',
    ' aquí.',
    'Si tiene un proyecto en mente no dude en ', 'contactarme.'
  ],
  menu: {
    about: 'Sobre mi',
    projects: 'Proyectos',
    skills: 'Habilidades',
    repo: 'Repositorio GitHub',
    go: 'Visitar proyecto'
  }
}

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

export const en = {
  header: {
    titles: 'Frontend Developer & Indie Games'
  },
  about: {
    title: 'About me',
    text: 'I am an individual with boundless curiosity, particularly in the realm of technology. This innate curiosity has consistently driven me to explore the inner workings of things and determine my capacity to accomplish them. It was through my decision to delve into the realm of indie games development that I unearthed a genuine passion: programming. I thoroughly enjoy creating both games and web applications that provide enjoyable and/or engaging user experiences, and I am constantly receptive to new projects.'
  },
  projects: {
    title: 'Projects',
    jobs: [
      {
        title: 'Ona Games',
        text: 'The website of my Indie Game Development studio.',
        description: [
          'On this React-developed website, you can find information related to the study of independent video games that gives a brand identity to my games.',
          'I postponed this project until acquiring the necessary knowledge about React and React Router, as it marked my first experience with application routing. Through this project, I discovered the significance of server-side rendering (SSR), as direct URL access or simply refreshing the page while in production was not feasible. I addressed this issue, in the case of client-side rendering, by implementing "createHashRouter."',
          'It features a dynamic language selector, along with automatic detection based on the language configured in the browser.',
          'On each game\'s page, modals can be opened to display either enlarged images or, in the case of the first one, the trailer.',
          'Additionally, a contact form is integrated into the contact page for this purpose.'
        ],
        urls: {
          site: 'https://onagames.netlify.app/',
          github: 'https://github.com/bdiaz-dev/OnaGamesStudioWeb'
        },
        img: captures.onaGames,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.reactRouter
        ]
      },
      {
        title: 'Editorial Dinav',
        text: 'Application for creating a reading list for a fictional publishing house.',
        description: [
          'I created this project as an exercise to practice my skills with React and global states, which I managed using Zustand. In this application, you can find a small collection of books that can be added to a personal reading list.',
          'The reading list can be managed through a dropdown at the bottom of the screen, which also displays the number of items it contains. For book manipulation, a modal opens when you click on a book, displaying its information and a button to add it to the list.',
          'The initial collection can be filtered by genre, and an option allows you to show or hide items added to the reading list. This project is fully scalable, allowing the addition of more books to the collection or more search filters without affecting its behavior.',
          'Great attention has been given to detail, offering smooth animations and pop-up alerts to enhance the user experience, making it enjoyable and intuitive to use.'],
        urls: {
          site: 'https://lista-lectura-brunodiaz.netlify.app/',
          github: 'https://github.com/bdiaz-dev/lista-lectura'
        },
        img: captures.listaLectura,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.zustand
        ]
      },
      {
        title: 'React shop',
        text: 'My first essay project to learn React.',
        description: [
          'This is a very simple application to practice managing global states in the form of a shopping cart.',
          'Items can be added to the cart and they will show the notice that they have already been added, in addition, the purchase button will change to show the option to add one more unit.',
          'It has filters to be able to search for items by category or by starting price',
          'The cart will be displayed in the form of a drop-down menu, with a column listing. From here we can add or remove units of each item to buy, and if it reaches zero it will be deleted from the list. ',
          'It\'s a simple example in which I didn\'t spend more time when what I intended was functional, because I wanted to continue my training on more interesting projects.'
        ],
        urls: {
          site: 'https://react-shop-brunodiaz.netlify.app/',
          github: 'https://github.com/bdiaz-dev/react-shop'
        },
        img: captures.reactShop,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript,
          technologies.vite,
          technologies.react,
          technologies.zustand
        ]
      },
      {
        title: 'Weather Now',
        text: 'A weather application written in pure JavaScript.',
        description: [
          'This is one of my first projects that I built while learning JavaScript. It helped me to fully understand how this language works, its manipulation of the DOM, working with the window object, callbacks, variable control, localStorage and many other functionalities that I had not yet put into practice.',
          'The application has access to the browses\'s geolocation after consulting the user. But you can also search for locations on request. And it will save all of them in the browser\'s local storage to always have them available. We can also delete several or all of the elements from that list using the corresponding button.',
          'We will be able to see the current weather of the chosen location with some detailed data, as well as a summary of the upcoming forecasts in 3-hour sections.',
          'And to read the information we can change between Farengheith or Celsius formats, and the website will choose between English or Spanish depending on the default language of the browser.'
        ],
        urls: {
          site: 'https://weathernow-by-brunodiaz.netlify.app/',
          github: 'https://github.com/bdiaz-dev/weatherApp-javaScript-vanilla'
        },
        img: captures.weatherNow,
        tech: [
          technologies.html,
          technologies.css,
          technologies.javaScript
        ]
      },

      {
        title: 'Block Survivor',
        text: 'An arcade-style 80s game for Android created using Godot.',
        description: [
          'Este es mi mas ambicioso proyecto, en lo que respecta al desarrollo de videojuegos indie, hasta la fecha.',
          'Se trata de un juego tipo Arcade con estetica inspirada en los 80, en el cual el jugador ha de superar una serie de niveles llenos de obstaculos usando solo su habilidad moviendo la nave de un lado a otro para pasar a través de unos bloques que dificultan el viaje.',
          'Me ha ofrecido un proceso de desarrollo laborioso, inspirador y emocionante a la par que desafiante. Y fué la razón por la que decidí entrar en la progrmación de forma profesional, debido a que me apasionó codificar el comportamiento de todo',
          'Tiene todo tipo de funcionalidades como: gestión de datos de jugador guardados en la nube, misiones que se van actualizando en tiempo real durante la partida, una tienda de Aspectos para la nave, modos de juego extra que aprovechan los niveles originales cambiando las reglas, etc... . Les invito a probar una partida, es muy adictivo...',
          'Hay muchas partes de este proyecto que fueron duras de programar; pero en especial, una de las que mas orgulloso estoy, es del menu principal. Este menu lo desarrolle por completo de cero sin utilizar las herramientas preestablecidas del motor, pues queria algo muy concreto con unos comportamientos determinados. Por lo que cada funcionalidad, comportamiento de botones, paginas o selección de modos de juego y/o aspectos fueron programas directamente con lógica. Lo cual me aportó muchisima habilidad en este campo.'
        ],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.blocksurvivor',
          github: null
        },
        img: captures.blockSurvivor,
        tech: [
          technologies.godot
        ]
      },
      {
        title: 'Amigos de Palabras',
        text: 'Mini-app for real-life word guessing games, designed for Android and developed with Godot.',
        description: [''],
        urls: {
          site: 'https://play.google.com/store/apps/details?id=studio.onagames.amigospalabras',
          github: null
        },
        img: captures.amigosPalabras,
        tech: [
          technologies.godot
        ]
      }
    ]
  },
  skills: {
    title: 'Skills'
  },
  footer: [

    'This portfolio has been developed with React and compiled with Vite.',
    'You can access its repository by clicking ',
    'here.',
    'If you have a project in mind, feel free to ', 'contact me.'
  ],
  menu: {
    about: 'About me',
    projects: 'Projects',
    skills: 'Skills',
    repo: 'GitHub repository',
    go: 'Visit project'
  }
}
