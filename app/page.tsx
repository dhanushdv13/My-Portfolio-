import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dhanush DV</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          A coder by day, problem-solver by night!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a passionate Artificial Intelligence and Machine Learning student with a strong interest in building intelligent systems and data-driven applications. My journey in technology began with a curiosity to understand how machines can learn from data and solve real-world problems. Over time, this curiosity evolved into a passion for developing machine learning models, AI-powered applications, and scalable solutions. I enjoy exploring areas such as machine learning, deep learning, and large language models, while also building practical projects that combine AI with modern software technologies to create impactful and user-centric solutions.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
