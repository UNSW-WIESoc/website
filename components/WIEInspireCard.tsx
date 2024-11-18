import '../app/globals.css';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardCover } from '@mui/joy';

export default function WIEInspireCard({ article }: any) {
  console.log(article);
  if (!article || !article.fields) {
    return null;
  }

  const pdf = article.fields.article;
  const img = article.fields.img;
  const title = article.fields.title;
  const author = article.fields.author;
  const imgUrl = 'https:' + img.fields.file.url;
  const pdfUrl = 'https' + pdf.fields.file.url;

  return (
    <Card
      component="a"
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant='outlined'
      className='shadow-hover border-round'
      sx={{
        minWidth: '300px',
        maxWidth: '600px',
        height: '400px',
        width: '400px'
      }}
    >
      <CardCover>
        <img
          src={imgUrl}
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end', height: '100%' }}>
        <Typography textColor="#fff">
          {title}
        </Typography>
        <Typography
          textColor="neutral.300"
        >
          {author}
        </Typography>
      </CardContent>
    </Card>
  )
}
