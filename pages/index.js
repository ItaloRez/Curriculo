import React, { useEffect, useRef } from 'react'
export default function Home() {


  const btnScroll = useRef();

  //btnScroll.addEventListener("click", () => btnScroll.style.display = 'none');

  useEffect(() => {
    reveal()
    window.onscroll = () => reveal()
  }, [])


  

  function reveal() {
    var lastKnownScrollPosition = window.scrollY;
    var reveals = document.querySelectorAll(".reveal");

    if (lastKnownScrollPosition < 55) {
      btnScroll.current.style.display = ''
    } else {
      btnScroll.current.style.display = 'none'

    }

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    
    <div onScroll={reveal}>

      <svg className='top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#7fe4ef" fillOpacity="1"
          d="M0,224L26.7,234.7C53.3,245,107,267,160,282.7C213.3,299,267,309,320,293.3C373.3,277,427,235,480,229.3C533.3,224,587,256,640,240C693.3,224,747,160,800,133.3C853.3,107,907,117,960,138.7C1013.3,160,1067,192,1120,186.7C1173.3,181,1227,139,1280,128C1333.3,117,1387,139,1413,149.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
        </path>
      </svg>

      <div className="container">
        <div className="row mb gap small-row">
          <div className="col-2">
            <img className="shadow avatar" src="fotin.png" />
          </div>
          <div className="col">
            <div className="name shadow">
              <div className="title">
                <h1>Ítalo de Rezende</h1>
                <h2>Programador Front-end</h2>
              </div>
              <p>
                Olá, sou o Ítalo! Moro atualmente em <strong>Santa Rita do Sapucaí - MG</strong>. Estudo
                programação desde o ensino médio, e recentemente
                comecei a me interessar bastante pela parte de desenvolvimento web. Tenho
                afinidade com a bibliteca React, já tendo montando alguns projetos e
                concluido um curso na mesma. Os projetos estão no meu github, caso queiram
                visualizá-los <a href="https://github.com/ItaloRez">https://github.com/ItaloRez</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb gap reveal fade-right small-row">
          <div className="col-5">
            <div className="shadow education">
              <h3>Educação</h3>
              <div className="row gap-1">
                <div className="border-rounded"></div>
                <ul>
                  <li>
                    <h4>Instituto Federal do Sul de Minas - Técnico em informática</h4>
                    <p>Ensino Médio (2013-2015)</p>
                  </li>
                  <li>
                    <h4>IF Sul de Minas - Técnologo em Redes de Computadores</h4>
                    <p>Ensino Superior (2016-2018)</p>
                  </li>
                  <li>
                    <h4>Inatel - Engenharia de Computação</h4>
                    <p>Ensino Superior (2019 - atual)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="shadow education">
              <h3>Cursos</h3>
              <div className="row gap-1">
                <div className="border-rounded"></div>
                <ul>
                  <li>
                    <h4>React JS + Firebase + Bootstrap: projeto passo á passo</h4>
                    <p>Finalizado</p>
                  </li>
                  <li>
                    <h4>React Native: Desenvolva APPs Nativas para Android e iOS</h4>
                    <p>Em andamento</p>
                  </li>
                  <li>
                    <h4>Construindo Aplicações Web Com o Novo Angular (4, 5 e 6)</h4>
                    <p>Em andamento</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row scroll-btn">
          <a id="btn-scroll" ref={btnScroll} href="#section2">
            <img src="arrow.svg" />
          </a>
        </div>

        <section id="section2" className="reveal fade-left">
          <div className="row mb gap small-row">
            <div className="col-5">
              <div className="shadow education">
                <h3>Skills de programação</h3>
                <div className="row gap-2 p">
                  <div className="col">
                    <div className="skills">
                      <div className="skill">
                        <div></div>
                        <text>HTML 5</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#a5bdf5" }}></div>
                        <text>CSS</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#92eec0" }}></div>
                        <text>JavaScript</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#fecaa1" }}></div>
                        <text>React</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#8fdfb5" }}></div>
                        <text>React Native</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#96cbec" }}></div>
                        <text>Figma</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#d2d8e0" }}></div>
                        <text>Node</text>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skills">
                      <div className="skill">
                        <div style={{ backgroundColor: "aqua" }}></div>
                        <text>Angular</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#fdadb2" }}></div>
                        <text>MySQL</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#8ee8d0" }}></div>
                        <text>Firebase</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#f48f93" }}></div>
                        <text>Supabase</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#f6a5b3" }}></div>
                        <text>Git</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#95e5dc" }}></div>
                        <text>Next</text>
                      </div>
                      <div className="skill">
                        <div style={{ backgroundColor: "#fcb98d" }}></div>
                        <text>Bootstrap</text>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="shadow education h-100">
                <h3>Hobbies</h3>
                <div className="hobbies">
                  <div className="row gap-30 h-50">
                    <div className="hobbie shadow">
                      <img src="game.svg" />
                      <p>Games</p>
                    </div>
                    <div className="hobbie shadow">
                      <img src="series.svg" />
                      <p>Series</p>
                    </div>
                  </div>

                  <div className="row gap-30 h-50">
                    <div className="hobbie shadow">
                      <img src="guitar.svg" />
                      <p>Violão</p>
                    </div>
                    <div className="hobbie shadow">
                      <img src="soccer.svg" />
                      <p>Futebol</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="row ">
          <div className="col shadow">
            <div className="footer">
                <div>
                  <a href="mailto:italo.rezende@gec.inatel.br">
                    <img src="email.svg" />
                  </a>
                  <a href="mailto:italo.rezende@gec.inatel.br" className='text-icon'>
                    italo.rezende@gec.inatel.br
                  </a>
                </div>
                <div>
                  <a href="https://github.com/ItaloRez" target="_blank" rel="noreferrer" >
                    <img src="github.svg" />
                  </a>
                  <a href="https://github.com/ItaloRez" target="_blank" rel="noreferrer" className='text-icon'>
                    https://github.com/ItaloRez
                  </a>
                </div>
                <div>
                  <a href="https://api.whatsapp.com/send?phone=5535998650649&text=Olá!!" target="_blank" rel="noreferrer" >
                  <img src="whatsapp.svg" /></a>
                  <a href="https://api.whatsapp.com/send?phone=5535998650649&text=Olá!!" target="_blank" rel="noreferrer" className='text-icon'>
                    (35)99865-0649
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/%C3%ADtalo-rezende-60a5571b2/" target="_blank" rel="noreferrer" >
                  <img src="linkedin.svg" /></a>
                  <a href="https://www.linkedin.com/in/%C3%ADtalo-rezende-60a5571b2/" target="_blank" rel="noreferrer" className='text-icon'>
                    LinkedIn
                  </a>
                </div>
            </div>
          </div>
        </div>


      </div>
      <svg className="bot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#7fe4ef" fillOpacity="1"
          d="M0,96L26.7,122.7C53.3,149,107,203,160,202.7C213.3,203,267,149,320,138.7C373.3,128,427,160,480,176C533.3,192,587,192,640,181.3C693.3,171,747,149,800,165.3C853.3,181,907,235,960,240C1013.3,245,1067,203,1120,192C1173.3,181,1227,203,1280,218.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
        </path>
      </svg>
    </div>

    
  )
}
