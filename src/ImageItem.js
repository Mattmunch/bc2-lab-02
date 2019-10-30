import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML() {
        const image = this.props.image;
        return `
        <li>
            <div class="info-container">
                <h2>${image.title}</h2>
             </div>
            <div class="image-container">
                 <img src="${image.url}"
                                alt="${image.description}">
            </div>
                <p class="horn-quantity">Horns:${image.horns}
                </p>
        </li>
        `;
    }
}



export default ImageItem;
