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
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-xl bg-primary opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
      <Card className="relative">
        <CardContent className="flex h-[210px] w-[300px] items-center p-1 md:h-[250px] md:w-[400px]">
          {children}
        </CardContent>
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
      </Card>
    </div>
  );
};
