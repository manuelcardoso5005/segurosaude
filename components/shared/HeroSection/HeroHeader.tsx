type HeroHeaderProps = {
  title: string;
  highlight: string;
  description: string;
};

export default function HeroHeader({
  title,
  highlight,
  description,
}: HeroHeaderProps) {
  return (
    <>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        {title}{' '}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h1>

      <p className="text-xl text-slate-300 mb-8">{description}</p>
    </>
  );
}