import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>

        <title>Renan Bocchi's Portifolium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Olá! Eu sou o <a href="https://linkedin.com/in/renanbocchi">Renan Bocchi</a>
        </h1>

        <h2 id='conheça'>Conheça abaixo alguns projetos dos quais fiz parte<br></br> durante a <a href="https://experience.gama.academy/" target='_blank'><spam id='gama'>Gama</spam> <spam id='xp'>Experience</spam></a>!</h2>
        
        <h5>Desafios em Grupo</h5>
        <div className="grid">
                <Link href="/novamente" passHref>
                  <a className='card'>
                    <div >
                      
                        <h3>NovaMente &rarr;</h3>
                        <p>LP para captação de leads para consultas psicológicas online!</p>
                                      
                    </div>
                  </a>
                </Link >
                <Link href="/engaja" passHref>
                    <a className="card">
                      <h3>Engaja &rarr;</h3>
                      <p>LP feita para divulgação de evento a respeito da representatividade negra!</p>
                    </a>
                </Link>
          </div>

         
          <h5>Desafios individuais</h5>

          <div className="grid">
              <a
                href="https://churrascalc.vercel.app/"
                className="card"
                target='_blank'
              >
                <h3>Churras Calculator &rarr;</h3>
                <p>Calculadora para churrasco com JavaScript.</p>
              </a>

              <a
                href="https://reponames.netlify.app/"
                className="card"
                target='_blank'
              >
                <h3>RepoNames &rarr;</h3>
                  <p>
                    App em ReactJS que busca, na API do GitHub, nomes de repositório. 
                  </p>
              </a>
        </div>
      </main>

      <footer>
      <p>Feito com<br></br> <img id='next' width='70px' height='70px' src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'></img></p>
      </footer>

      <style jsx>{`
        
        main{
          background-color:#ade8f4;
          border-radius:30px;
          border-style:solid;
          border-color:#0096c7;
        }
        h1{
          font-size:3.7rem !important;
        }

        h2{
          max-width:800px;
          padding:16px;
          text-align:center;
        }

        h5{text-align:center;}

        #xp{
          color:#0096c7;
          
        }
        #gama{
          color:#0096c7;
        }



        p{
          text-align:justify;
        }
        #next{
          margin-top:-15px;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }



        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0096c7;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 0.5rem;
        }


        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color:#0096c7 !important;
          color:#03045e;
          min-width:250px !important;
          max-width:250px !important;
          min-height:250px !important;
          max-height:250px !important;
     
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.17rem !important;
      }   
          .card p {
          margin: 0 0 1rem 0;
          font-size: 1rem !important;
      }

        .card:hover,
        .card:focus,
        .card:active {
          color: white;
          border-color: white;
          background-color:#023e8a !important;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        h3{
          text-align:center !important;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #03045e;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

