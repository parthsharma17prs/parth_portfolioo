import PixelButton from './PixelButton';
import GlitchText from './GlitchText';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'ISL-DETECTOR',
      type: 'FULL-STACK',
      status: 'ACTIVE',
      description: 'ISL based sign langauge + micro expression detector with privacy protector and personalilzed model training. Modern UI, OpenAI integration for chatbot, and Supabase backend.',
      tech: ['React', 'Python','OpenCV','Q','Tailwind CSS', 'Supabase', 'OpenAI GPT-4', 'Typescript', 'NODE.JS'],
      color: 'border-cyber-blue',
      codeUrl: '',
      demoUrl: '',
      image: '',
    },
    {
      id: 2,
      title: 'SPICE-YATRA',
      type: 'FULL-STACK',
      status: 'DEPLOYED',
      description: 'A full-stack food ordering app with live tracking, secure payments, and review features, including an admin panel for order management',
      tech: ['React native', 'MongoDB', 'figma', 'firebase','Tailwind CSS','React.js','JWT Authentication'],
      color: 'border-cyber-green'
    },
    {
      id: 3,
      title: 'Static-Site-Generator-with-AI',
      type: 'AI',
      status: 'BETA',
      description: 'Next-gen static site generator for developers — blazing-fast builds, modular templates, and zero-config deployment.',
      tech: ['Next.js', 'React', 'tailwind css', 'MDX', 'json', 'Vite'],
      color: 'border-cyber-pink',
      image: '',
      codeUrl: '',
    },
    {
      id: 4,
      title: ' Sahayta-Shakti-Portal',
      type: 'WEB3',
      status: 'DEVELOPMENT',
      description: 'Secure app for emergency assistance using blockchain for data integrity and transparency.',
      tech: ['Web3.js', 'Solidity', 'React', '3js'],
      color: 'border-cyber-orange'
    },
    {
      id: 5,
      title: 'AI-ChatBOT-for-INGRES',
      type: 'AI/ML',
      status: 'RESEARCH',
      description: 'AI-based chatbot solution with smart interaction and assistance with INGRES environment',
      tech: ['PyTorch', 'FastAPI', 'Docker','Hugging Face Transformers','Docker','PostgreSQL'],
      color: 'border-cyber-purple'
    },
    {
      id: 6,
      title: 'RealTime-AI/ML- Phishing_Detection_&_Prevention',
      type: 'FULL-STACK',
      status: 'ACTIVE',
      description: 'End-to-end encrypted messaging platform',
      tech: ['Fast API', 'Open AI', 'Kubernetes', 'Docker'],
      color: 'border-neon-blue'
    }
  ];

  const statusColors = {
    'ACTIVE': 'text-cyber-green',
    'DEPLOYED': 'text-cyber-blue',
    'BETA': 'text-cyber-orange',
    'DEVELOPMENT': 'text-cyber-pink',
    'RESEARCH': 'text-cyber-purple'
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-cyber-dark to-dark-bg relative overflow-hidden">
      {/* Minimal cyberpunk GIF overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: "url('/media/pixel-jeff-clipa-s.gif')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08}} />
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlitchText className="text-3xl md:text-5xl text-cyber-green mb-4">
            PROJECTS.DATABASE
          </GlitchText>
          <div className="text-cyber-blue text-lg">LOADING PROJECT ARCHIVES...</div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`pixel-button ${project.color} p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="w-full h-32 mb-4 bg-gradient-to-br from-cyber-dark to-black border border-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full h-full object-cover"
                      style={{ opacity: 1 }}
                    />
                  ) : (
                    <div className="text-4xl opacity-60">
                      {project.type === 'AI/ML' && '🤖'}
                      {project.type === 'FULL-STACK' && '⚡'}
                      {project.type === 'FRONTEND' && '📊'}
                      {project.type === 'WEB3' && '🔗'}
                    </div>
                  )}
                </div>
                {/* Pixelated overlay effect */}
                <div className="absolute inset-0 opacity-20 pixel-perfect"
                     style={{
                       backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${project.color.includes('blue') ? '06B6D4' : project.color.includes('green') ? '10B981' : project.color.includes('pink') ? 'EC4899' : project.color.includes('orange') ? 'F97316' : '8B5CF6'}'%3E%3Cpath d='M0 0h2v2H0V0zm2 2h2v2H2V2z'/%3E%3C/g%3E%3C/svg%3E\")`,
                       backgroundSize: '8px 8px'
                     }}
                />
              </div>

              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <GlitchText className="text-lg text-white font-bold">
                    {project.title}
                  </GlitchText>
                  <div className="text-xs text-cyber-blue uppercase">
                    {project.type}
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 border ${statusColors[project.status]} border-current`}>
                  {project.status}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="text-xs text-cyber-purple uppercase tracking-wider">
                  TECH STACK:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-cyber-dark border border-gray-600 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                <a
                  href={project.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <PixelButton variant="accent" size="sm" className="w-full">
                    DEMO
                  </PixelButton>
                </a>
              </div>

              {/* Hover Effects */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-current animate-ping opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-2 left-2 w-1 h-4 bg-current opacity-0 group-hover:opacity-60" />
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <div className="pixel-button border-cyber-purple text-white p-8 max-w-2xl mx-auto">
            <GlitchText className="text-2xl text-cyber-purple mb-6">
              GITHUB.STATS
            </GlitchText>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl text-cyber-green font-bold">15+</div>
                <div className="text-xs text-gray-400">COMMITS</div>
              </div>
              <div>
                <div className="text-2xl text-cyber-blue font-bold">5+</div>
                <div className="text-xs text-gray-400">REPOS</div>
              </div>
              <div>
                <div className="text-2xl text-cyber-pink font-bold">7+</div>
                <div className="text-xs text-gray-400">LANGUAGES</div>
              </div>
              <div>
                <div className="text-2xl text-cyber-orange font-bold">3+</div>
                <div className="text-xs text-gray-400">STARS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
