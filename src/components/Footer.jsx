import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 flex items-center flex-wrap justify-around">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Venugopal Vangolu • Portfolio. All rights reserved.
      </p>
      <a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to Top"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
