export const Card = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="h-44 w-52 rounded-xl bg-gradient-to-r from-primary to-secondary p-1">
      <div className="flex h-full  w-full items-center justify-center gap-8 rounded-lg bg-background p-4">
        {icon}
      </div>
    </div>
  );
};
