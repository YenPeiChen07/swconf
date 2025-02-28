import { Metadata } from 'next';
import Article from '@/components/Article';
import ToBeAnnounced from '@/components/ToBeAnnounced';

export const metadata: Metadata = {
  title: 'Financial Aid',
};

const Page = () => {
  return (
    <Article>
      <ToBeAnnounced />
    </Article>
  );
};

export default Page;
