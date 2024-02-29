import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Stickers',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H016416139fe74819a8c7f999bcfc000bN.jpg'
    },
    {
      id: 2,
      title: 'Posters',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Haeb6ca5b45de4ab3a22417666811caa1c.png'
      
    },
    {
      id: 3,
      title: 'Shirts',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H3c0544f571eb4a3db103eddb9085d1e6K.jpg'
    },
    {
      id: 4,
      title: 'Hats',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/H3617cd2ed5184431b97e8ea05b5213d3X.jpg'
    },
    {
      id: 5,
      title: 'Mugs',
      imageUrl: 'https://s.alicdn.com/@sc04/kf/Hf3b93d010a17446fba8f37e64d3130e0g.jpg'
    },
  ];


  return (
    <Directory categories={categories} />
  );
}

export default App;
