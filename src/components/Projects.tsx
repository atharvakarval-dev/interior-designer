import { FadeUp } from './FadeUp';
import { AnimatedText } from './AnimatedText';

const projects = [
  {
    title: 'House Interior',
    location: 'PUNE, MAHARASHTRA',
    area: '165 SQM',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    tag: 'Interior',
  },
  {
    title: 'Apartment Interior',
    location: 'MUMBAI, MAHARASHTRA',
    area: '100 SQM',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    tag: 'Kitchen',
  },
  {
    title: 'Studio Interior',
    location: 'BANGALORE, KARNATAKA',
    area: '85 SQM',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tag: 'Office',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-accent-8 px-6 py-24 lg:px-12 lg:py-32 w-full">
      <div className="container relative mx-auto max-w-[1200px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-accent-6" aria-hidden="true" />
        <div className="pl-6 md:pl-10">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-24">
            <h2 className="text-[46px] font-normal leading-[1] tracking-[-1.38px] text-white md:text-[50px]">
              <AnimatedText text="Our latest projects" />
            </h2>
            <FadeUp delay={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white px-[20px] py-[16px] text-[16px] font-normal text-white transition-colors hover:bg-white hover:text-black"
              >
                View all projects
              </a>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeUp key={`${project.title}-${index}`} delay={0.1 * index}>
                <div className="group flex cursor-pointer flex-col">
                  <div className="overflow-hidden rounded-none border border-black bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-[14px] font-normal tracking-[0.21px] text-[#ff0000]">
                      {project.tag}
                    </span>
                    <h3 className="text-[19px] font-semibold leading-[1.2] tracking-tight text-black">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex flex-col gap-1 text-[14px] uppercase tracking-[0.21px] text-[#bfbfbf] font-normal">
                      <p>
                        <span className="mr-2 text-black">LOCATION:</span>
                        {project.location}
                      </p>
                      <p>
                        <span className="mr-2 text-black">AREA:</span>
                        {project.area}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
