import { CategoryArray } from '../../Util/interface';
import { CategoryWrap, CategoryBox } from './Category.style';

const Category = () => {
  const categoryList: CategoryArray[] = [
    {
      name: 'disney',
      img: '/images/viewers-disney.png',
      video: '/videos/disney.mp4',
    },
    {
      name: 'marvel',
      img: '/images/viewers-marvel.png',
      video: '/videos/marvel.mp4',
    },
    {
      name: 'pixar',
      img: '/images/viewers-pixar.png',
      video: '/videos/pixar.mp4',
    },
    {
      name: 'star-wars',
      img: '/images/viewers-starwars.png',
      video: '/videos/star-wars.mp4',
    },
    {
      name: 'national-geographic',
      img: '/images/viewers-national.png',
      video: '/videos/national-geographic.mp4',
    },
  ];

  return (
    <CategoryWrap>
      {categoryList.map((category) => (
        <CategoryBox key={category.name}>
          <img src={category.img} alt={category.name} />
          <video autoPlay loop muted>
            <source src={category.video} type='video/mp4' />
          </video>
        </CategoryBox>
      ))}
    </CategoryWrap>
  );
};

export default Category;
