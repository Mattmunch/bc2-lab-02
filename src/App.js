import Component from '../Component.js';
import Header from './Header.js';
import images from '../data/images.js';
import FilterImages from './FilterImages.js';
import ImageList from './ImageList.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        const props = {
            images:images
        };
        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);

        const filterImagesProps = {
            images:images,
            onFilter: (imageType) => {
                let filteredImages;
                if (!imageType) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageType;
                    });
                }
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        };
        const filterImages = new FilterImages(filterImagesProps);
        const filterImagesDOM = filterImages.renderDOM();

        const optionSection = dom.querySelector('.option-section');
        optionSection.appendChild(filterImagesDOM);
    }
    renderHTML(){
        return `
        <div>
        <main>
        <section class="option-section"></section>

        <section class="list-section">
        </section>

        </main>
        </div>
        `;
    }
}




export default App;