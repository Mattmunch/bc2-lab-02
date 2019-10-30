import Component from './Component.js';
import Header from './src/Header.js';
import images from './data/images.js';
import FilterImages from './src/FilterImages.js';
import ImageList from './src/ImageList.js';

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
                        return image.type === imageType;
                    });
                }
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        };
        const filterImages = new FilterImages(filterImagesProps);
        const filterImagesDOM = filterImages.renderDOM();

        const optionSection = dom.querySelector('.options-section');
        optionSection.appendChild(filterImagesDOM);
    }
}




export default App;