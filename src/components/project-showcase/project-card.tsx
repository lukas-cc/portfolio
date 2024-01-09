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
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-pink rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <Card className="relative">
        <CardContent className="flex md:w-[500px] md:h-[350px] w-[300px] h-[210px] items-center p-1">
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
