"use client";

import { Container } from '@/components/Container'
import { Divider } from '@/components/Divider'

export default function Page({ params }) {
  return (
    <>
      <Container className="my-9">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi {params.name}
          </h1>
          <Divider className="mt-6" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            Why I Want to Work at Vercel        
          </h2>
          <ul className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <li className="mb-2">
              <strong>Scoping In</strong> – Throughout my career, I have been responsible for managing the entire customer journey from start to finish. While this has been incredibly rewarding, I’m ready for a new challenge. I would love the opportunity to focus on a more specialized area and bring a deeper impact.
            </li>
            <li className="mb-2">
              <strong>Company Values</strong> – Your company’s culture aligns with my personal values. Being goal-driven, customer-centric, and fostering an environment where people are encouraged to grow and are empowered to succeed is exactly the type of culture I want to contribute to.
            </li>
            <li className="mb-2">
              <strong>Long-Term Home</strong> – Early in my career, I spent a significant amount of time at one company, steadily building my skills and contributing to long-term success. I’m now seeking a similar opportunity for growth and stability, and I believe Vercel can provide that long-term home for my next chapter.
            </li>
          </ul>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            What Value I Can Bring to Vercel
          </h2>
          <ul className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <li className="mb-2">
            <strong>Small Company Mindset</strong> – Most of my work has been done at startups that are at an earlier stage than Vercel. Although this may mean I’ll have a transition period if I get this role, I know I will bring immense value. Coming from smaller companies, I’ve been able to take on large-scale, cross-departmental projects and work closely with leadership teams. This has allowed me to provide key data and insights that drive critical company decisions.
          </li>
          <li className="mb-2">
            <strong>Solving Complex Problems</strong> – Complex problems are a given in operations. Although these challenges vary greatly across the stack, I approach them in a systematic way: by breaking them down into manageable parts that can be solved simply. This approach helps avoid complex solutions that can be brittle and lead to technical debt.
          </li>
          <li className="mb-2">
            <strong>Soft Skills that Rival My Hard Skills</strong> – While everyone being considered for this role likely has strong technical skills, I’ve learned that soft skills are just as important—if not more so. I excel at collaborating with stakeholders to identify the root of problems and develop solutions that meet everyone’s needs. I’m also skilled at communicating priorities clearly and explaining the reasoning behind them, ensuring alignment across teams. Additionally, I have extensive experience collaborating with leadership to provide the data and insights they need to succeed.
          </li>
          </ul>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m confident that my blend of experience and skills will allow me to make a significant impact at Vercel. I’m eager to bring my collaborative approach and problem-solving abilities to your team and contribute to the company’s continued success. I’m genuinely excited about the opportunity to work with you.
          </p>
        </div>
      </Container>
    </>
  )
}