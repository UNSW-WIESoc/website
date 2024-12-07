import '../app/globals.css';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardCover } from '@mui/joy';
import { useRouter } from 'next/navigation';

export default function WIEInspireCard({ article }: any) {
  const router = useRouter();
  
  if (!article || !article.fields) {
    return null;
  }

  const pdf = article.fields.article;
  const img = article.fields.img;
  const title = article.fields.title;
  const author = article.fields.author;
  const imgUrl = 'https:' + img.fields.file.url;
  const pdfUrl = 'https:' + pdf.fields.file.url;

  const handleCardClick = () => {
    // Navigate to the PDF viewer page
    router.push(`/wie-inspire/${encodeURIComponent(pdfUrl.replace('https://', ''))}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      variant='outlined'
      className='shadow-hover border-round'
      sx={{
        minWidth: '300px',
        maxHeight: '500px',
        minHeight: '375px',
        cursor: 'pointer'
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
