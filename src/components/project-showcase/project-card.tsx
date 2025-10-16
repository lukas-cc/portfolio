import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

type ProjectCardProps = {
  children: React.ReactNode;
  title: string;
  text: string;
  href: string;
};

export const ProjectCard = ({
  children,
  title,
  text,
  href,
}: ProjectCardProps) => {
  return (
    <Card className="relative flex flex-col justify-between border border-white/20">
      <CardContent className="p-1">
        <div className="relative h-[270px] w-full overflow-hidden">
          {children}
        </div>
      </CardContent>
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{text}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>
            <a
              className="btn-primary btn btn-sm"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
