import GalleryTile from './components/GalleryTile';
import imgBear from './img/bear.gif';
import vidPlaceholder from './vid/video-placeholder.mp4';
import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-12 page-edge-shadow"></div>
      </div>
      <div className="row App--row">
        <aside className="col-12 col-xxl-4 d-flex">
          <aside className="bookmark d-flex flex-column mr-5">
            <div>
              <div className="d-inline-block bookmark--pagenum">
                <i className="material-icons md-16">blur_on</i>
              </div>
            </div>
            <div className="bookmark--name d-flex align-items-center justify-content-center pt-5 text-nowrap text-uppercase">
              software engineer portfolio
            </div>
          </aside>
          <aside className="d-flex flex-column flex-grow-1 ml-4 text-left wrapper-textual">
            <div className="d-flex flex-column text-uppercase text-lighter wrapper-textual--title">
              <div className="mt-1 mb-3">
                <span className="text-powder-blue">dream</span>
                <span className="text-powder-blue">ware.</span>  
              </div>
            </div>
            <div className="mt-5 mb-3 divider"></div>
            <div className="d-flex mb-5">
              <div className="text-bold wrapper-textual--headline">
                Perfect software is challenging, exhillerating, bloody hard!<br />
                And thats why I love it.
              </div>
            </div>
            <section className="mt-4 row wrapper-textual--article">
              <div className="col-12 col-md-6">
                <p className="text-bold">
                  Whats makes good software engineers?
                </p>
                <p>
                  Do we keep running the rat race, hoping to break a new velocity sprint record?
                </p>
                <p>
                  Do we chase high-impact company initiatives as Skunkworks projects?
                </p>
                <p>
                  Do we balance output with textbook quality osftware, without introducing schedule risk?
                </p>
                <p>
                  Do we offer multidisciplinary pragmatici nsights to guide technical decisions?
                </p>
                <p>
                  Do we manage short-term &amp; long-term tech debt to maximise a company's marketshare?
                </p>
                <p>
                  The reality is that &quot;perfect&quot; software is more difficult than most people think.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text-bold">
                  Perfection in reality is different from ideals.
                </p>
                <p>
                  A good software engineer isn&lsquo;t just about writing pretty code, its about maximizing happiness of all direct &amp; indirect stakeholders in the business you work for.
                </p>
                <p>
                  Shareholders, management, tech, product, customer support, your team.
                </p>
                <p>
                  Schedule risk, operational risk, resource risk.
                </p>
                <p>
                  Its bloody hard, which means work is going towards something with an awesome reward!
                </p>
              </div>
            </section>
            <section className="my-4 row text-uppercase wrapper-textual--quote">
              <div className="col-12 col-md-6 border-right text-right">
                <div>its not where you are.</div>
                <div>its your improvement from yesterday.</div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center text-bold">
                michael nguyen
              </div>
            </section>
            <section className="mt-5 mb-5 wrapper-textual--table-of-contents">
              <table className="w-100">
                <tbody>
                  <tr>
                    <td className="pr-2">A</td>
                    <td className="text-bold">Blender scripts for geometry creation &amp; materials application</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td className="text-bold">Modern BNG</td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td className="text-bold">Sudoku</td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td className="text-bold">Campaign XML Generator</td>
                  </tr>
                  <tr>
                    <td>E</td>
                    <td className="text-bold">Agile AES</td>
                  </tr>
                  <tr>
                    <td>F</td>
                    <td className="text-bold">Mint</td>
                  </tr>
                  <tr>
                    <td>G</td>
                    <td className="text-bold">SQL Keyword Formatter</td>
                  </tr>
                  <tr>
                    <td>H</td>
                    <td className="text-bold">Bulk CSV URL Shortener</td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td className="text-bold">Follow the process</td>
                  </tr>
                  <tr>
                    <td>J</td>
                    <td className="text-bold">Machi Koro</td>
                  </tr>
                  <tr>
                    <td>K</td>
                    <td className="text-bold">Realestate.com.au crawler</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td className="text-bold">ASX market capitalisation</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td className="text-bold">Software engineering blog</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </aside>
        </aside>
        <main className="col-12 col-xxl-8 wrapper-gallery">
          <div className="row position-relative wrapper-gallery--row-1">
            <div className="col-12 d-flex justify-content-end">
              <GalleryTile src={vidPlaceholder} captionTitle="Geometry scripts" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Modern BNG" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Sudoku" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Campaign XML Generator" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Agile AES" href="" />
            </div>
          </div>
          <div className="mb-4"></div>
          <div className="row position-relative wrapper-gallery--row-2">
            <div className="col-12 d-flex justify-content-end">
              <GalleryTile src={vidPlaceholder} captionTitle="Mint" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="SQL Keyword Formatter" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Bulk CSV URL Shortener" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Follow the process" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Machi Koro" href="" />
            </div>
          </div>
          <div className="mb-4"></div>
          <div className="row position-relative wrapper-gallery--row-3">
            <div className="col-12 d-flex justify-content-end">
              <GalleryTile src={vidPlaceholder} captionTitle="Realestate.com.au crawler" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="ASX market capitalisation" href="" />
              <GalleryTile src={vidPlaceholder} captionTitle="Software engineering blog" href="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
