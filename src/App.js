import GalleryTile from './components/GalleryTile';
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
          <aside className="d-none d-xl-flex bookmark flex-column mr-5">
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
            <div className="d-flex flex-column wrapper-textual--title">
              <div className="mb-3">
                <a href="" className="text-small text-bold">Back to home</a>
              </div>
            </div>
            <div className="d-flex flex-column text-uppercase text-lighter wrapper-textual--title">
              <div className="mt-1 mb-3">
                <span className="text-powder-blue">Project name</span>
              </div>
            </div>
            <div className="mt-5 mb-3 divider"></div>
            <div className="d-flex mb-3">
              <div className="text-bold wrapper-textual--headline">
                Project elevator pitch 1-liner.
              </div>
            </div>
            <div className="d-flex mb-5">
              <span className="px-3 py-1 mr-2 border-left text-small text-secondary">
                Tag
              </span>
              <span className="px-3 py-1 mr-2 border-left text-small text-secondary">
                Tag
              </span>
              <span className="px-3 py-1 mr-2 border-left text-small text-secondary">
                Tag
              </span>
              <span className="px-3 py-1 mr-2 border-left text-small text-secondary">
                Tag
              </span>
            </div>
            <section className="mt-4 row wrapper-textual--article">
              <div className="col-12 col-md-6">
                <p className="text-bold">
                  Abstract
                </p>
                <p>
                  Lorem ipsum dolor sit amet ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet ipsum dolor sit amet. Lorem ipsum dolor sit amet ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet ipsum dolor sit amet. Lorem ipsum dolor sit amet ipsum dolor sit amet. Lorem ipsum dolor sit amet ipsum dolor sit amet.
                </p>                
              </div>
              <div className="col-12 col-md-6">
                <p className="text-bold">
                  Applied techniques
                </p>
                <p>
                  <ul>
                    <li>Lorem ipsum dolor</li>
                    <li>Lorem ipsum dolor sit</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </p>
              </div>
            </section>

            <section className="mt-5 mb-5 wrapper-textual--table-of-contents">
              <table className="w-100">
                <tbody>
                  <tr>
                    <td className="pr-2">Demo</td>
                    <td className="text-bold">
                      <a href="">http://localhost:3000/</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Source code</td>
                    <td className="text-bold">
                      <a href="">http://localhost:3000/</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </aside>
        </aside>
        <main className="col-12 col-xxl-8 wrapper-gallery">

        </main>
      </div>
    </div>
  );
}

export default App;
