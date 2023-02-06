import Card from '../components/Card';

export default function Home() {
  const articles = [
    {
      image: 'https://mgl.gogo.mn/newsn/story/06e0257950004107a2aaa7ec830365a8-63c939980075e396370671.jpg',
      title: 'Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна',
    },
    {
      image: 'https://mgl.gogo.mn/newsn/story/article-image-weddinggowns-kim-kardashian-174821-361256301-63c7593367c31750659072.jpeg',
      title: 'Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна',
    },
    {
      image: 'https://mgl.gogo.mn/newsn/story/article-image-weddinggowns-kim-kardashian-174821-361256301-63c7593367c31750659072.jpeg',
      title: 'Цагдаагийн 102 албан хаагч англи хэл сурахаар Филиппин явна',
    },
  ];
  return (
    <main>
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-3 col-sm-6 col-12" key={index}>
              <Card title={article.title} image={article.image} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
