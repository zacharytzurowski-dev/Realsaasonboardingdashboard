interface WelcomeHeaderProps {
  name: string;
}

export function WelcomeHeader({ name }: WelcomeHeaderProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="mb-8">
      <h1 className="text-4xl text-white tracking-tight mb-2">
        Welcome back, <span className="bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] bg-clip-text text-transparent">{name}</span>
      </h1>
      <p className="text-[#6B6C7B]">{currentDate}</p>
    </div>
  );
}
