import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'hats',
      },
      {
        title: 'jackets',
        imageUrl:
          'https://www.locomole.com/wp-content/uploads/Article-banner-image1-4.jpg',
        id: 2,
        linkUrl: '',
      },
      {
        title: 'sneakers',
        imageUrl: 'https://media.timeout.com/images/105398862/image.jpg',
        id: 3,
        linkUrl: '',
      },
      {
        title: 'womens',
        imageUrl:
          'https://www.fashiongonerogue.com/wp-content/uploads/2020/04/Wavy-Hair-800x490.jpg',
        size: 'large',
        id: 4,
        linkUrl: '',
      },
      {
        title: 'mens',
        imageUrl:
          'https://us.123rf.com/450wm/georgerudy/georgerudy1703/georgerudy170300350/74025296-handsome-guy-with-shopping-bags-is-doing-shopping-in-the-mall.jpg?ver=6',
        size: 'large',
        id: 5,
        linkUrl: '',
      },
    ],
  };
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;