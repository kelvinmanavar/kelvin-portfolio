import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { Mail, MapPin, Phone, GitBranch, ExternalLink, Terminal, Cloud, Server, Database } from 'lucide-react';
import profilePic from '../public/profile.jpg';
export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
      
      {/* START MODIFIED HERO SECTION: Creates a responsive two-column layout */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 animate-fade-in-up">
        
        {/* Left Column (Text Content) - Wraps existing hero text for proper column alignment */}
        <div className="space-y-6 flex-1 w-full md:w-3/5">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight whitespace-nowrap">
            Kelvin Manavar
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-indigo-500">
            DevOps Engineer
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a DevOps professional focused on architecting and managing cloud infrastructure, automating CI/CD pipelines, and ensuring highly available, Secure, scalable, cost efficient systems across AWS and Azure cloud environments.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
              <Mail className="w-4 h-4 text-indigo-500" /> kelvinpatel2001@gmail.com
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
              <Phone className="w-4 h-4 text-indigo-500" /> +91 9016483549
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
              <MapPin className="w-4 h-4 text-indigo-500" /> Ahmedabad-India
            </div>
          </div>
        </div>

        {/* Right Column (Profile Picture) */}
        <div className="flex-1 w-full md:w-2/5 flex justify-center md:justify-end items-center">
          {/* Nested Image Wrapper with responsive sizing and alignment logic */}
          <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 aspect-square flex-shrink-0"> {/* Responsive rendered sizes */}
            <Image
              src={profilePic} // *** USER ACTION REQUIRED: Replace with your actual file name + extension stored in the public folder ***
              alt="Kelvin Manavar Profile Picture" // Good practice for accessibility
              fill // Implicitly handles relative parent's width/height, optimized by Next.js
              className="rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] border-4 border-slate-900 object-cover" // Style adjustments: perfectly rounded, prominent glowing shadow, matching border, and cover image fitting
              priority // Correct for above-the-fold content, telling Next.js to load this image early for performance
              sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px" // Tells Next.js which pre-calculated size to use, calculated based on rendered sizes for optimization
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
          <Terminal className="w-8 h-8 text-indigo-500" /> Professional Experience 
        </h3>
        <div className="space-y-8 border-l-2 border-slate-800 ml-4 pl-8 relative">
          
          <div className="relative">
            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[41px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            <h4 className="text-xl font-bold text-white">DevOps Engineer, EloxTech Pvt. Ltd. </h4>
            <p className="text-indigo-400 font-medium mb-4">Ahmedabad, India | 11/2022 - present </p>
            <ul className="space-y-2 text-slate-400 list-disc list-outside ml-5 marker:text-indigo-500">
              <li>Managed version control systems (Git, GitHub, GitLab, Bitbucket), overseeing daily Git operations to support efficient project development and version control. </li>
              <li>Designed, implemented, and maintained CI/CD pipelines using AWS CodePipeline, Bitbucket, and GitLab to automate and streamline deployment workflows. </li>
              <li>Administered and optimized web servers (NGINX, Apache) to ensure reliable hosting and high performance of web applications.</li>
              <li>Leveraged Amazon Web Services (AWS) extensively, with expertise in IAM, VPC, CloudWatch, NAT Gateway, EC2, Lambda, RDS, S3, Security Groups, ELB, Auto Scaling, API Gateway, CloudFormation, CodeDeploy, CodePipeline, Elastic Beanstalk, ECS, ECR, EFS, and EKS, etc.</li>
              <li>Managed Kubernetes clusters for deploying and scaling containerized applications. </li>
              <li>Configured AWS resources to build a secure, scalable, and highly available infrastructure.</li>
              <li>Write cloud infrastructure using Infrastructure-as-Code (IaC) tools, such as AWS CloudFormation and Terraform.</li>
              <li>Installed and maintained monitoring solutions (Grafana, Prometheus) to optimize system performance and ensure application reliability.</li>
              <li>Collaborated with development teams to streamline software releases, resulting in faster timetomarket.</li>
              <li>Automated manual tasks through scripting languages such as Python or Shell, boosting team productivity levels.</li>
              <li>Reduced operational costs by optimizing cloud resource utilization and implementing cost-effective solutions.</li>
              <li>Built complete infrastructure on Azure to deploy applications on Azure Kubernetes Service (AKS).</li>
              <li>Leveraged Azure extensively, with expertise in IAM, VNet (Networking), Application Gateway, NAT Gateway, Virtual Machines, VMSS, AKS, Azure Key Vault, MySQL database, Resource Group, App Service, Storage Account, ACR, Azure DevOps, Azure Monitor, etc.</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 bg-slate-700 rounded-full -left-[41px] top-1.5 border-2 border-slate-950"></div>
            <h4 className="text-xl font-bold text-white">DevOps Engineer, Freelancer at Elox Tech Pvt. Ltd </h4>
            <p className="text-indigo-400 font-medium mb-4">Ahmedabad, India | 01/2022-10/2022 </p>
            <ul className="space-y-2 text-slate-400 list-disc list-outside ml-5 marker:text-indigo-500">
              <li>Designed, implemented, and managed cloud-based infrastructure for staging and production environments using AWS, ensuring high availability, and cost optimization.</li>
              <li>Enhanced client satisfaction by delivering high-quality work within deadlines.</li>
              <li>Configured automated snapshots using AWS EC2 Lifecycle Manager and S3 Lifecycle Policies, ensuring data integrity and compliance.</li>
              <li>Set up auto-scaling policies and Elastic Load Balancers (ELBs) to handle traffic spikes, maintaining high availability during peak usage periods.</li>
              <li>Deployed projects on AWS Elastic Beanstalk, simplifying application management and scaling.</li>
              <li>Installed and configured self-hosted runners on EC2 instances for GitLab CI and Bitbucket, enabling resource-intensive build and deployment tasks for CI/​CD pipelines.</li>
              <li>Installed and configured monitoring and logging tools, including Grafana and Prometheus, improving issue detection and reducing response times.</li>
              <li>Implemented CI/CD pipelines using tools like Bitbucket Pipelines and GitLab CI.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
          <Cloud className="w-8 h-8 text-indigo-500" /> Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Cloud Platforms</h4>
            <p className="text-slate-400">AWS, Azure, Linode</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">CI/CD</h4>
            <p className="text-slate-400">GitLab-Ci, Bitbucket, AWS code-pipeline, Github Action</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Infrastructure as Code</h4>
            <p className="text-slate-400">Terraform, Cloudformation(AWS)</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Monitoring</h4>
            <p className="text-slate-400">Grafana, Prometheus, AWS Cloudwatch</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Containerization</h4>
            <p className="text-slate-400">Docker, Kubernetes</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Source and Version control</h4>
            <p className="text-slate-400">Github, Bitbucket, GitLab</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Operating Systems</h4>
            <p className="text-slate-400">Linux: Ubuntu, CentOs</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl md:col-span-2 lg:col-span-2 hover:border-indigo-500 transition-colors">
            <h4 className="text-lg font-bold text-white mb-3">Certifications</h4>
            <ul className="text-slate-400 list-disc list-inside">
              <li>AWS Certified Solutions Architect - Associate (SAA-C03) </li>
              <li>Certified Kubernetes Administrator (CKA) - Issued by The Linux Foundation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
          <Server className="w-8 h-8 text-indigo-500" /> Featured Projects 
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white">Design infrastructure for an e-commerce website for an instrument-selling company, Laravel and BigCommerce [US Based Client] </h4>
              <div className="flex gap-3 text-slate-400">
                <a href="#" className="hover:text-indigo-500 transition-colors"><GitBranch className="w-5 h-5" /></a>
                <a href="#" className="hover:text-indigo-500 transition-colors"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              I implemented Azure Kubernetes Service (AKS) to containerize and orchestrate Laravel application workloads, ensuring scalability and high availability, while automating build and deployment pipelines using Bitbucket pipeline integrated with repository. I configured Azure Application Gateway and Ingress Controllers for secure traffic routing and load balancing, managed Azure Database for MySQL – Flexible Server with caching via Redis for optimized performance, and integrated Azure Key Vault for secure handling of secrets and credentials. Additionally, I deployed centralized logging and monitoring with Azure Monitor, Log Analytics, and Prometheus/​Grafana, and enabled autoscaling for nodes. etc.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">AKS</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">Azure Key Vault</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">Azure Redis</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">Azure Database for MySQL – Flexible Server</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">Bitbucket Pipelines</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-white">Design infrastructure for an e-commerce website for Toys selling
comapany, Laravel and BigCommerce [US Based Client]</h4>
              <div className="flex gap-3 text-slate-400">
                <a href="#" className="hover:text-indigo-500 transition-colors"><GitBranch className="w-5 h-5" /></a>
                <a href="#" className="hover:text-indigo-500 transition-colors"><ExternalLink className="w-5 h-5" /></a>
              </div>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Engineered a multi-tier AWS architecture utilizing VPC, ECS
Fargate, and IAM to support a scalable Laravel and BigCommerce backend,
while automating end-to-end CI/​CD workflows through Bitbucket Pipelines. By
developing multi-stage Docker builds for PHP-FPM and Nginx and managing
images via Amazon ECR, I ensured seamless container orchestration and
environment consistency. Additionally, I optimized Amazon RDS and
ElastiCache for high-concurrency traffic and implemented comprehensive
CloudWatch monitoring to provide full-stack visibility
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">AWS ECS Fargate</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">AWS RDS - MySQL Aurora</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">AWS CloudWatch</span>              
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">Amazon ECR</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">AWS Secret Manager</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">AWS - IAM</span>
              <span className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full">Docker</span>
            </div>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-8">
        <h3 className="text-3xl font-bold text-white flex items-center gap-3">
          <Database className="w-8 h-8 text-indigo-500" /> Education 
        </h3>
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">M.E. in Power Electronics, Gujarat Technological University</h4>
              <p className="text-slate-400">Ahmedabad, India</p>
            </div>
            <span className="text-indigo-500 font-medium whitespace-nowrap bg-indigo-500/10 px-4 py-2 rounded-full text-sm">
              06/2013-06/2015
            </span>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">B.E. in Electronics and Communication Engineering, Veer Narmad South Gujarat University</h4>
              <p className="text-slate-400">Surat, India</p>
            </div>
            <span className="text-indigo-500 font-medium whitespace-nowrap bg-indigo-500/10 px-4 py-2 rounded-full text-sm">
              06/2006-06/2009
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}