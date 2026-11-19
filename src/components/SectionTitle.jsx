const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">

      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>

      <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />

      <p className="text-slate-500 dark:text-slate-400 mt-5">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionTitle;