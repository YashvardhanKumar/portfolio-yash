import React from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Who is Yashvardhan Kumar?",
      answer: (
        <span>
          <strong>Yashvardhan Kumar</strong> is a software engineer, Full-Stack Web Developer, and Mobile App Developer (Flutter). He is currently pursuing an integrated BTech + MTech in Information Technology at the prestigious <strong>ABV-Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior</strong>.
        </span>
      ),
    },
    {
      question: "What is Yashvardhan Kumar's technical expertise?",
      answer: (
        <span>
          Yashvardhan specializes in building cross-platform applications and websites. His skills include:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Frontend Web</strong>: ReactJS, Next.js, Tailwind CSS, TypeScript, and HTML5/CSS3.</li>
            <li><strong>Mobile Development</strong>: Flutter, Dart, GetX, Provider, and Kotlin.</li>
            <li><strong>Backend & Databases</strong>: Node.js, NestJS, Python, Django, Flask, PostgreSQL, Neo4j, GraphQL, and MongoDB.</li>
            <li><strong>Cloud & DevOps</strong>: AWS (Amazon Web Services), Docker, and Firebase.</li>
          </ul>
        </span>
      ),
    },
    {
      question: "What are some key projects developed by Yashvardhan Kumar?",
      answer: (
        <span>
          Notable projects created by Yashvardhan include:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Codeflip</strong>: A high-performance coding and submission platform built with NextJS and Django, powered by a self-hosted Judge0 code engine in Docker.</li>
            <li><strong>Good Merchant</strong>: A ReactJS-based price categorization system leveraging a customized CNN model trained with TensorFlow and Keras, achieving <strong>92.8% classification accuracy</strong>.</li>
            <li><strong>Conacy</strong>: A social media platform powered by NestJS, GraphQL, React, and Neo4j graph databases for advanced user recommendation systems.</li>
            <li><strong>Confereus</strong>: A research conference management web and mobile application with session scheduling and LinkedIn OAuth2 authentication.</li>
            <li><strong>Mahika</strong>: A women's safety mobile application built using Flutter and Firebase, published on the Google Play Store.</li>
          </ul>
        </span>
      ),
    },
    {
      question: "What professional experiences does Yashvardhan Kumar have?",
      answer: (
        <span>
          Yashvardhan has a proven track record of software development across multiple organizations:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Codingal (YC W21)</strong>: Deployed over <strong>30+ SEO-optimized landing pages</strong>, rebuilt user dashboards, and integrated APIs.</li>
            <li><strong>Debox Consulting</strong>: Built the Bawarchi app using Flutter in just over 6 weeks and achieved a <strong>20% performance improvement</strong> in the InRadius mobile application by refactoring and restructuring code to &lt;120 LoC per file.</li>
            <li><strong>National Commission for Women</strong>: Formulated and delivered the Mahika safety mobile app from scratch.</li>
            <li><strong>Krishi Kutumb</strong>: Designed and deployed a multi-platform app for farmer solutions integrated with PHP servers.</li>
          </ul>
        </span>
      ),
    },
  ];

  return (
    <div className="w-full relative z-10 px-5 sm:px-10 pb-16 font-poppins">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h2 className="text-white sm:text-4xl text-2xl font-silkscreen text-center mb-4 border-b border-slate-800 pb-3">
          Quick Facts &amp; FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-ui-color/40 transition-colors duration-300"
            >
              <h3 className="text-ui-color font-barlowcondensed text-2xl mb-2 font-semibold">
                {faq.question}
              </h3>
              <div className="text-gray-400 text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
