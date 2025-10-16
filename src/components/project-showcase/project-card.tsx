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
      <div className="bg-primary absolute -inset-0.5 min-w-80 rounded-xl opacity-50 blur-xs transition duration-1000 group-hover:opacity-75 group-hover:duration-200" />
      <Card className="relative flex flex-col justify-between">
        <CardContent className="p-1">{children}</CardContent>
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
    </div>
  );
};
