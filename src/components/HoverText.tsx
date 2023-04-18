export const HoverText = ({ text }: { text: string[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {text.map((elem, index) => (
        <p
          key={index}
          className="delay-50 text-2xl transition ease-in-out hover:text-secondary"
        >
          {elem}
        </p>
      ))}
    </div>
  );
};
