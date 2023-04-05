export const HoverText = ({ text }: { text: string[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {text.map((elem) => (
        <p
          key={elem}
          className="delay-50 text-2xl transition ease-in-out hover:text-cyan-300"
        >
          {elem}
        </p>
      ))}
    </div>
  );
};