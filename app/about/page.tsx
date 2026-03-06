import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Dhanush</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a passionate Artificial Intelligence and Machine Learning student with a strong interest in building intelligent systems and data-driven applications. My journey in technology began with a curiosity to understand how machines can learn from data and solve real-world problems. Over time, this curiosity evolved into a passion for developing machine learning models, AI-powered applications, and scalable solutions. I enjoy exploring areas such as machine learning, deep learning, and large language models, while also building practical projects that combine AI with modern software technologies to create impactful and user-centric solutions.
        </PageHeaderDescription>

        <PageHeaderDescription>
          With a strong foundation in programming and machine learning concepts, I focus on building intelligent, scalable, and efficient AI-driven applications. I enjoy working with tools and frameworks in the Python ecosystem to develop data-driven solutions, train machine learning models, and analyze complex datasets. Currently, I am exploring deeper areas of Artificial Intelligence such as deep learning, large language models, and applied machine learning to expand my skill set and build impactful real-world AI solutions.        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond building models and writing code, I enjoy collaborating with others to solve complex problems and explore innovative AI solutions. I am motivated by challenging problems that require analytical thinking, creativity, and continuous learning. My goal is to contribute to impactful projects in Artificial Intelligence and Machine Learning that can solve real-world problems and create meaningful value for society.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
